import { html } from 'lit';
import '../src/project3-progress-bar.js';

export default {
  title: 'Project3ProgressBar',
  component: 'project3-progress-bar',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project3-progress-bar
      style="--project3-progress-bar-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project3-progress-bar>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
