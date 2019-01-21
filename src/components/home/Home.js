import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Category from './Category';

class Home extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
                <Category />
            </ScrollView>
        );
    }
}

export default Home;
