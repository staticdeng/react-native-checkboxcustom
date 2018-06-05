import React from 'react-native';

export default React.StyleSheet.create({

    list: {},

    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10
    },

    optionLabel: {
        marginLeft: 5
    },

    optionIndicator: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },


    separator: {
        height: 1,
        marginTop: 4,
        marginBottom: 4,
    },
    radio:{
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems:'center',
        justifyContent:'center'
    },
    radioSelected: {
        borderColor: '#3bcb7e',
    },
    optionSelected:{
        color:'#3bcb7e'
    },
    dot:{
        width:14,
        height:14,
        backgroundColor:'#0066CC',
        borderRadius:7
    }
});