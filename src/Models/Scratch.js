import {View,Image, StyleSheet,} from 'react-native';
import React from 'react';
import {ScratchCard} from 'rn-scratch-card';
const Scratch = () => {
  const handleScratch=(scratchPercentage)=> {
    console.log("scratch percentage",scratchPercentage)
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/c1.png')} style={styles.background_view} resizeMode="contain" />
      <ScratchCard
        source={require('../assets/images/p2.png')}
        brushWidth={50}
        onScratch={handleScratch}
        style={styles.scratch_card}
      />
    </View>
  );
};

export default Scratch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    // backgroundColor:"green" 808080,
    
  },
  background_view: {
    position: 'absolute',
    width: 350,
    height: 250,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderRadius: 16,
  },
  scratch_card: {
    width: 310,
    height: 250,
    backgroundColor: 'transparent',
    marginHorizontal:20,
    backgroundColor:"red",
    borderRadius:30
  },
})
