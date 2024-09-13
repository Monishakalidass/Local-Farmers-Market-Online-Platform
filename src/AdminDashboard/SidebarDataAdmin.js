import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { BiCategory } from 'react-icons/bi';


export const SidebarDataAdmin = [
  {
    title: 'Home',
    path: '/admindashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Product',
    path: '/Productadmindash',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Vendors',
    path: '/Vendoradmindash',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    
    title: 'Manage Category',
    path: '/categoryadmindash',
    icon: <BiCategory /> ,
    cName: 'nav-text'
  },
  {
    title: 'Manage Help',
    path: '/helpdashadmin',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];