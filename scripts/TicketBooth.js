const contentTarget = document.querySelector('.entry');
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('click', (clickEvt) => {
	if (clickEvt.target.id.startsWith('ride')) {
		const rideEvent = new CustomEvent('rideTicketPurchased', {
			detail: {
				Athing: 'Something',
			},
		});
		eventHub.dispatchEvent(rideEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('food')) {
		const foodEvent = new CustomEvent('foodTicketPurchased', {});
		eventHub.dispatchEvent(foodEvent);
	}
});

eventHub.addEventListener('click', (e) => {
	if (e.target.id.startsWith('game')) {
		const gameEvent = new CustomEvent('gameTicketPurchased', {});
		eventHub.dispatchEvent(gameEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('side')) {
		const sideshowEvent = new CustomEvent('sideshowTicketPurchased', {});
		eventHub.dispatchEvent(sideshowEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('full')) {
		const fullPackageEvent = new CustomEvent('fullPackageTicketPurchased', {});
		eventHub.dispatchEvent(fullPackageEvent);
	}
});

export const TicketBooth = () => {
	contentTarget.innerHTML = `
        <div class="ticketBooth">
						<button id="rideTicket">Ride Ticket</button>
						<button id="foodTicket">Food Ticket</button>
						<button id="gameTicket">Game Ticket</button>
						<button id="sideshowTicket">Sideshow Ticket</button>
						<button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `;
};
