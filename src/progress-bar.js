import { LitElement, html, css,unsafeCSS } from 'lit';
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";
import '@lrnwebcomponents/count-up/count-up.js';


class Project3ProgressBar extends LitElement {
  static properties = {
      startTime:{type: String},
      endTime:{type: String},
      title: {type: String},
      widthSize: {type: String}
  }

  static styles = css`

  .wrapper
  {
    display: flex;
    border: 2px solid black;
    padding: 5px;
  }
  .barStyle{
    height: 40px;
    width: 440px;
    display: flex;
    padding: 5px;
    background: grey;
    border-radius: 5px
  }
.text{
  padding: 5px;

}
  .bar
  {
    border-radius: 5px;
    background: linear-gradient(to left, red, yellow);
    height: 40px;
    width: 440px;
  animation-timing-function:linear;
  animation-fill-mode: normal;
  animation-delay: 0s;
  animation-duration: 5s;
  animation-name: progress;
  }

  @keyframes progress{
        0% {width: 0%; }
        100% {width: 97.8%; }
      }

  `;

  constructor() {
    super();
    this.title = 'Testing';
    this.startTime = 0;
    this.endTime = 20;
    this.widthSize = 40;
  }

  render() {
    return html`


    <div class='wrapper'>
<div class="text">
      ${this.title}
  </div>
  <div class="barStyle" style= "width: ${this.widthSize}%">
  <div class="bar" style="animation-duration: ${this.endTime}s; width: 100%; animation-delay: ${this.startTime}s">
  </div>
  </div>
  <count-up start="${this.startTime}" end="${this.endTime}" duration="${this.endTime}" noeasing="true" decimalPlaces="2"></count-up>
    </div>

    `
  }
}

customElements.define('progress-bar', Project3ProgressBar);
