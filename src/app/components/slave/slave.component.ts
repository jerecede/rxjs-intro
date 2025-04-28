import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';

@Component({
  selector: 'app-slave',
  imports: [],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {
  comServ = inject(ComService);

  subscribeResbj() {
    this.comServ.bSbj.subscribe(data => console.log('behavior', data));
  }

  subscribeBsbj() {
    this.comServ.reSbj.subscribe(data => console.log('replay', data));
  }

  subscribeSbj() {
    this.comServ.sbj.subscribe(data => console.log('normal', data));
  }
}
