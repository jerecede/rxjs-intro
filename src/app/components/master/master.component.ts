import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  comServ = inject(ComService);

  changeResbj() {
    const newString = 'replaySubject' + Date.now();
    this.comServ.reSbj.next(newString);
  }

  changeBsbj() {
    const newString = 'behaviorSubject' + Date.now();
    this.comServ.bSbj.next(newString);
  }

  changeSbj() {
    const newString = 'normalSubject' + Date.now();
    this.comServ.sbj.next(newString);
  }
}
