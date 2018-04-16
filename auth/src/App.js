import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false, user: {}, token: '' };

    logout() {
        AsyncStorage.setItem('user', '');
        AsyncStorage.setItem('token', '');
        this.setState({ loggedIn: false, user: '', token: '' });
    }

    componentWillMount() {
        if (this.checkAuthentication()) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    }

    async checkAuthentication() {
        await AsyncStorage.getItem('user').then(tokenUser => {
            this.setState({ user: JSON.parse(tokenUser) })
        });
        await AsyncStorage.getItem('token').then(token => {
            this.setState({ token: token })
        });
        if (this.state.token != '' && this.state.user != '') {
            return true;
        } else {
            return false;
        }
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => this.logout()}>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
                return
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;