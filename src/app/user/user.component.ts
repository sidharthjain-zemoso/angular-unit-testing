import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  user: { name: string } = { name: '' };
  data!: string;
  isLoggedIn = false;
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => (this.data = data));
  }
}
