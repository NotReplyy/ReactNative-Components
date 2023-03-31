import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { appTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {

    const { theme } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginVertical: top + 20, marginBottom: 20 }} >
            <Text style={{...appTheme.title , color:theme.colors.text}}>
                {title}
            </Text>
        </View>
    );
};



