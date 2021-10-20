import {
    StyleSheet
} from 'react-native';

const Colors = {
    WHITE: '#fff',
    BLACK: '#000',
    ALTO: '#FFF2CC',
    GREY: '#808080',
    EBONY_CLAY: '#292d3e',
    HEATHER: '#bfc7d5',
    LYNCH: '#697098',
    SHARK: '#242526',
    SHUTTLE_GREY: '#565E67',
    YELLOW1: '#ffc000',
    YELLOW2: '#f2db99',
    YELLOW3: '#FFF2CC',
    GREY1: '#c2c2c2',
    GREY2: '#d9d9d9',
    GREY3: '#5e5e5e',
    GREY4: '#f2f2f2', // default screen background
    GREY5: '#ECECEC',
    GREY6: '#8c8c8c',
    GREY7: '#F8F8F8'
};

export const ICONS = {
    ARROW_DOWN: require('./icons/arrow-down.png'),
    ARROW_UP: require('./icons/arrow-up.png'),
    TICK: require('./icons/tick.png'),
    CLOSE: require('./icons/close.png')
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
        //height: 50,
        minHeight:40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.BLACK,
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
        borderWidth:0.5,


    },
    label: {
        flex: 1,
        color: Colors.GREY,

    },
    labelContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    arrowIcon: {
        width: 20,
        height: 20
    },
    tickIcon: {
        width: 20,
        height: 20
    },
    closeIcon: {
        width: 30,
        height: 30
    },
    badgeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.ALTO,
        paddingVertical: 5,
        marginVertical: 5,
    },
    badgeDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        marginRight: 8,
    },
    badgeSeparator: {
        width: 5,

    },
    listBody: {
        flexGrow: 1,
        top:0,
        flexDirection: 'column',

    },
    listBodyContainer: {

        //alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'



    },
    dropDownContainer: {
        position: 'absolute',
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        width: '100%',
        overflow: 'hidden',

        zIndex: 100
    },
    modalContentContainer: {
        flexGrow: 1,
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 30,
        marginVertical:1,
        borderRadius:20,
        marginHorizontal:5,


    },
    listItemContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 30,
        marginVertical:1,
        borderRadius:50,
        marginHorizontal:5,
        backgroundColor: Colors.YELLOW3,

    },
    listItemLabel: {
        flex: 1,
        color: Colors.BLACK
    },
    iconContainer: {
        marginRight: 10,
    },
    arrowIconContainer: {
        marginLeft: 10
    },
    tickIconContainer: {
        marginLeft: 10
    },
    closeIconContainer: {
        marginLeft: 10
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
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1,
        backgroundColor: Colors.GREY2,


    },
    searchTextInput: {
        flexGrow: 1,
        flexShrink: 1,
        margin: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE,


    },
    itemSeparator: {
        height: 1,
        backgroundColor: Colors.BLACK,
    },
    flatListContentContainer: {
        flexGrow: 1
    },
    customItemContainer: {

    },
    customItemLabel: {
        fontStyle: 'italic'
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

    }
});
