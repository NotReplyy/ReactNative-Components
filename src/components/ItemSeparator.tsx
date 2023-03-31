import React , {useContext} from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';


const ItemSeparatorComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={{
      borderBottomWidth: 1,
      marginVertical: 5,
      borderColor: theme.dividerColor,
    }} />
  );
};


export default ItemSeparatorComponent;
