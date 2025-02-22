import React, { useState } from 'react'
import "./css/PasswordGenerator.css"

function PasswordGenerator() {

  const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


  const allCharacters = lowercaseLetters.concat(uppercaseLetters, numbers, symbols); //concatena los 3 arrays en uno solo

  // console.log(allCharacters);
  
  const [newPassword, setNewPasword] = useState("");

  function createPassword(){
    let password = "";
    for(let i = 0; i<=10; i++){
      const randomIndex = Math.floor(Math.random() * allCharacters.length)
      password += allCharacters[randomIndex];
    }
    setNewPasword(password);
    console.log(newPassword);
  }

  return (
    <>
    <main className='container'>
      <div className='pswrd-container'>

      <div>
        <h1 className='cursor typewriter-animation' color='rgb(4, 255, 0)'> Password Generator</h1>
      </div>  
      
      <input value={newPassword} type="text" placeholder='Generated Password' name="" id="" />
      <button onClick={createPassword}>Generate new Password</button>

      <div>
        <button id='github-btn'>gitHub</button>
      </div>

      </div>
    </main>
    </>
  )
}

export default PasswordGenerator;