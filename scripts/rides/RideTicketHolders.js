const contentTarget = document.querySelector('.rides');
const eventHub = document.querySelector('#state-fair');

export const RideTicketHolders = () => {
	eventHub.addEventListener('rideTicketPurchased', (event) => {
		console.log('You pushed the ride button');
		contentTarget.innerHTML += `<div class='person rider'></div>`;
	});
};
