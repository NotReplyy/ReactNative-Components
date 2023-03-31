import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/menuInterfaces';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

type HomeSceenNavigationProps = StackNavigationProp<RootStackParams, 'Home'>;

interface Props {
    item: MenuItem;
}

export const FlatListItem = ({ item }: Props) => {

    const { navigate } = useNavigation<HomeSceenNavigationProps>();

    const { theme } = useContext(ThemeContext);

    const { name, icon, component } = item;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate(component as keyof RootStackParams)}
        >
            <View style={styles.container} >
                <Icon name={icon} color={theme.colors.primary} size={30} />
                <Text style={{
                    ...styles.itemText,
                    color: theme.colors.text,
                }}
                >{name}</Text>
                <View style={{ flex: 1 }} />{/** This is to push the icon to the right */}
                <Icon name="navigate-next" color={theme.colors.primary} size={30} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        fontSize: 20,
        marginLeft: 10,

    },
});
