import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeCarousel } from '../../components/HomeCarousel';

export default {
  title: 'Components/HomeCarousel',
  component: HomeCarousel,
} as ComponentMeta<typeof HomeCarousel>;

const Template: ComponentStory<typeof HomeCarousel> = (args) => <HomeCarousel {...args} />;

export const OneLength = Template.bind({});
OneLength.args = {}
