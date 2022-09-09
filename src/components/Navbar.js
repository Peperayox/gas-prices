import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { FlagOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" shape="square" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Euro Gas</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(true)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<FlagOutlined />}>
            <Link to="/">Europe</Link>
          </Menu.Item>
          <Menu.Item icon={<FlagOutlined />}>
            <Link to="/europe">europe</Link>
          </Menu.Item>
          <Menu.Item icon={<FlagOutlined />}>
            <Link to="/canada">Canada</Link>
          </Menu.Item>
          <Menu.Item icon={<FlagOutlined />}>
            <Link to="/world">Rest of the World</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
