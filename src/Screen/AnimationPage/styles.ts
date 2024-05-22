import { StyleSheet, Dimensions } from 'react-native';

import { THEME } from '../../styles/theme';
import { animations } from '../../data/animations';


export const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    alignItems: 'center'
  },

  cards: {
    paddingTop: 32,
  },

  content:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
    
  },
  subtitle: {
    fontSize: 20,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
  },

  card:{
    width: 300,
    height: 500,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 6,
    padding: 16,
    margin: 15,
  },
  animation:{
    margin: 'auto'
  }
})