import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
} from 'react-icons/md';

export const routes = [
  {
    name: 'Staff',
    path: '/staff',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
];
