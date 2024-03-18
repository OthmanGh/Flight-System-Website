const from=document.getElementById('searchFlight-form');
const departureAirport=document.getElementById('departure-airport');
const arrivalAirport=document.getElementById('arrival-airport');
const departureDate=document.getElementById('departure-date');
const arrivalDate=document.getElementById('arrival-date');
const passengers=document.getElementById('passengers');


const clearSearchInputs = () => {
    departure.value = '';
    arrival.value = '';
    date.value = '';
    passengers.value = '';
  };

const searchFlight = async (e) => {
  e.preventDefault();

  const url = 'http://localhost/Flight-System-Website/backend/searchFlight.php';
  const formatData = new FormData();

  formatData.append('departure_airport', departureAirport.value);
  formatData.append('arrival_airport', arrivalAirport.value);
  formatData.append('departure_date', departureDate.value);
  formatData.append('arrival_date', arrivalDate.value);

  const options = {
    method: 'POST',
    body: formatData,
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data);

    if (data['status'] === 'success') {
      clearSearchInputs();
      
      
    } else {
      error.textContent = `${data['message']} 😂`;
    }
  } catch (error) {
    console.error(error);
  }
};


function toggleTab(tabIndex) {
    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[tabIndex].style.display = "block";
  
    // Remove the 'active-tab-button' class from all buttons
    let buttons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
    }
  
    // Add the 'active-tab-button' class to the clicked button
    buttons[tabIndex].classList.add("active-tab-button");
  }
  
  toggleTab(0);