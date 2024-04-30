import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Authentication.css'
import stockImg from '../../../Assets/pexels-suzyhazelwood-1472098.jpg'
import { auth } from '../Context/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError('Passwords do not match');
    }

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        setError('')
        setLoading(true)
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        setError('Failed to create an account ' + errorCode)
      })
    setLoading(false)
  }

  return (
    <div className='container-md d-flex align-items-center m-5 pb-5 pt-3 justify-content-between authentication'>
      <div className="w-100 mb-4" style={{ maxWidth: '400px' }}>
        <Card className='common-text'>
          <Card.Body>
            <h2 className='text-center mb-4 title'>Signup</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' className="w-100" ref={emailRef} required />
              </Form.Group>
              <Form.Group id='password'>
                <Form.Label className='mt-3'>Password</Form.Label>
                <Form.Control type='password' className="w-100" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id='passwordConf'>
                <Form.Label className='mt-3'>Password Confirmation</Form.Label>
                <Form.Control type='password' className="w-100" ref={passwordConfRef} required />
              </Form.Group>
              <Button type='submit' className="w-100 mb-3 mt-4" disabled={loading}>
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/Login">Login</Link>
        </div>
      </div>
      <div>
        <img src={stockImg} alt="stock-img" style={{ maxWidth: '350px' }} />
      </div>
    </div>
  )
}

export default Signup
