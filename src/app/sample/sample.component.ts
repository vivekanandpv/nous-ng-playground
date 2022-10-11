import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() title = 'Sample Component';
  @Input() body = 'This is a paragraph';

  @Output() onOk = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onOk.emit('Hello, Angular');
  }
}
