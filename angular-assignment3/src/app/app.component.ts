import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment3';
}
