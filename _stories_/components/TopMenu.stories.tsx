import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopMenu } from '../../components/TopMenu';

export default {
  title: 'Components/TopMenu',
  component: TopMenu,
} as ComponentMeta<typeof TopMenu>;

const Template: ComponentStory<typeof TopMenu> = (args) => <TopMenu {...args} />;

export const BeforeLogin = Template.bind({});
BeforeLogin.args = {
  locale: 'EN/EN',
};

export const AfterLogin = Template.bind({});
AfterLogin.args = {
  locale: 'EN/EN',
  user: {
    name: 'Saad',
    avatar: '',
  },
  notifications: 5,
};


