const callHistoryData = []

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


const callButtons = document.querySelectorAll('.call-button')
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function () {

        // Each call will cut 20 coins. Reduce Coin after each click.

        const coinSpan = document.getElementById('coin-count');
        let coins = parseInt(coinSpan.innerText);
        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }
        coins -= 20;
        coinSpan.innerText = coins;

        // Show an alert with a message including the service name and number
        let card = callButtons[i].closest('.card');
        let serviceName = card.querySelector('.service-name').innerText;
        let serviceNumber = card.querySelector('.service-number').innerText;

        alert("Calling " + serviceName + ' ' + serviceNumber);

        // Add this service into the Call History section with
        const data = {
            serviceName: serviceName,
            serviceNumber: serviceNumber,
            time: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data);

        const callHistoryContainer = document.getElementById('call-history-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-[16px] flex justify-between gap-4 items-center p-4 mt-4">
                <div>
                    <h3 class="text-[18px] font-bold text-[#111]">${data.serviceName}</h3>
                    <p class="font-[Hind Madurai] text-[18px] text-[#5C5C5C]">${data.serviceNumber}</p>
                </div>
                <div>
                    <p class="text-[#111] text-[18px]">${data.time}</p>
                </div>
            </div>
        `
        callHistoryContainer.appendChild(div);

    })

}
// Clicking this button will remove all data from call history

const clearButton = document.getElementById('clear-history')
const callHistoryContainer = document.getElementById('call-history-container')

clearButton.addEventListener('click', function () {
    callHistoryData.length = 0;
    callHistoryContainer.innerHTML = "";
})