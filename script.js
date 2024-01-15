function calculateLove() {
    var yourName = document.getElementById("yourName").value.trim();
    var partnerName = document.getElementById("partnerName").value.trim();

    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
        return;
    }

    // Display the progress bar and countdown timer
    var progressBar = document.getElementById("progressBar");
    progressBar.style.display = "block";

    var countdown = 15; // 15 seconds
    var countdownDisplay = document.getElementById("countdown");
    countdownDisplay.innerText = countdown;

    var countdownInterval = setInterval(function () {
        countdown--;
        countdownDisplay.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);

            // Generate a random percentage between 0 and 100
            var lovePercentage = Math.floor(Math.random() * 101);

            // Display the result
            var resultDiv = document.getElementById("result");
            var resultMessage = `The love between ${yourName} and ${partnerName} is ${lovePercentage}%!`;
            resultDiv.innerText = resultMessage;

            // Hide the progress bar and show the result
            progressBar.style.display = "none";
            resultDiv.style.display = "block";
        }
    }, 1000); // Update countdown every 1 second
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}