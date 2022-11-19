const express = require('express')
const { WordsApi, ConvertDocumentRequest } = require('asposewordscloud')
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config()
const token = process.env.BACKEND_TOKEN
const wordsApi1 = process.env.WORS_API1
const wordsApi2 = process.env.WORS_API2

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  },
})

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 },
}).single('file')

// CLoud
wordsApi = new WordsApi(wordsApi1, wordsApi2)
app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/docx-pdf/convert', (req, res) => {
  if (req.headers.authorization !== token) {
    return res.status(401).json({ msg: 'Unauthorized user.', status: 401 })
  }
  upload(req, res, () => {
    const outputFile = 'converted.pdf'
    const path = req.file.path
    const type = 'pdf'

    console.log(req.file)

    initConverter(outputFile, type, path, res)
  })
})

app.post('/pdf-docx/convert', (req, res) => {
  if (req.headers.authorization !== token) {
    return res
      .status(401)
      .json({ msg: 'Unauthorized user. Try again later', status: 401 })
  }

  upload(req, res, () => {
    const outputFile = 'converted.docx'
    const path = req.file.path
    const type = 'docx'

    initConverter(outputFile, type, path, res)
  })
})

const initConverter = (outputFile, fileType, path, res) => {
  const request = new ConvertDocumentRequest({
    format: fileType,
    document: fs.createReadStream(path),
  })
  wordsApi.convertDocument(request).then((result) => {
    fs.writeFileSync(outputFile, result.body)
    res.download(outputFile)
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`PORT RUNNING ON PORT ${PORT}`))
