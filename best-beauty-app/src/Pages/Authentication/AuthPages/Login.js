import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Authentication.css'
import stockImg from '../../../Assets/pexels-suzyhazelwood-1472098.jpg'
import { auth } from '../Context/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        setError('')
        setLoading(true)
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        setError('Failed to login ' + errorCode)
      })
    setLoading(false)
  }

  return (
    <div className='container-md d-flex align-items-center m-5 pb-5 pt-3 justify-content-between authentication'>
      <div className="w-100 mb-4" style={{ maxWidth: '400px' }}>
        <Card className='common-text'>
          <Card.Body>
            <h2 className='text-center mb-4 title'>Login</h2>
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
              <Button type='submit' className="w-100 mb-3 mt-4" disabled={loading}>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/Signup">Signup</Link>
        </div>
      </div>
      <div>
        <img src={stockImg} alt="stock-img" style={{ maxWidth: '350px' }} />
      </div>
    </div>
  )
}

export default Login
