import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import React, { useContext } from 'react';
import { appTheme } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { ScrollView } from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {

  const { theme } = useContext(ThemeContext);
  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View style={appTheme.globalMargin}>
          <HeaderTitle title="TextInput" />
          <TextInput
            style={{ ...styles.inputStyle, borderColor: theme.colors.border, color: theme.colors.text}}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={(value) => onChange(value, 'name')}
          />

          <TextInput
            style={{ ...styles.inputStyle, borderColor: theme.colors.border, color: theme.colors.text}}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => onChange(value, 'email')}
            keyboardType="email-address"
          />

          <TextInput
            style={{ ...styles.inputStyle, borderColor: theme.colors.border, color: theme.colors.text}}
            placeholder="Ingrese su teléfono"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <View style={styles.switchRow}>
            <Text style={{ fontSize: 25, marginTop: 10,color: theme.colors.text }}>Suscribirse:</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={(value) => onChange(value, 'isSubscribed')}
            />

          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
