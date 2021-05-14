import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { PromptComponent } from '../prompt/prompt.component';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private promptEvent: any;

  constructor(private bottomSheet: MatBottomSheet) {}

  public initPwaPrompt() {
    console.log('inside');
    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.promptEvent = event;
      this.openPromptComponent('android');
    });
  }

  private openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => {
        this.bottomSheet.open(PromptComponent, {
          data: { mobileType, promptEvent: this.promptEvent },
        });
      });
  }
}
