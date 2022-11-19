import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'

// Components
import { Container, Alert, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const PDF = () => {
  const [file, setFile] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const token = process.env.REACT_APP_BACKEND_TOKEN

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setError(false)
      setSuccess(false)
    }, 1500)
  }, [error, setError, success, setSuccess])

  // Functions
  const changeHandler = (e) => {
    const type = ['application/pdf']
    const inputType = e.target.files[0].type
    const inputName = e.target.files[0].name

    if (!type.includes(inputType)) {
      setFile('')
      return setError(
        'WHOOPS! You inserted unsupported file. Please insert PDF file only',
      )
    }

    setFile(e.target.files[0])
    setName(inputName)
  }

  const submitHanlder = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData()
    data.append('file', file)

    try {
      await axios
        .post(
          'https://glacial-plains-30860.herokuapp.com/pdf-docx/convert',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `${token}`,
            },
            responseType: 'blob',
          },
        )
        .then((response) => FileDownload(response.data, 'coverted.docx'))
      setLoading(false)
      setSuccess(true)
      setName('')
    } catch (err) {
      setError(err)
    }
  }

  return (
    <div>
      <Container>
        <div className="my-2 d-flex align-items-center justify-content-center">
          <div className="my-5 text-center w-75">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">Converted file successfully</Alert>
            )}
            <div>
              <h4>
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="fa-fw text-primary"
                />{' '}
                PDF to Word Converter
              </h4>
              <p className="lead">It converts PDF to Word easily</p>
            </div>
            <div>
              <Form onSubmit={submitHanlder}>
                <div className="Form__input p-2">
                  <label>
                    <input
                      type="file"
                      onChange={changeHandler}
                      name="file"
                      required
                    />
                    <p className="Form__btn d-flex align-items-center justify-content-center rounded-circle border border-primary">
                      +
                    </p>
                  </label>
                  <p className="lead">{name}</p>
                </div>
                <div className="">
                  <Button
                    disabled={loading}
                    variant="primary"
                    type="submit"
                    className="btn-block"
                  >
                    {loading ? 'Converting . . .' : 'Convert'}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PDF
