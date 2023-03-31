import { View, Button, Alert } from 'react-native';
import React from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Title', 'This is the message', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel'),
                style: 'destructive',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK'),
            },
        ]);
    };
    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    };

    return (
        <View style={appTheme.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button title="Mostrar Alerta" onPress={showAlert} />
            <View style={{ height: 20 }} />
            <Button title="Mostrar Alerta" onPress={showPrompt} />
        </View>
    );
};

export default AlertScreen;
