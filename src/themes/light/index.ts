import {
  StyleSheet,
} from 'react-native';

import Colors from '../../constants/Colors';

// import ARROW_DOWN from './light/icons/arrow-down.png';
// import ARROW_UP from './light/icons/arrow-up.png';
// import TICK from './light/icons/arrow-down.png';
// import CLOSE from './light/icons/arrow-down.png';

// const ARROW_DOWN = require('./light/icons/arrow-down.png');
// const ARROW_UP = require('./light/icons/arrow-up.png');
// const TICK = require('./light/icons/tick.png');
// const CLOSE = require('./light/icons/close.png');

export const ICONS = {
  // ARROW_DOWN,
  // ARROW_UP,
  // TICK,
  // CLOSE,
};

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  style: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.logoBlue,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
  },
  label: {
    flex: 1,
    color: Colors.darkgrey,
    fontWeight: 'bold',
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  tickIcon: {
    width: 20,
    height: 20,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  badgeStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.ALTO,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginRight: 8,
    backgroundColor: Colors.GREY,
  },
  badgeSeparator: {
    width: 5,
  },
  listBody: {
    height: '100%',
  },
  listBodyContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  dropDownContainer: {
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    borderColor: Colors.logoBlue,
    borderWidth: 1,
    width: '100%',
    overflow: 'hidden',
    zIndex: 1000,
  },
  modalContentContainer: {
    flexGrow: 1,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 40,
  },
  listItemLabel: {
    flex: 1,
    color: Colors.darkgrey,
  },
  iconContainer: {
    marginRight: 10,
  },
  arrowIconContainer: {
    marginLeft: 10,
  },
  tickIconContainer: {
    marginLeft: 10,
  },
  closeIconContainer: {
    marginLeft: 10,
  },
  listParentLabel: {

  },
  listChildLabel: {

  },
  listParentContainer: {

  },
  listChildContainer: {
    paddingLeft: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: Colors.logoBlue,
    borderBottomWidth: 1,
  },
  searchTextInput: {
    flexGrow: 1,
    flexShrink: 1,
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: Colors.logoBlue,
    borderWidth: 1,
    color: Colors.BLACK,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: Colors.logoBlue,
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
  customItemContainer: {

  },
  customItemLabel: {
    fontStyle: 'italic',
  },
  listMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  listMessageText: {

  },
  selectedItemContainer: {

  },
  selectedItemLabel: {

  },
  modalTitle: {
    fontSize: 18,
    color: Colors.BLACK,
  },
});
