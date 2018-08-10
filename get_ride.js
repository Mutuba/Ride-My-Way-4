document.getElementById('get_ride_form').addEventListener('submit', getRide);

function getRide(e) {
    e.preventDefault();

    ride_id = document.getElementById('getRideInput').value;

    fetch(`https://rmutubarides.herokuapp.com/api/v2/rides/${ride_id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', "access-token": window.localStorage.getItem("token")}
    })

        .then(res => res.json())
        //console.log(data);
        .then(data => {
            console.log(data);

            let outpout = `<section id="rides-given-dashboard">
                            <div class="container" >
                                  <h3 id="message"></h3>
                                    <table>
                                      <thead>
                                        <tr>

                                          <th scope="col">Ride Date</th>
                                          <th scope="col">Category</th>
                                          <th scope="col">Pick Up</th>
                                          <th scope="col">Drop Off</th>
                                          <th scope="col">Date</th>
                                          <th scope="col">Ride Status</th>
                            
                                        </tr>
                                      </thead>
                                      <tbody id="rides">
                                        <tr>

                                          <td>${data[0]["ride_date"]}</td>
                                          <td>${data[0]["category"]}</td>
                                          <td>${data[0]["pick_up"]}</td>
                                          <td>${data[0]["drop_off"]}</td>
                                          <td>${data[0]["date_time"]}</td>
                                          <td>${data[0]["ride_status"]}</td>
                                          <td><button onclick="joinRide(${data[0]["ride_id"]})" class="button_1">Join offer</button></td>												
                                        
                                          
                                        </tr>
                                      </tbody>

                                    </table>
                                  </div>

                                </div>
                            </section>`;
            //console.log(data[0]["ride_id"]);
            document.getElementById('rideDetails').innerHTML = outpout
        })
}
