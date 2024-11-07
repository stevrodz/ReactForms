import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    <Authenticate token={token} setToken={setToken} />
    <SignUpForm token={token} setToken={setToken} />
    </>
  )
}
