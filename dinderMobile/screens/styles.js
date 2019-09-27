import {
  Platform,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  developmentModeText: {
    // marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    // paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    // marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    color:'white',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'white',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 24,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { width: 0, height: -3 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 3,
    //   },
    //   android: {
    //     elevation: 20,
    //   },
    // }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    // paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    // marginTop: 5,
  },
  helpContainer: {
    // marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
export default styles;