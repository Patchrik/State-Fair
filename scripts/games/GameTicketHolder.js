const contentTarget = document.querySelector('.games');
const eventHub = document.querySelector('#state-fair');

export const GameTicketHolders = () => {
	eventHub.addEventListener('gameTicketPurchased', (event) => {
		console.log('you pushed the game button');
		contentTarget.innerHTML += `<div class='person player'></div>`;
	});
};
