import { Animated, Easing, PanResponder } from 'react-native';
import { useRef } from 'react';

const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.ValueXY()).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    };

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    };

    const startMovingPosition = (initialPosition: number, duration: number) => {
        position.setValue(initialPosition);
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                easing: Easing.bounce,
            }
        ).start();
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: true }, // Back to zero
            ).start();
        },
    });

    return {
        opacity,
        position,
        pan,
        fadeIn,
        fadeOut,
        startMovingPosition,
        panResponder,
    };


};

export default useAnimation;
