// Insert your code here

const btnRegister = document.querySelector('#register')
const btnConnection = document.querySelector('#connection')


btnRegister.addEventListener('click', function () {
    const emailValue = document.querySelector('#registerEmail').value
    const passwordValue = document.querySelector('#registerPassword').value
    const nameValue = document.querySelector('#registerName').value

    fetch('https://weather-backend-two.vercel.app/users/signup', {

    method: 'POST',

    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({email: emailValue, password: passwordValue, name: nameValue})

})
.then(response => response.json())
 .then(data => {
    console.log(data)
    if (data.result) {

        window.location.assign('index.html');
      }
 })
})


btnConnection.addEventListener('click', function () {
    const emailValue = document.querySelector('#connectionEmail').value
    const passwordValue = document.querySelector('#connectionPassword').value

    fetch('https://weather-backend-two.vercel.app/users/signin', {

    method: 'POST',

    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({email: emailValue, password: passwordValue})

})
.then(response => response.json())
 .then(data => {
    console.log(data)
    if (data.result) {
        window.location.assign('index.html');
      }
 })
})