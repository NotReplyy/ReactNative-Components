import { View, StyleSheet, Button, Animated } from 'react-native';
import React, { useContext } from 'react';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';


const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();
    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    backgroundColor: theme.colors.primary,
                    opacity,
                    transform: [
                        {
                            translateY: position,
                        },

                    ],
                }}
            />
            <Button title="FadeIn" onPress={() => {
                fadeIn();
                startMovingPosition(-100, 800);
            }} />
            <Button title="FadeOut" onPress={fadeOut} />
        </View>
    );
};

export default Animation101Screen;

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
