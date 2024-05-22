import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

const dimensions = Dimensions.get('window');

const CARDS_PER_ROW = 2;
const HORIZONTAL_PADDING_SCREEN = 32 * 2;
const MARGIN = 6 * 2;

const CARD_WIDTH = (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

export const styles = StyleSheet.create({

  container: {
    width: CARD_WIDTH,
    height: 169,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 6,
    padding: 16,
    margin: MARGIN,
  },
  content:{
    margin: 'auto'
  }
});