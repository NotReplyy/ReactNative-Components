import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { appTheme } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {

  const { setDarkTheme, theme, setLightTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (theme.dark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5856D6',
          width: 150,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={changeTheme }
      >
        <Text style={{
          color: 'white',
          fontSize: 20,
        }}>
          Dark / Light
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeThemeScreen;
