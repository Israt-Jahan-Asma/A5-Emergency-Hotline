// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

const heartCountSpan = document.getElementById('heart-count');
const heartButtons = document.querySelectorAll('.heart-button');

for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
        let count = parseInt(heartCountSpan.innerText);
        count++;
        heartCountSpan.innerText = count;
    });
}

// Show an alert with a message including the service name and number
const callButtons = document.querySelectorAll('.call-button')
for (let i= 0; i< callButtons.length ; i++){
    callButtons[i].addEventListener('click', function(){
      let card = callButtons[i].closest('.card');

      let serviceName = card.querySelector('.service-name').innerText;
      let serviceNumber = card.querySelector('.service-number').innerText;

      alert( "Calling " + serviceName + ' ' + serviceNumber);
    })
}
