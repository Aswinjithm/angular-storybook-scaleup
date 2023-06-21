import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { StoryDemoComponent } from '../storyDemo.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Components/Link',
  component: StoryDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [StoryDemoComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};

const Template: Story<StoryDemoComponent> = () => ({
  component: StoryDemoComponent,
  props: {
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    content: text('Text', 'Visit Storybook'),
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  template: `
    <story-demo
      [color]="color"
      [href]="href"
      [target]="target"
    >
      {{ content }}
    </story-demo>
  `,
});
export const Examples = Template.bind({});
