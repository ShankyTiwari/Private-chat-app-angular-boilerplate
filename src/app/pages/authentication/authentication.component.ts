import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

/* Importing services starts*/
import { FormService } from './../../services/form/form.service';
import { ChatService } from './../../services/chat/chat.service';
/* Importing services ends*/

/* importing interfaces starts */
import { UsernameAvailable } from './../../interfaces/username-available';
import { Auth } from './../../interfaces/auth';
/* importing interfaces starts */

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
	constructor(
		private router: Router,
		private formService: FormService,
		private chatService: ChatService
	) {}

	ngOnInit() {}

}
