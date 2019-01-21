import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import iconProfile from '../../../assets/imgs/profile.png';

class Menu extends Component {
    render() {
        const { container, profile, btnStyle, txtStyle } = styles;
        return (
            <View style={container}>
                <Image source={iconProfile} style={profile} />
                <View>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={txtStyle}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#FFF',
        alignItems: 'center',
    },
    profile: {
        width: 128,
        height: 128,
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 20,
    }, 
    btnStyle: {
        height: 40,
        paddingHorizontal: 70,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    txtStyle: {
        color: '#34B089',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Menu;
