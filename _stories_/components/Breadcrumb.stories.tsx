import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from '../../components/Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const OneLength = Template.bind({});
OneLength.args = { items: [{ name: 'Home' }] }

export const TwoLength = Template.bind({});
TwoLength.args = {
  items: [{ name: "Home" }, { name: "Sub Level" }]
}

export const ThreeLength = Template.bind({});
ThreeLength.args = {
  items: [{ name: "Home" }, { name: "Sub Level" }, { name: 'Sub Level2' }]
}