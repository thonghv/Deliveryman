import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import bannerImg1 from '../../../assets/banner/slide_1.jpg';
import bannerImg2 from '../../../assets/banner/slide_2.png';
import bannerImg3 from '../../../assets/banner/slide_3.jpg';

const { width, height } = Dimensions.get('window');

class Category extends Component {
    render() {
        const { wrapper, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        <Image source={bannerImg1} style={imageStyle} />
                        <Image source={bannerImg2} style={imageStyle} />
                        <Image source={bannerImg3} style={imageStyle} />
                    </Swiper>
                </View>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
    },
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop: 0,
        padding: 10
    },
    textStyle: {
        fontSize: 18,
        color: '#AFAFAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
});

export default Category;
