import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';
import { appTheme } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import ItemSeparatorComponent from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const SectionListScreen = () => {
  return (

    <View style={appTheme.globalMargin}>
      {/* <HeaderTitle title="Section List" /> */}
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { casa } }) => (
          <Text style={styles.header}>{casa}</Text>
        )}
        renderSectionFooter={({ section }) => (
          <Text style={styles.footer}>Total: {section.data.length}</Text>
        )}
        SectionSeparatorComponent={ ItemSeparatorComponent}
        stickySectionHeadersEnabled
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={<HeaderTitle title={`Total de casas: ${casas.length}`} />}
        showsVerticalScrollIndicator={false}

      />
    </View>

  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#5856D6',
    marginVertical: 8,
    paddingVertical: 20,

  },
  header: {
    fontSize: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 20,
    backgroundColor: 'lightgrey',
  },
});
