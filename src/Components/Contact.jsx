import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type ='text' placeholder='enter ur name' required/>
            <input type ='email' placeholder='enter E-mail' required/>
            <textarea placeholder='Wrtite Here.....' name='message'></textarea>
            <input type='submit' value='send' />

        </form>

    </div>
  )
}

export default Contact