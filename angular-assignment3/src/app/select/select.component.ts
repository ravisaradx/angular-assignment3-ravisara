import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareService } from '../share.service';
import { CommonModule } from '@angular/common';
import { Data } from '../share.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ShareService],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

    names: string[] = ['kageyama', 'hinata', 'sugawara','daichi', 'kita', 'bokuto', 'oikawa', 'ushiwaka'];
    info: Data[] = [];

    constructor(private share: ShareService) { }

    ngOnInit() {
      this.share.getData(this.names).subscribe((v) => {
        this.info = v.map(obj => ( obj as Data))
      })
    }

    word: string = '';
    search() {
      this.info = this.info.filter(search => search.name.includes(this.word));
    }
}
