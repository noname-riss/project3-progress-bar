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


.graphicTitle
{
  display: column;

}
.background
{
  border: 2px solid black;
  padding: 5px;
  background: light grey;

}
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
    <div class="graphic" aria-label="Bar Graphic that show how long to load a bar">
<div class="graphicTitle">
  How long to fill up the bars
  </div>
<div class="background">
${this.bar.map(bars => html`
    <progress-bar title="${bars.title}" endTime="${bars.endTime}" startTime="${bars.startTime}" widthSize="${bars.widthSize}" startColor="${bars.startColor}" endColor="${bars.endColor}">
  </progress-bar>
  `)}
  </div>
  </div>
`:``}
`
  }
}

customElements.define('bar-list', BarList);
