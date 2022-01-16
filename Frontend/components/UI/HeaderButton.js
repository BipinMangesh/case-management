import React from 'react';
import { Platform } from 'react-native';
// import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
  return <Button
  onPress={() => alert('This is a button!')}
  title="Info"
  color="#fff"
/>;
};

export default CustomHeaderButton;
