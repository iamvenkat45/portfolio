import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  socialLinks = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getSocialLinks();
  }

  getSocialLinks() {
    this.dashboardService.getSocialLinks().subscribe((linksData)=> {
      this.socialLinks = linksData['socialLinks'];
    })
  }

}
