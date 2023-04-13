import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3ProgressBar extends LitElement {
  static properties = {
    timer: { type: Number},
    title: {type: String},

  }

  static styles = css`

  `;

  constructor() {
    super();
    this.title = 'Testing';
    this.timer = 0;
  }

  render() {
    return html`

    <div>
    ${this.title}
    </div>
    `;
  }
}

customElements.define('progress-bar', Project3ProgressBar);
