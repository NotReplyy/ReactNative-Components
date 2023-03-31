import { View, FlatList } from 'react-native';
import React from 'react';
import { appTheme } from '../theme/appTheme';
import menuItems from '../data/menuItems';
import { FlatListItem } from '../components/FlatListItem';
import { HeaderTitle } from '../components/HeaderTitle';
import ItemSeparatorComponent from '../components/ItemSeparator';


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, ...appTheme.globalMargin }} >
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListItem item={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default HomeScreen;
