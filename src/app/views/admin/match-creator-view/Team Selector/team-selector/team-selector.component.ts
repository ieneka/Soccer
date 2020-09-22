import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../../../Managers/managers.service';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.css'],
})
export class TeamSelectorComponent implements OnInit {
  team: any = [];
  managers = null;
  teamName: string;

  constructor(private managersService: ManagersService) {}
  ngOnInit(): void {
    this.managers = this.managersService.getManagers();
  }
}
