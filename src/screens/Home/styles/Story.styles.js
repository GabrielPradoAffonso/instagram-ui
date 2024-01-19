import { StyleSheet } from 'react-native';

const stylesStory = StyleSheet.create({
  storys: {
    paddingVertical: 10,
    width: '100%',
    paddingLeft: 10,
    alignContent: 'center',
  },
  storysCard: {
    borderWidth: 2,
    borderRadius: 50,
    marginRight: 14,
    padding: 3,
  },
  storysCardImage: {
    width: 74,
    height: 74,
  },
  addStoryText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00BFFF',
    width: 20,
    height: 20,
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  storyName: {
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
    marginRight: 12,
    fontSize: 13,
  },

});

export default stylesStory;