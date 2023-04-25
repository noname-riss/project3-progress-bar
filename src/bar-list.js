import { LitElement, html, css } from 'lit';
import "./progress-bar.js";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";
import '@lrnwebcomponents/count-up/count-up.js';

class BarList extends IntersectionObserverMixin(LitElement) {
  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return{
      ...props,
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
    this.bar = data;
    });
    }

  render() {
    return html`
    ${this.elementVisible ? html`


<div class="background">
${this.bar.map(bars => html`
    <progress-bar title="${bars.title}" endTime="${bars.endTime}" startTime="${bars.startTime}" widthSize="${bars.widthSize}">
  </progress-bar>
  `)}
  </div>
  <count-up start="${this.startTime}" end="${this.endTime}" duration="${this.endTime}" ></count-up>


`:``}
`
  }
}

customElements.define('bar-list', BarList);
