  //get dom for login button
  let loginButton = document.querySelector('.login-button');
  let inputEmail = document.querySelector('#login-email');
  let inputPassword = document.querySelector('#login-password');
  
  
  loginButton.addEventListener('click', async e=>{
    e.preventDefault();
  
    //make fetch call to store info into an obj
    let newLogin = {
        email: inputEmail.value,
        password: inputPassword.value
    }

   //make api call to add a new login
    await fetch('/login', {
    method: "POST",
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    body: JSON.stringify(newLogin)
   })

//    let loginInfo = await results.json();
//    console.log(`New login is: ${loginInfo}`);

  })