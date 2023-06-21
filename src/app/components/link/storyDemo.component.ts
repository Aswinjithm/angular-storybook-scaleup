import { Component, Input } from '@angular/core';

@Component({
  selector: 'story-demo',
  templateUrl: './storyDemo.component.html',
  styleUrls: ['./storyDemo.component.scss']
})
export class StoryDemoComponent {

  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() href: string;
  @Input() target?: '_self' | '_blank' | '_parent' | '_top' = '_self';

  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }

}
