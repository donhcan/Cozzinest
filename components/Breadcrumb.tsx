import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { BreadcrumbItem } from '../common/types';

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <AntdBreadcrumb>
      {
        items.slice(0, items.length - 1).map(item => (
          <AntdBreadcrumb.Item
            key={item.name}
          >
            <a href={item.link}>{item.name}</a>
          </AntdBreadcrumb.Item>
        ))
      }
      <AntdBreadcrumb.Item className="font-bold opacity-[.45]">
        {items[items.length - 1].name}
      </AntdBreadcrumb.Item>
    </AntdBreadcrumb>
  )
}