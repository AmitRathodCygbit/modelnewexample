import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';

const CustomBtn = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btnClick,{backgroundColor:props.btnBackroundColor},{...props.extra}]}
      onPress={props.onPressFunction}>
      <Text style={[{color:props.textColor}]}>{props.titleBtn}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  modelContainer: {},
  btnClick: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 48,
    paddingVertical: 24,
    borderRadius: 15,
    margin:20
  },
  txtClick: {
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: 'black',
  },

  button: {
    justifyContent: 'center',
    width: '50%',
    padding: 5,
    backgroundColor: '#00B8D4',
    marginTop: 10,
    borderRadius: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 21,
  },
});
