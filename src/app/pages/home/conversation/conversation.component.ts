import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

/* Importing services starts*/
import { ChatService } from './../../../services/chat/chat.service';
import { SocketService } from './../../../services/socket/socket.service';
import { FormService } from './../../../services/form/form.service';
import { DataShareService } from './../../../services/utils/data-share.service';
/* Importing services ends*/

/* importing interfaces starts */
import { MessagesResponse } from './../../../interfaces/messages-response';
import { Message } from './../../../interfaces/message';
import { User } from './../../../interfaces/user';
/* importing interfaces ends */

@Component({
	selector: 'app-conversation',
	templateUrl: './conversation.component.html',
	styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
	constructor(
		private router: Router,
		private chatService: ChatService,
		private socketService: SocketService,
		private formService: FormService,
		private dataShareService: DataShareService
	) {}

	ngOnInit() {}
}
