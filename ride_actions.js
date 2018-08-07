document.getElementById('delete_ride_form').addEventListener('submit', deleteRide);
function deleteRide(e){
    e.preventDefault();
    ride_id = document.getElementById('getRideInput').value;
    // ride_id = parseInt(my_ride_id)    
    message = document.getElementById('message');
    var status_code;

    if(window.localStorage.getItem('token') ===""){
        result = confirm("You need to log in first.\nPress Ok to go to login");
        if(result){
            redirect : window.location.replace('sign_up.html')
        }
    }
    else{
        fetch(`https://rmutubarides.herokuapp.com/api/v2/rides/${ride_id}`,{        
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access-token': window.localStorage.getItem('token')
            }
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
                    redirect: window.location.replace('delete_ride.html')
                }
            }
        })
    }

}