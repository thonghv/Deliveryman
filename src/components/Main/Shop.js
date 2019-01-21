import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigation from 'react-native-tab-navigator';

import HeaderCommon from '../base/Header';
import Home from '../home/Home';
import Contact from '../contact/Contact';

import iconHome from '../../../assets/imgs/home.png';
import iconCart from '../../../assets/imgs/cart.png';
import iconContact from '../../../assets/imgs/contact.png';
import iconSearch from '../../../assets/imgs/search.png';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'Home' };
    }

    onHandlerOpenMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={styles.container}>
               <HeaderCommon onHandleOpenMenu={this.onHandlerOpenMenu.bind(this)} />
               <TabNavigation>
                    <TabNavigation.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'Home' })}
                        renderIcon={() => <Image source={iconHome} />}
                        renderSelectedIcon={() => <Image source={iconHome} />}
                        badgeText="1"
                        selectedTitleStyle={styles.selectedItem} >
                        <Home />
                    </TabNavigation.Item>
                    <TabNavigation.Item
                        selected={this.state.selectedTab === 'Cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                        renderIcon={() => <Image source={iconCart} />}
                        renderSelectedIcon={() => <Image source={iconCart} />}
                    >
                        <Home />
                    </TabNavigation.Item>
                    <TabNavigation.Item
                        selected={this.state.selectedTab === 'Contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'Contact' })}
                        renderIcon={() => <Image source={iconContact} />}
                        renderSelectedIcon={() => <Image source={iconContact} />}
                    >
                        <Contact />
                    </TabNavigation.Item>
                    <TabNavigation.Item
                        selected={this.state.selectedTab === 'Search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'Search' })}
                        renderIcon={() => <Image source={iconSearch} />}
                        renderSelectedIcon={() => <Image source={iconSearch} />}
                    >
                        <Home />
                    </TabNavigation.Item>
                </TabNavigation>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
export default Shop;
