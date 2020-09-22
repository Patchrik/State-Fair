// Import and invoke the ticket booth component function

import { TicketBooth } from './TicketBooth.js';
import { RideTicketHolders } from './rides/RideTicketHolders.js';
import { FoodTicketHolders } from './food/FoodTicketHolders.js';
import { GameTicketHolders } from './games/GameTicketHolder.js';
import { SideShowTicketHolders } from './sideshows/SideShowTicketHolder.js';
import { FullPackageTicketHolders } from './fullPackageTicket.js';
TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideShowTicketHolders();
FullPackageTicketHolders();
