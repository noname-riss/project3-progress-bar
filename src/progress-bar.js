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
    height: 50px;
    width: 440px;
  }

  .bar
  {
    background: linear-gradient(to left, var(--background-of-bar, red), var(--background-of-bar, yellow));
    width: 440px;
  animation-timing-function:linear;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  animation-duration: 5s;
  animation-composition: add;
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
  <div class="barStyle">
  <div class="bar" style="animation-duration: ${this.endTime}s">
  </div>
  </div>
    </div>
    ` : ``};
    `
  }
}

customElements.define('progress-bar', Project3ProgressBar);
