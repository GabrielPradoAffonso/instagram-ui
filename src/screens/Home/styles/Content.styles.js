import { StyleSheet } from 'react-native';

const stylesContent = StyleSheet.create({
  content: {
    width: "100%",
  },
  contentAllPosts: {
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentHeaderLeft: {
    flexDirection: "row",
    gap: 10,
    alignItems: 'center'
  },
  contentHeaderLeftImage: {
    width: 35,
    height: 35,
  },
  contentHeaderLeftText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  contentPost: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 10,
    gap: 10,
  },
  contentInteraction: {
    gap: 9,
    paddingTop: 15,
    marginLeft: 7,
  },
  postImage: {
    flex: 1,
    resizeMode: 'cover',
    aspectRatio: 1,
    width: '100%',
    height: '100%',
  },
});

export default stylesContent;
