document.getElementById('driver_dashboard').addEventListener('submit', createRide);
function createRide(e){
    e.preventDefault();
    let category = document.getElementById('category').value;
    let pick_up = document.getElementById('pickup').value;
    let drop_off = document.getElementById('dropoff').value;
    let date_time = document.getElementById('datetime').value
    message = document.getElementById('message');
    var status_code;

    if(window.localStorage.getItem('token') ===""){
        result = confirm("You need to log in first.\nPress Ok to go to login");
        if(result){
            redirect : window.location.replace('sign_up.html')
        }
    }
    else{
        fetch('https://rmutubarides.herokuapp.com/api/v2/rides',{        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                category:category,
                pick_up: pick_up,
                drop_off: drop_off,
                date_time: date_time
                
            })

        })
        .then((result) => {
            statusCode = result.status
            return result.json()
        })
        .then((data) => {
            if(statusCode == 401){
                result = confirm('Your have ' + data['message'] + '\nClick Ok to go to login')
                if(result){
                    redirect: window.location.replace('sign_in.html')
                }
            }
            else {
                result = alert(data['message'])
                if(result){
                    redirect: window.location.replace('driver_dashboard.html')
                }
            }
        })
    }

}