import { LitElement, html, css } from 'lit';
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
      endTime:{type: Number},
      title: {type: String}
    }
  }

  static styles = css`

  .wrapper
  {
    background-color: blue;
    border: black;
  }
  `;

  constructor() {
    super();
    this.title = 'Testing';
    this.startTime = 0;
    this.endTime = 100;
  }

  render() {
    return html`

    <div class='wrapper'>
      <div>
      ${this.title}
  </div>

    </div>
    `;
  }
}

customElements.define('progress-bar', Project3ProgressBar);
