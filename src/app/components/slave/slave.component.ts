import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slave',
  imports: [AsyncPipe],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {
  comServ = inject(ComService);

  normalSubscription?: Subscription

  subscribeResbj() {
    this.comServ.bSbj.subscribe(data => console.log('BEHAVIOR ', data));
  }

  subscribeBsbj() {
    this.comServ.reSbj.subscribe(data => console.log('REPLAY ', data));
  }

  subscribeSbj() {
    this.normalSubscription = this.comServ.sbj.subscribe(data => console.log('NORMAL ', data));
  }

  unsubscribe(){
    this.normalSubscription?.unsubscribe();
  }
}
