import React from 'react'
import Button from './Button/index.jsx'
import { useNavigate } from 'react-router'

function BackButton() {
  const navigate = useNavigate()

  return (
    <Button
      type="back"
      handler={e => {
        e.preventDefault()
        navigate(-1)
      }}>
      &larr; Back
    </Button>
  )
}

export default BackButton
