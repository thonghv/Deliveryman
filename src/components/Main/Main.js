import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Main extends Component {

    onHandClick() {
        this.props.navigation.navigate('_authentication');
    }

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text>Main Component</Text>
            <TouchableOpacity onPress={this.onHandClick.bind(this)}>
                <Text>OnClick</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
