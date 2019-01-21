import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';

import Shop from '../main/Shop';
import Menu from '../main/Menu';

import iconHome from '../../../assets/imgs/home.png';

export default class Main extends Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={iconHome}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    onHandlerOpenMenu() {
        this.props.navigation.openDrawer();
    }

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Drawer
                    // type="overlay"
                    ref={(ref) => { this.drawer = ref; }}
                    content={<Menu />}
                    tapToClose
                    openDrawerOffset={0.4}
                    styles={styles.drawerStyles}
                >
                    <Shop open={this.openControlPanel.bind(this)} />
                </Drawer>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    drawerStyles: {
        shadowColor: '#000000', 
        shadowOpacity: 0.8, 
        shadowRadius: 3,
        backgroundColor: 'red',
    },
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%'
    },
    button: {
        width: 200
    },
    containerButton: {
        width: '40%',
        flexDirection: 'row'
    },
    icon: {
        width: 24,
        height: 24,
    },
    selectedItem: {
        color: '#34B089',
        fontWeight: 'bold',
    }
});
