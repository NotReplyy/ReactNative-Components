import { View, Switch, Platform } from 'react-native';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn?: boolean;
    onChange?: (value: boolean) => void;
}

const CustomSwitch = ({isOn , onChange}:Props) => {

    const { theme } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange && onChange(!isEnabled);
    };

    return (
        <View >
            <Switch
                trackColor={{ false: '#D9D9DB', true: theme.colors.primary }}
                thumbColor={Platform.OS === 'android' ? theme.colors.primary : ''}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default CustomSwitch;
