import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
} from 'react-icons/md';

export const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Staff',
    path: '/staff',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
];
