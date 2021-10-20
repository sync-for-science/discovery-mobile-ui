import React, {
    memo, useCallback, useMemo
} from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Entypo, Ionicons, Feather } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

const Colors = {
    WHITE: '#fff',
    BLACK: '#000',
    ALTO: '#dfdfdf',
    GREY: '#808080',
    EBONY_CLAY: '#292d3e',
    HEATHER: '#bfc7d5',
    LYNCH: '#697098',
    SHARK: '#242526',
    YELLOW1: '#ffc000',
    YELLOW2: '#f2db99',
    YELLOW3: '#FFF2CC',
    SHUTTLE_GREY: '#565E67'

};
import { RTL_DIRECTION, RTL_STYLE } from './constants';

function RenderBadge({
    rtl,
    label,
    value,
    textStyle,
    badgeStyle,
    badgeTextStyle,
    badgeDotStyle,
    getBadgeColor,
    getBadgeDotColor,
    showBadgeDot,
    onPress,
    THEME
}) {
    /**
     * onPress.
     */
    const __onPress = useCallback(() => onPress(value), [onPress, value]);

    /**
     * The badge style.
     * @returns {object}
     */
    const _badgeStyle = useMemo(() => ([
        RTL_DIRECTION(rtl, THEME.badgeStyle),
        ...[badgeStyle].flat(), {
            backgroundColor: getBadgeColor(value)
        }
    ]), [THEME, rtl, badgeStyle, getBadgeColor]);

    /**
     * The badge dot style.
     * @return {object}
     */
    const _badgeDotStyle = useMemo(() => ([
        RTL_STYLE(rtl, THEME.badgeDotStyle),
        ...[badgeDotStyle].flat(), {
            backgroundColor: getBadgeDotColor(value)
        }
    ]), [THEME, rtl, badgeDotStyle, getBadgeDotColor]);

    /**
     * The badge text style.
     * @returns {object}
     */
    const _badgeTextStyle = useMemo(() => ([
        ...[textStyle].flat(),
        ...[badgeTextStyle].flat()
    ]), [textStyle, badgeTextStyle]);

    return (

        <TouchableOpacity style={[_badgeStyle, {backgroundColor: Colors.YELLOW3}]} onPress={__onPress}>
          <Feather name="x" size={16} color={Colors.currentCollectionColor} />

            {/**showBadgeDot && <View style={_badgeDotStyle} />*/}
            <Text style={_badgeTextStyle}>{label}</Text>
        </TouchableOpacity>
    );
}

const areEqual = (nextProps, prevProps) => {
    if (nextProps.label !== prevProps.label)
        return false;
    if (nextProps.value !== prevProps.value)
        return false;
    if (nextProps.showBadgeDot !== prevProps.showBadgeDot)
        return false;
    if (nextProps.rtl !== prevProps.rtl)
        return false;
    if (nextProps.theme !== prevProps.theme)
        return false;

    return true;
}

export default memo(RenderBadge, areEqual);
