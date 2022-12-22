import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';

const InputViews = () => {
  const [name, setName] = useState('');
  const [Submitted, setSubmitted] = useState(false);
  const handleChange = () => {
    if (name.length > 3) {
      setSubmitted(!Submitted);
    } else {
      // Alert.alert('Warning', 'enter atleast 3 character', [
      //   {text: 'Submit', onPress: () => console.warn('Sumbitted Pressed !!!!!')},
      //   {text: 'Dont Show Again', onPress: () =>Alert.alert("Thanks to visit us")},
      // ],
      //   {
      //     cancelable:true
        
      //   }
       
      // );

      //ToastAndroid.show('enter atleast 3 character',
      ToastAndroid.showWithGravity('enter atleast 3 character',
      ToastAndroid.LONG,
      ToastAndroid.CENTER
      )
    }
  };
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
      <Text>InputViews</Text>
      <View>
        <TextInput
          placeholder="enter name"
          onChangeText={value => setName(value)}
          style={[styles.input]}
          keyboardType="email-address"
          secureTextEntry={true}
        />
        <TouchableOpacity style={[styles.btn]} onPress={handleChange}>
          <Text>{Submitted ? 'Clear' : 'Sumbit'}</Text>
        </TouchableOpacity>
      </View>
      {Submitted ? <Text>Name is :{name}</Text> : null}
    </View>
  );
};

export default InputViews;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'skyblue',
    marginHorizontal: 20,
  },
  btn: {
    backgroundColor: 'lightgreen',
    marginHorizontal: 20,
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
