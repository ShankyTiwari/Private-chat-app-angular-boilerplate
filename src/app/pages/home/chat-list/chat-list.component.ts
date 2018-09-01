import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Importing services starts*/
import { ChatService } from './../../../services/chat/chat.service';
import { SocketService } from './../../../services/socket/socket.service';
import { DataShareService } from './../../../services/utils/data-share.service';

/* importing interfaces starts */
import { User } from './../../../interfaces/user';
import { ChatListResponse } from './../../../interfaces/chat-list-response';

@Component({
	selector: 'app-chat-list',
	templateUrl: './chat-list.component.html',
	styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
	constructor(
		private chatService: ChatService,
		private socketService: SocketService,
		private router: Router,
		private dataShareService: DataShareService
	) { }

	ngOnInit() {}
}
