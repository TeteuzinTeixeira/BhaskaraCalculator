import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        marginBottom:25,
    },

    input:{
        color:'#FFF',
        width:50,
        height:30,
        backgroundColor:'#808080',
        borderRadius:3,
        borderBottomWidth:3,
        borderBottomColor:'#8080fb',
        marginLeft:8,
        marginRight:15,
        paddingLeft:10,
        paddingRight:10,
        fontSize:16,
    },

    textColor:{
        color:'#fff',
        fontSize:18,
    },

    container2:{
        width:'300',
        alignItems:'center',
    },

    result:{
        fontSize:20,
        marginTop:20,
        fontWeight:'bold',
        color:'#8080fb',
    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:250,
        borderRadius:10,
        padding:5,
        backgroundColor:'#8080fb'
    },

    buttonColor:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18,
    },

});

export default styles