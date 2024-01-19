
import React from 'react';
import { View, Text } from 'react-native';
import stylesHome from '../screens/Home/styles/Home.styles';
import stylesMessage from '../screens/Home/styles/Messages.styles';
import Logo from '../assets/logo.svg'
import Stroke from '../assets/stroke.svg';
import Message from '../assets/message.svg';

const HeaderComponent = ({ unreadMessages }) => {
  return (
    <View style={stylesHome.header}>
      <Logo />
      <View style={stylesHome.headerOptions}>
        <Stroke />
        <Message />
        {unreadMessages > 0 && (
          <View style={stylesMessage.unreadMessages}>
            <Text style={stylesMessage.unreadMessagesText}>{unreadMessages}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
