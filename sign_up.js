// sign up
document.getElementById('sign_up_form').addEventListener('submit',signUpUser); // event listener for form submit button and js function
function signUpUser(e){
    e.preventDefault();
    // Get form data as entered by user
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    message = document.getElementById('message');
    var status_code;
    // do registration
    fetch('https://rmutubarides.herokuapp.com/api/v2/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // content formatted to json. jsonify creates a json string form name-value pair
        },
        body: JSON.stringify({
            username:username,
            email: email,
            password: password
        })
    })
    .then((result) => {
        status_code = result.status; // creates a promise
        return result.json();
    })
    .then((data) => {
        document.getElementById('message').innerHTML = data['message'];
        if (status_code => 406){
            document.getElementById('message').innerHTML = data['message'];// errors during signup
        }
        if (status_code => 201){
            document.getElementById('message').innerHTML = data['message']; // successful signup
        }        
    });      
    
}
// End of signup