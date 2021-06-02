import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
  h1: {
    fontSize: hp('4.5%'),
    fontWeight: '700',
  },
  h2: {
    fontSize: hp('4.0%'),
    fontWeight: '700',
  },
  h3: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
  },
  h4: {
    fontSize: hp('3.0%'),
    fontWeight: '600',
  },
  h5: {
    fontSize: hp('2.5%'),
    fontWeight: '600',
  },
  h6: {
    fontSize: hp('2.0%'),
    fontWeight: '600',
  },
  subtitle1: {
    fontSize: hp('1.5%'),
    fontWeight: '600',
  },
  subtitle2: {
    fontSize: hp('1.5%'),
    fontStyle: 'italic',
  },
  body1: {
    fontSize: hp('1.5%'),
    lineHeight: hp('2.1%'),
  },
  body2: {
    fontSize: hp('1.2%'),
    lineHeight: hp('1.8%'),
  },
  body3: { // onboarding body text
    fontSize: hp('2.0%'),
    lineHeight: hp('2.8%'),
  },
  body4: { // onboarding subtitle text
    fontSize: hp('2.5%'),
    lineHeight: hp('3.5%'),
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontStyle: 'bold',
  },
  mb1: {
    marginBottom: hp('0.4%'),
  },
  mb2: {
    marginBottom: hp('0.8%'),
  },
  mb3: {
    marginBottom: hp('1.2%'),
  },
  mb4: {
    marginBottom: hp('1.6%'),
  },
  mb5: {
    marginBottom: hp('2%'),
  },
};
