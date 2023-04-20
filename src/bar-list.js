import { LitElement, html, css } from 'lit';
import "./progress-bar.js";
import '@lrnwebcomponents/count-up/count-up.js';

class BarList extends LitElement {
  static properties = {
    bar:{type: Array},
  }

  static styles = css`

  `;

  constructor() {
    super();
    this.header = 'My app';
    this.bar=[];
    this.createBars();
  }


  createBars() {
    const address = new URL('../api/bar-information.js',import.meta.url).href;
   fetch(address).then((response) =>{
         return response.json();
     }).then((data)=>{
    this.bar = data;
    });
    }


  render() {
    return html`
    <div>

       ${this.bar.map(bars => html`
      <progress-bar title="${bars.title}" endTime="${bars.endTime}" startTime="${bars.startTime}" widthSize="${this.widthSize}">
  </progress-bar>
  <count-up></count-up>
       `)}
      </div>
    `;
  }
}

customElements.define('bar-list', BarList);
