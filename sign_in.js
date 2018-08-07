// Login
document.getElementById('sign_in_form').addEventListener('submit', login);
function login(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    var status_code;

    fetch('https://rmutubarides.herokuapp.com/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:username,
            password:password
        })
    })
    .then((result) => {
        status_code = result.status;
        return result.json();
    })
    .then((data) =>{
        if(status_code >= 400){
            document.getElementById('login').innerHTML = data['message'];
        }
        else{
            // stores tokens to browser
            window.localStorage.setItem('token', data.token)
            
            redirect: window.location.replace("dashboard.html")

        }
    })
}