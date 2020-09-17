const contentTarget = document.querySelector('.sideshow');
const eventHub = document.querySelector('#state-fair');

export const SideShowTicketHolders = () => {
	eventHub.addEventListener('sideshowTicketPurchased', (event) => {
		console.log('You pushed the sideshow button');
		contentTarget.innerHTML += `<div class='person gawker'></div>`;
	});
};
