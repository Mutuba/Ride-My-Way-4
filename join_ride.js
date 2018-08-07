document.getElementById('join_ride_form').addEventListener('submit', joinRide);
function joinRide(e){
    e.preventDefault();
    ride_id = document.getElementById('getRideInput').value;
    // ride_id = parseInt(my_ride_id)    
    let request_description = document.getElementById('description').value;
    let request_priority = document.getElementById('priority').value
    message = document.getElementById('message');
    var status_code;

    if(window.localStorage.getItem('token') ===""){
        result = confirm("You need to log in first.\nPress Ok to go to login");
        if(result){
            redirect : window.location.replace('sign_up.html')
        }
    }
    else{
        fetch(`https://rmutubarides.herokuapp.com/api/v2/rides/${ride_id}/requests`,{        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                request_description:request_description,
                request_priority: request_priority
                
            })

        })
        .then((result) => {
            statusCode = result.status
            return result.json()
        })
        .then((data) => {
            if(statusCode == 400){
                result = confirm(data['message'])

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