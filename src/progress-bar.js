import { LitElement, html, css,unsafeCSS } from 'lit';
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3ProgressBar extends IntersectionObserverMixin(LitElement) {
  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return{
      startTime:{type: Number},
      endTime:{type: String},
      title: {type: String},
      widthSize: {type: Number}
    }
  }

  static styles = css`

  .wrapper
  {

    border: 2px solid black;
  }
  .barStyle{
    height: 40px;
    width: 440px;
    display: flex;
    padding: 5px;
    background: grey;
    border-radius: 5px
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
    this.widthSize = 100;
  }

  render() {
    return html`
${this.elementVisible ? html`

    <div class='wrapper'>
<div>
      ${this.title}
  </div>
  <div class="barStyle" style= "width: ${this.widthSize}px">
  <div class="bar" style="animation-duration: ${this.endTime}s; width: ${this.widthSize}px; animation-delay: ${this.startTime}s">
  </div>
  </div>
    </div>
    ` : ``};
    `
  }
}

customElements.define('progress-bar', Project3ProgressBar);
