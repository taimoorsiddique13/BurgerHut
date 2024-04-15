const slotsPerHundredDollars = 5;

function calculateAvailableSlots(budget) {
  return Math.floor(budget / 100) * slotsPerHundredDollars;
}

function updateAvailableSlots() {
  var budgetInput = document.getElementById("budget");
  var budget = parseFloat(budgetInput.value.trim());
  var availableSlots = calculateAvailableSlots(budget);
  var availableSlotsElement = document.getElementById("available-slots");
  availableSlotsElement.textContent = "Available Slots: "+ availableSlots;
}

function submitReservation() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var date = document.getElementById("date").value.trim();
  var time = document.getElementById("time").value.trim();
  var seats = document.getElementById("seats").value.trim();
  var budget = document.getElementById("budget").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === '' || email === '' || phone === '' || date === '' || time === '' || seats === '' || budget === '') {
    alert("Please fill in all the fields.");
    return;
  }

  if (isNaN(seats) || isNaN(budget)) {
    alert("Please enter a valid number for seats and budget.");
    return;
  }

  if (parseInt(seats) <= 0 || parseInt(budget) <= 0) {
    alert("Seats and budget must be greater than zero.");
    return;
  }

  var availableSlots = calculateAvailableSlots(parseInt(budget));
  if (availableSlots <= 0) {
    alert("No slots available for the specified budget.");
    return;
  }

  var reservationDetails = "Name: " + name + "<br>Date: " + date + "<br>Time: " + time + "<br>Seats: " + seats + "<br>Message: " + message + "<br>Available Slots: " + availableSlots;

  document.getElementById("reservation-details").innerHTML = "<h3>Reservation Details:</h3>" + reservationDetails;

  // Show the popup
  document.getElementById("reservation-popup").style.display = "block";

  // Optionally, you can clear the form fields after submission
  document.getElementById("reservation-form").reset();
}
function confirmReservation() {
  closePopup(); 
  alert("Reservation confirmed!");
}

function closePopup() {
  document.getElementById("reservation-popup").style.display = "none";
}

document.getElementById("budget").addEventListener("input", updateAvailableSlots);
updateAvailableSlots();
