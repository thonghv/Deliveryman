import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {

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
