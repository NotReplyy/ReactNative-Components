import { View, Text, ScrollView, RefreshControl } from 'react-native';
import React, { useState, useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {

  const { theme } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('Hola Peppa pig');
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={100}
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          style={{ backgroundColor: 'red' }}
        />
      }
    >
      <View style={appTheme.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        <Text style={{color:theme.colors.text}}>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
