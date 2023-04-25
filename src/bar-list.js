import { LitElement, html, css } from 'lit';
import "./progress-bar.js";
import '@lrnwebcomponents/count-up/count-up.js';

class BarList extends IntersectionObserverMixin(LitElement) {
  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return{
    bar:{type: Array},
  }
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
    const address = '/api/bar-information';
   fetch(address).then((response) =>{
    if(response.ok){
      return response.json();
    }
         return [];
     }).then((data)=>{
    this.bars = data;
    });
    }

  render() {
    return html`
    ${this.elementVisible ? html`

${this.bar.map(bars => html`
      <progress-bar title="${bars.title}" endTime="${bars.endTime}" startTime="${bars.startTime}" widthSize="${this.widthSize}">
  </progress-bar>
  `)}
  <count-up start="${this.startTime}" end="${this.endTime}" duration="${this.endTime}" ></count-up>

`:``};
`
  }
}

customElements.define('bar-list', BarList);
