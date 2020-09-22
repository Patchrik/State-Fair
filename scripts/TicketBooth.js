const contentTarget = document.querySelector('.entry');
const eventHub = document.querySelector('#state-fair');
let totalTicketPurchased = 0;
eventHub.addEventListener('click', (clickEvt) => {
	if (clickEvt.target.id.startsWith('ride')) {
		const rideEvent = new CustomEvent('rideTicketPurchased', {
			detail: {
				Athing: 'Something',
			},
		});
		totalTicketPurchased++;
		console.log(totalTicketPurchased);
		renderTotalTicketNumber(totalTicketPurchased);
		eventHub.dispatchEvent(rideEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('food')) {
		const foodEvent = new CustomEvent('foodTicketPurchased', {});
		totalTicketPurchased++;
		console.log(totalTicketPurchased);
		renderTotalTicketNumber(totalTicketPurchased);
		eventHub.dispatchEvent(foodEvent);
	}
});

eventHub.addEventListener('click', (e) => {
	if (e.target.id.startsWith('game')) {
		const gameEvent = new CustomEvent('gameTicketPurchased', {});
		totalTicketPurchased++;
		console.log(totalTicketPurchased);
		renderTotalTicketNumber(totalTicketPurchased);
		eventHub.dispatchEvent(gameEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('side')) {
		const sideshowEvent = new CustomEvent('sideshowTicketPurchased', {});
		totalTicketPurchased++;
		console.log(totalTicketPurchased);
		renderTotalTicketNumber(totalTicketPurchased);
		eventHub.dispatchEvent(sideshowEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('full')) {
		const fullPackageEvent = new CustomEvent('fullPackageTicketPurchased', {});
		totalTicketPurchased++;
		console.log(totalTicketPurchased);
		renderTotalTicketNumber(totalTicketPurchased);
		eventHub.dispatchEvent(fullPackageEvent);
	}
});

const renderTotalTicketNumber = (number) => {
	const totalTicketTarget = document.querySelector('#totalTicketParagraph');
	return (totalTicketTarget.innerHTML = `<p>Total Tickets Purchased: ${number}</p>`);
};

export const TicketBooth = () => {
	contentTarget.innerHTML = `
				<div class="ticketBooth">
						<div id="totalTicketParagraph"></div>
						<button id="rideTicket">Ride Ticket</button>
						<button id="foodTicket">Food Ticket</button>
						<button id="gameTicket">Game Ticket</button>
						<button id="sideshowTicket">Sideshow Ticket</button>
						<button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `;
};
