import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import iconHome from '../../../assets/imgs/home.png';

export default class Authentication extends Component {

    static navigationOptions = {
        drawerLabel: 'Sign Up',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={iconHome}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    onHandBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text>Authentication Component</Text>
            <TouchableOpacity onPress={this.onHandBack.bind(this)}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00a0af',
        padding: '13%',
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 4,
    },
    image: {

    },
    containerInput: {
        marginTop: 20,
    },
    backgroundInput: {
        borderBottomWidth: 1,
        height: 36,
        borderBottomColor: '#E0E0E0',
        marginTop: 5,
    },
    input: {
        width: 250,
        height: 35,
        backgroundColor: '#FFF',
        fontSize: 14,
        color: '#616161',
    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red'
    },
    checkBox: {

    },
    checkBoxTitle: {
        marginTop: 7,
        fontSize: 12,
        color: '#616161',
    },
    containerSignIn: {
        marginTop: 20
    }
});
