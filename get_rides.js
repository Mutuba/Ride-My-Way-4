window.addEventListener('load', returnAllRides);
document.getElementById('rides_given').addEventListener('click', returnAllRides);


function returnAllRides(e) {
    e.preventDefault();
    console.log(123)
    fetch('https://rmutubarides.herokuapp.com/api/v2/rides', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "access-token": window.localStorage.getItem("token")
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let rides = '';


            data.forEach(function (ride) {
                rides += `<tr > 
                                                <td>${ride.ride_id}</td>
                                                <td>${ride.ride_date}</td>
                                                <td>${ride.category}</td>
                                                <td>${ride.pick_up}</td>
                                                <td>${ride.drop_off}</td>
                                                <td>${ride.date_time}</td>
                                                <td>${ride.ride_status}</td>
                                                <td>${ride.creator_id}</td>
            
                            </tr>
                           
                                   
                `;

                });

            document.getElementById('rides').innerHTML = rides;

        })

}