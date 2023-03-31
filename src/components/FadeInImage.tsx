import { Animated, View, ActivityIndicator } from 'react-native';
import React, { useState, useContext } from 'react';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    uri: string;
}

const FadeInImage = ({ uri }: Props) => {
    const { theme } = useContext(ThemeContext);
    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };


    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    size={70}
                    color={theme.colors.primary} />}
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    width: '100%',
                    height: 400,
                    marginVertical: 10,
                    opacity,
                }}
            />

        </View>
    );
};

export default FadeInImage;
