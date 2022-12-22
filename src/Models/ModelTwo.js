import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Sound from 'react-native-sound';
import Scratch from './Scratch';
const ModelTwo = () => {
  const [IsVisbile, setIsVisible] = useState(false);
  let control_Local, control_Online;

  let localSound = require('../main/res/raw/s2.mp3');

  useEffect(() => {
    Sound.setCategory('Playback', true);
    return () => {
      if (control_Local) control_Local.release();
      if (control_Online) control_Online.release();
    };
  }, []);

  const playSound_Local = () => {
    control_Local = new Sound(localSound, (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      control_Local.play(() => {
        control_Local.release();
      });
    });
  };

  const stopSound_Local = () => {
    control_Local?.stop(() => {
      console.warn('Stop Playing...');
    });
  };
  let rotateValueHolder = new Animated.Value(0);

  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();
  //   };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2022/01/05/17/30/chrismas-pattern-6917643_960_720.png',
      }}
      resizeMode="cover"
      blurRadius={2}
      style={[styles.imgbg]}>
      <Modal
        animationType="slide"
        visible={IsVisbile}
        transparent={true}
        onRequestClose={() => {
          setIsVisible(false);
        }}>
        <View style={[styles.mainModal]}>
          <View style={[styles.mainInnerModal]}>
            <View style={[styles.imagebnView]}>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2022/01/03/01/40/chrismas-6911559_960_720.jpg',
                }}
                resizeMode="center"
                style={[styles.imgbn]}
              />
              <TouchableOpacity
                style={[styles.closeBtn]}
                onPress={() => {
                  setIsVisible(false), Alert.alert('jinga la la hu hu');
                }}>
                <Text style={[styles.closeText]}>Close</Text>
              </TouchableOpacity>
              {/* </View> */}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.titleText}> Play chrismas Song </Text>
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
            <Scratch />
          </View>
        </View>
      </Modal>

      <Animated.Image
        style={{
          width: 200,
          height: 200,
          transform: [{rotate: rotateData}],
        }}
        source={require('../assets/images/p1.png')}
        resizeMode="cover"
      />

      <TouchableOpacity
        onPress={() => {
          setIsVisible(true);
        }}
        style={[styles.giftBtn]}>
        <Text style={styles.giftText}>Suprise Gift</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ModelTwo;

const styles = StyleSheet.create({
  modelContainer: {},
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
    backgroundColor: '#FF7276',
    marginTop: 10,
    borderRadius: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 21,
  },
  closeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  closeBtn: {
    backgroundColor: '#FF7276',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 15,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 110,
    right: 40,
  },
  imgbn: {
    width: 200,
    height: 150,
    marginTop: 20,
  },
  imagebnView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  mainInnerModal: {
    flex: 1,
    backgroundColor: '#F5FFFA',
    position: 'absolute',
    bottom: 10,
    top: '20%',
    right: 10,
    left: 10,
    borderRadius: 30,
    height: '80%',
  },
  mainModal: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
  },
  imgbg: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  giftText: {
    color: 'white',
    fontSize: 30,
  },
  giftBtn: {
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: 'red',
    shadowRadius: 20,
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
