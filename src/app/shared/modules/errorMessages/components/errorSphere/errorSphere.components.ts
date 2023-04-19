import { Component, Input, OnInit } from '@angular/core';
import TagCloud from 'TagCloud';

@Component({
  selector: 'ma-error-sphere',
  templateUrl: './errorSphere.components.html',
  styleUrls: ['./errorSphere.components.scss'],
})
export class ErrorSphereComponent implements OnInit {
  #initialErrors = [
    'Connection lost',
    'empty data',
    'Some error...',
    'Access denied',
    'check the correctness',
    '404',
    'reload the page',
    'Oops...',
    'Internal server error',
  ];

  @Input('errorMessages') errorMessagesProps: string[];

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    const container = document.getElementById('ma-error-sphere');
    if (!container) return;
    let tags = this.#initialErrors;

    if (!!this.errorMessagesProps) {
      tags = this.errorMessagesProps;
    }

    TagCloud(container, tags, {
      maxSpeed: 'fast',
      initSpeed: 'slow',
      radius: 180,
    });
  }
}
