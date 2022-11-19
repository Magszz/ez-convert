import React, { useState, useEffect } from 'react'

// Components
import { Container, Alert, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const PDF = () => {
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
    const type = ['application/pdf']
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
                WHOOPS! You inserted unsupported file. Please insert PDF file
                only.
              </Alert>
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
              <Form
                action="https://vy2m8ma9t4.herokuapp.com/convert/pdf-to-word"
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

export default PDF
