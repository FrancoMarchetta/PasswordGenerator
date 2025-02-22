import React from 'react'
import "./css/PasswordGenerator.css"

 function PasswordGenerator() {
    return (
    <>
    <main className='container'>
      <div className='pswrd-container'>

      <div>
        <h1 className='cursor typewriter-animation' color='rgb(4, 255, 0)'> Password Generator</h1>
      </div>  
      
      <input type="text" placeholder='Generated Password' name="" id="" />
      <button>Generate new Password</button>

      <div>
        <button id='github-btn'>gitHub</button>
      </div>

      </div>
    </main>
    </>
  )
}

export default PasswordGenerator;