const rideTarget = document.querySelector('.rides');
const foodTarget = document.querySelector('.food');
const gameTarget = document.querySelector('.games');
const sideShowTarget = document.querySelector('.sideshow');
const eventHub = document.querySelector('#state-fair');

export const FullPackageTicketHolders = () => {
	eventHub.addEventListener('fullPackageTicketPurchased', (event) => {
		console.log('You pushed the full package button');
		rideTarget.innerHTML += `<div class='person bigSpender'></div>`;
		foodTarget.innerHTML += `<div class='person bigSpender'></div>`;
		gameTarget.innerHTML += `<div class='person bigSpender'></div>`;
		sideShowTarget.innerHTML += `<div class='person bigSpender'></div>`;
	});
};
