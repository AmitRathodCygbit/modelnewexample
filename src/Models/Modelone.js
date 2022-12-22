import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
 
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Sound from 'react-native-sound';
// import InputViews from '../component/InputViews';

const Modelone = () => {
  const [IsVisbile, setIsVisible] = useState(false);
  let control_Local, control_Online;

  let localSound = require('../main/res/raw/s1.mp3');

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (control_Local) control_Local.release();
    };
  }, []);

  const playSound_Local = () => {
    control_Local = new Sound(localSound, (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      // control_Local.play(() => {
      //   control_Local.release();
      // });
      control_Local.play(() => {
        control_Local.release();
      });
    });
  };
  const stopSound_Local = () => {
    control_Local.stop(() => {
      console.log('Stop Playing...');
    });
  };
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2022/01/05/17/30/chrismas-pattern-6917643_960_720.png',
      }}
      resizeMode="cover"
      blurRadius={2}
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        animationType="slide"
        visible={IsVisbile}
        transparent={true}
        onRequestClose={() => {
          setIsVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000099',
            justifyContent: 'flex-end',
            // alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightgreen',
              position: 'absolute',
              bottom: 20,
              top: '50%',
              right: 10,
              left: 10,
              borderRadius: 30,
            }}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2022/01/03/01/40/chrismas-6911559_960_720.jpg',
                }}
                resizeMode="cover"
                style={{width: '70%', height: '100%'}}
              />
            </View>
           <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.titleText}>
              {' '}
              Play chrismas Song{' '}
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={playSound_Local}>
              <Text style={styles.buttonText}> Play </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={stopSound_Local}>
              <Text style={styles.buttonText}> Stop </Text>
            </TouchableOpacity>
           </View>
            <View
              style={{
                paddingVertical: 16,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'skyblue',
                  paddingHorizontal: 48,
                  paddingVertical: 24,
                  borderRadius: 15,
                }}
                onPress={() => {
                  setIsVisible(false), Alert.alert('jinga la la hu hu');
                }}>
                <Text style={[{color: 'white', textAlign: 'center'}]}>
                  Click
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* <InputViews /> */}
      <TouchableOpacity
       onPress={() => {
        setIsVisible(true);
      }}
        style={[
          {
            borderRadius: 20,
            marginHorizontal: 20,
            shadowColor: 'red',
            shadowRadius: 20,
            marginTop: 20,
            backgroundColor:"red",
            paddingVertical:20,
            paddingHorizontal:30
          
          },
        ]}>
        {/* <Button
          title="Suprise Gift"
          onPress={() => {
            setIsVisible(true);
          }}
          
        /> */}
        <Text style={{color:"white",fontSize:30}}>
        Suprise Gift
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default Modelone;

const styles = StyleSheet.create({
  modelContainer: {
    // backgroundColor: 'blue',
    // width: '100%',
    // height: '50%',
    // backgroundColor:"red",
    // borderColor:"blue",
    // borderWidth:5,
    // margin:10,
    // padding:10,
    // shadowOpacity:0.5,
    // shadowRadius:5,
    // elevation:5,
    // flex:1,
    // justifyContent: 'center',
    // borderTopLeftRadius:30,
    // borderTopRightRadius:30,
    // marginVertical:20
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
    borderRadius:20
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 21,
  },
});
