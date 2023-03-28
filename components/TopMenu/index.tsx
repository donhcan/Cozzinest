import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import type { IUser, IdentityType } from '../../common/types';
import { leftMenuItems, getRightMenuItems } from './menus';
import { AuthLocale } from './AuthLocale';

const { Header } = Layout;

type TopMenuProps = {
  locale: string;
  user?: IUser;
  notifications: number;
  onLocaleChange?: (locale: string) => void;
  onIdentify?: (identity: IdentityType) => void;
}

export const TopMenu: React.FC<TopMenuProps> = ({
  locale,
  user,
  notifications,
  onLocaleChange,
  onIdentify,
}) => {
  const [currentL, setCurrentL] = useState('mail');

  const onClickLeftMenu: MenuProps['onClick'] = e => {
    setCurrentL(e.key);
  };

  return (
    <Header
      className="flex justify-between bg-white h-[72px]"
      style={{
        boxShadow: '0px -2px 18px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" />
        <Menu
          className="border-none"
          mode="horizontal"
          disabledOverflow={true}
          items={leftMenuItems}
          selectedKeys={[currentL]}
          onClick={onClickLeftMenu}
        />
      </div>
      <div className="flex items-center">
        <Menu
          className="border-none"
          mode='horizontal'
          disabledOverflow={true}
          items={getRightMenuItems(user, notifications)}
        />
        <AuthLocale
          locale={locale}
          onLocaleChange={onLocaleChange}
          user={user}
          onIdentify={onIdentify}
        />
      </div>
    </Header>
  );
}
