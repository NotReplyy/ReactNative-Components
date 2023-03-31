import { View, StyleSheet, Animated } from 'react-native';
import React, {useContext} from 'react';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation102Screen = () => {

  const { pan, panResponder } = useAnimation();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: theme.colors.primary,
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
          ],
        }}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
