import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Data } from '../share.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ShareService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    names: string[] = ['kageyama', 'hinata', 'sugawara', 'daichi', 'kita', 'bokuto', 'oikawa', 'ushiwaka'];
    info: Data[] = [];

    constructor(private share: ShareService) { }

    ngOnInit() {
      this.share.getData(this.names).subscribe((v) => {
        this.info = v.map(obj => ( obj as Data))
      })
    }
}
