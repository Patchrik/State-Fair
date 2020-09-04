const contentTarget = document.querySelector('.food');
const eventHub = document.querySelector('#state-fair');

export const FoodTicketHolders = () => {
	eventHub.addEventListener('foodTicketPurchased', (event) => {
		console.log('you pushed the food button');
		contentTarget.innerHTML += `<div class='person eater'></div>`;
	});
};
