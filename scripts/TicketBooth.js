const contentTarget = document.querySelector('.entry');
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('click', (clickEvt) => {
	if (clickEvt.target.id.startsWith('rideTicket')) {
		const rideEvent = new CustomEvent('rideTicketPurchased', {
			detail: {
				Athing: 'Something',
			},
		});
		eventHub.dispatchEvent(rideEvent);
	}
});

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('foodTicket')) {
		const foodEvent = new CustomEvent('foodTicketPurchased', {});
		eventHub.dispatchEvent(foodEvent);
	}
});

eventHub.addEventListener('click', (e) => {
	if (e.target.id.startsWith('gameTicket')) {
		const gameEvent = new CustomEvent('gameTicketPurchased', {});
		eventHub.dispatchEvent(gameEvent);
	}
});

export const TicketBooth = () => {
	contentTarget.innerHTML = `
        <div class="ticketBooth">
						<button id="rideTicket">Ride Ticket</button>
						<button id="foodTicket">Food Ticket</button>
						<button id="gameTicket">Game Ticket</button>
        </div>
    `;
};
