const airlineSelect = document.getElementById("airline");

        const getAllAirlines = () => {
            fetch("http://localhost/Flight-System-Website/server/landing-page/get-airlines.php",{
                method:"GET"})
            
            .then((response) => {
                return response.json();
              })
            .then(data => {
                console.log(data);
                displayAllAirlines(data.allAirlines);
            })
            .catch(error => {
                console.error(error);
            });
        };

        const displayAllAirlines = (data) => {
            airlineSelect.innerHTML = "";
            data.forEach(airline => {
                const option = document.createElement("option");
                option.value = airline.name;
                airlineSelect.appendChild(option);
            });
        };

        getAllAirlines();