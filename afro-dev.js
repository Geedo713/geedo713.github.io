function redirectCall() {
  document.getElementById("submit").addEventListener("submit", function(event) {
    event.preventDefault()
  });
  document.querySelector('#survey-form')
  .addEventListener('click', () => {
  window.location.href =
  'example-form.html';
  });
}

const appointmentForm = document.getElementsByTagName('form')[0];

let opacity = 0;
        let intervalID = 0;
        window.onload = fadeIn;
  
        function fadeIn() {
            setInterval(show, 300);
        }
  
        function show() {
            opacity = Number(window.getComputedStyle(appointmentForm)
                             .getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity = opacity + 0.1;
                appointmentForm.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }





