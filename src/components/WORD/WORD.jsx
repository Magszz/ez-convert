import React, { useState, useEffect } from 'react'

// Components
import { Container, Alert, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord } from '@fortawesome/free-regular-svg-icons'

const WORD = () => {
  const [file, setFile] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 1500)
  }, [error, setError])

  // Functions
  const changeHandler = (e) => {
    const type = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    const inputType = e.target.files[0].type
    const inputValue = e.target.value
    const inputName = e.target.files[0].name

    if (!type.includes(inputType)) {
      setFile('')
      return setError(true)
    }

    setFile(inputValue)
    setName(inputName)
  }

  const submitHanlder = (e) => {
    setName('')
  }

  return (
    <div>
      <Container>
        <div className="my-2 d-flex align-items-center justify-content-center">
          <div className="my-5 text-center w-75">
            {error && (
              <Alert variant="danger">
                WHOOPS! You inserted unsupported file. Please insert Docx file
                only.
              </Alert>
            )}
            <div>
              <h4>
                <FontAwesomeIcon
                  icon={faFileWord}
                  className="fa-fw text-primary"
                />{' '}
                Word to PDF Converter
              </h4>
              <p className="lead">It converts Word to PDF easily</p>
            </div>
            <div>
              <Form
                action="https://vy2m8ma9t4.herokuapp.com/convert/word-to-pdf"
                encType="multipart/form-data"
                method="POST"
                onSubmit={submitHanlder}
              >
                <div className="Form__input p-2">
                  <label>
                    <input
                      type="file"
                      value={file}
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
                  <Button variant="primary" type="submit" className="btn-block">
                    Convert
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

export default WORD
