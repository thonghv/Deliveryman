
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    StyleSheet, 
    Dimensions 
} from 'react-native';

import icMenu from '../../../assets/imgs/menu.png';
import icLogo from '../../../assets/imgs/penguin.png';

const { height } = Dimensions.get('window');
export default class Header extends Component {

    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onHandleOpenMenu}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Hello Pcode</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="How are you today ?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10,
    },
    titleStyle: {
        color: '#FFF',
        fontSize: 20
    },
    textInput: {
        backgroundColor: '#FFF',
        height: height / 22,
        paddingBottom: 6,
        paddingLeft: 10,
    },
    iconStyle: {
        width: 24,
        height: 24,
    },
});
