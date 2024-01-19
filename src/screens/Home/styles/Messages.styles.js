import { StyleSheet } from 'react-native';

const stylesMessage = StyleSheet.create({
    unreadMessages: {
        position: 'absolute',
        top: -10,
        right: 8,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadMessagesText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 2,
    },
});

export default stylesMessage;