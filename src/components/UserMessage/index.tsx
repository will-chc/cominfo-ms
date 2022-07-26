import { Avatar, Button, Dropdown, Menu } from 'antd';
import React from 'react';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            退出登录
          </a>
        ),
      },
    ]}
  />
);

const UserMessage = () => (
  <>
    <Dropdown
      overlay={menu}
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Avatar/>
    </Dropdown>
  </>
);

export default UserMessage;