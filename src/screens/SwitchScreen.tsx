import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {

    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    const { isActive, isHungry, isHappy } = state;

    return (
        <View style={appTheme.globalMargin} >
            <HeaderTitle title="Switches" />
            <View style={styles.container}>
                <Text style={{ ...styles.switchText, color:theme.colors.text }}>isActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.container}>
                <Text style={{ ...styles.switchText, color:theme.colors.text }}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styles.container}>
                <Text style={{ ...styles.switchText, color:theme.colors.text }}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>
            <Text style={{ ...styles.switchText, color:theme.colors.text }}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View >
    );
};

export default SwitchScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 20,
    },
});
