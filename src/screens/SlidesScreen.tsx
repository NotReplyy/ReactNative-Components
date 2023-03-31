import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import React, { useRef, useState, useContext } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useAnimation from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';


const { width } = Dimensions.get('window');

type SlidesScreenNavigationProps = StackNavigationProp<RootStackParams, 'Slides'>;

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const SlidesScreen = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);
  const { theme } = useContext(ThemeContext);
  const { navigate } = useNavigation<SlidesScreenNavigationProps>();

  const { opacity, fadeIn } = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        borderRadius: 5,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{ ...styles.title, color: theme.colors.primary }}>{item.title}</Text>
        <Text style={{ ...styles.subTitle, color: theme.colors.text }}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }
        }

      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
      }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 8,
            backgroundColor: theme.colors.primary,
          }}
        />
        <Animated.View
          style={{
            flexDirection: 'row',
            opacity,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >

          <TouchableOpacity
            style={{
              backgroundColor: '#5856D6',
              height: 50,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 10,
            }}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigate('Home');
                return;
              }

            }}
          >
            <Text style={{
              color: 'white',
              fontSize: 20,
            }}>Enter</Text>
            <Icon name="chevron-right" size={35} color="white" />
          </TouchableOpacity>

        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.5,
  },
});
