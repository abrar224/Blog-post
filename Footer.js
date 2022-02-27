import React from 'react'

export default function Footer() {
    let footerstyle = {
        position: 'absolute',
        top: '100vh',
        width: '100%'
    }
  return (
    <footer className='bg-dark text-light' style={footerstyle}>
    <p className='text-center'>
        Copyright &copy; myblog.com
    </p>
    </footer>
  )
}

