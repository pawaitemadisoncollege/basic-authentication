//In this component, you will create a navigation UI.

import React from 'react';
import { Link } from 'react-router-dom'; // link in {} means this is not the default export
import { Menu } from 'antd';
import { 
    HomeOutlined
    , ProfileOutlined
    , FileProtectOutlined 
} from '@ant-design/icons';

const Nav = ({ current }) => {  // destructure
  return (
    <div>
        <Menu 
            selectedKeys={[current]} 
            mode="horizontal"
        >
            <Menu.Item 
                key='home'>
                <Link 
                    to={`/`}>
                    <HomeOutlined />
                        Home
                </Link>
            </Menu.Item>

            <Menu.Item 
                key='profile'>
                <Link 
                    to='/profile'>
                    <ProfileOutlined />
                        Profile
                </Link>
            </Menu.Item>
            
            <Menu.Item 
                key='protected'>
                <Link 
                    to='/protected'>
                    <FileProtectOutlined />
                        Protected
                </Link>
            </Menu.Item>
        </Menu>
    </div>
  );
}

export default Nav