import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Importing services starts*/
import { SocketService } from './../../services/socket/socket.service';
import { ChatService } from './../../services/chat/chat.service';
import { DataShareService } from './../../services/utils/data-share.service';
/* Importing services ends*/

/* importing interfaces starts */
import { Auth } from './../../interfaces/auth';
/* importing interfaces ends */

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor(
		private chatService: ChatService,
		private socketService: SocketService,
		private dataShareService: DataShareService,
		private router: Router
	) { }

	ngOnInit() {}
}
