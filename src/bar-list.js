import { LitElement, html, css } from 'lit';


class BarList extends LitElement {
  static properties = {
    bar:{type: Array},
  }

  static styles = css`

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    
    `;
  }
}

customElements.define('bar-list', BarList);