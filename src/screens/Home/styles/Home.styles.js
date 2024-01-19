import { StyleSheet } from 'react-native';

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'space-between',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  headerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    marginRight: -5,
  },
  divider: {
    height: 0.3,
    backgroundColor: 'rgba(204, 204, 204, 0.2)',
    marginVertical: 1,
    width: '100%',
  },
});

export default stylesHome;
