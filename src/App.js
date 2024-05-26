import React from 'react';
import img2 from './assets/img2.svg';
import img3 from './assets/img3.png';
import './App.css';

const App = () =>{

  const validateForm = (event) =>{
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var cemail = document.getElementById("cemail").value;
            var password = document.getElementById("password").value;
            var cpassword = document.getElementById("cpassword").value;
            var number = document.getElementById("number").value;
            const checkbox = document.getElementById('checkbox');

            var usernameError = document.getElementById("nameerror");
            var emailError = document.getElementById("emailerror");
            var cemailError = document.getElementById("cemailerror");
            var passError = document.getElementById("passerror");
            var cpassError = document.getElementById("cpasserror");
            var numError = document.getElementById("numerror");
            var checkError = document.getElementById("checkerror")

            var isValid = true;

            usernameError.textContent = "";
            emailError.textContent = "";
            cemailError.textContent = "";
            passError.textContent = "";
            cpassError.textContent = "";
            numError.textContent = "";
            checkError.textContent = "";

            if (username === "") {
            usernameError.textContent = "Please enter your name";
            isValid = false;
            }
            
            function validateEmail(email) {
              const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return re.test(email);
            }

            if (!validateEmail(email)) {
              emailError.textContent="Enter Valid email";
              isValid=false;
            }

            if (email === "") {
            emailError.textContent = "Please enter your email";
            isValid = false;
            }
            if (cemail === "") {
            cemailError.textContent = "Please re-enter your email";
            isValid = false;
            }
            if (cemail !== email) {
              cemailError.textContent = "E-mail doen't match";
              isValid = false;
            }

            if (!validateEmail(email)) {
              cemailError.textContent="";
              isValid=false;
            }

            if (password === "") {
            passError.textContent = "Please enter your password";
            isValid = false;
            }
            if (cpassword !== password) {
            cpassError.textContent = "Password doen't match";
            isValid = false;
            }

            if (cpassword === "") {
            cpassError.textContent = "Please re-enter your password";
            isValid = false;
            }

            if(number === "" ) {
              numError.textContent = "Please enter your number";
            }
            if (!checkbox.checked) {
              checkError.textContent = "Please check the terms and conditions"
              isValid = false;
            }
            if (isValid) {
              alert("Registered successfully!!");
            }

            return isValid;
            
  }

    const mouseOver = () =>{
    var mouse=document.getElementById('mouse');
    mouse.style.backgroundColor='black';
    mouse.style.cursor='pointer';
    }

    const mouseOut = () =>{
      var mouse=document.getElementById('mouse');
      mouse.style.backgroundColor='';
      mouse.style.cursor='';
    }


  return (
    <div className="App">
      <div className='form'>
        <div className='col1'>
          <img src={img2} alt='img2' />
          <p>Or Login using</p>
          <img id='img3' src={img3} alt='img3' />
        </div>
        <div className='col2'>
          <div className='title'>
            <h1>Create Account</h1>
          </div>
          <div className='data'>
            <div className="input">
              <label htmlFor="username">Name :</label>
              <input type="text" id="username" name="username"/>
              <span className="error" id="nameerror"></span>
            </div>
            <div className="input">
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email"/>
              <span className="error" id="emailerror"></span>
            </div>
            <div className="input">
              <label htmlFor="cemail">Confirm email :</label>
              <input type="email" id="cemail" name="cemail"/>
              <span className="error" id="cemailerror"></span>
            </div>
            <div className="input">
              <label htmlFor="password">Password :</label>
              <input type="password" id="password" name="password"/>
              <span className="error" id="passerror"></span>
            </div>
            <div className="input">
              <label htmlFor="cpassword">Confirm password :</label>
              <input type="password" id="cpassword" name="cpassword"/>
              <span className="error" id="cpasserror"></span>
            </div>
            <div className="input">
              <label htmlFor="number">Mobile number :</label>
              <input type="number" id="number" name="number"/>
              <span className="error" id="numerror"></span>
            </div>
            <div>
              <div className='checkbox'>
              <div><input type='checkbox' id='checkbox' name='checkbox' required/></div>
              <div><label htmlFor='checkbox'>I Accept All the Terms and conditions</label></div>
              </div>
              <span className="error" id="checkerror"></span>
            </div>
            <div className="submit">
              <button type="button" onClick={validateForm}  onMouseOver={mouseOver} onMouseOut={mouseOut} id='mouse'>Register</button>
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
