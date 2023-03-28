
import React, { useState } from 'react';
import { Badge, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import type { IUser } from '../../common/types';

export const leftMenuItems: MenuProps['items'] = [
  {
    label: 'Menu',
    key: 'menu',
    icon: <MenuOutlined className="text-sm leading-none align-baseline" />,
    children: [
      {
        label: 'Buy',
        key: 'menu:buy',
        children: [
          {
            label: 'Buy 1',
            key: 'buy:1',
          },
          {
            label: 'Buy 2',
            key: 'Buy:2',
          },
        ],
      },
      {
        label: 'Rent',
        key: 'menu:rent',
        children: [
          {
            label: 'Rent 1',
            key: 'rent:1',
          },
          {
            label: 'Rent 2',
            key: 'rent:2',
          },
        ],
      },
      {
        label: 'Sell',
        key: 'menu:sell',
        children: [],
      },
      {
        label: 'Services',
        key: 'menu:services',
        children: [
          {
            label: 'Removal',
            key: 'removal',
          },
          {
            label: 'Architecture',
            key: 'menu:services:architecture',
          },
          {
            label: 'Diagnosis',
            key: 'menu:services:diagnosis',
          },
          {
            label: 'Home Staging',
            key: 'menu:services:home-staging',
          },
          {
            label: 'Insurance',
            key: 'menu:services:insurance',
          },
        ],
      },
      {
        label: 'Marketplace',
        key: 'menu:marketplace',
        children: [],
      },
    ],
  },
  {
    label: 'Agencies',
    key: 'agencies',
  },
  {
    label: 'Partners',
    key: 'partners',
  },
  {
    label: 'Pricing',
    key: 'pricing',
  },
  {
    label: 'FAQs',
    key: 'faqs',
  },
];

export const getRightMenuItems = (user: IUser | undefined, notifications: number): MenuProps['items'] => {
  const items = [
    {
      label: 'Estimation tool',
      key: 'r:estimation-tool',
    },
    {
      label: 'Publish',
      key: 'r:publish',

    },
    {
      key: 'r:search',
      icon: <SearchOutlined className="text-2xl align-baseline" />,
    },
  ];

  const notificationItem = {
    key: 'r:notifications',
    icon: <Badge count={notifications}>
      <BellOutlined className="text-2xl align-baseline" />
    </Badge>,
  };

  return !user ? items : [...items, notificationItem];
};
