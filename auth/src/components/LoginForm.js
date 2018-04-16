import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', user: {}, errorMessage: '', loading: false, token: '' };

    onButtonPress() {
        this.setState({ loading: true });
        this.login();
    }

    async login() {
        const { email, password, user, errorMessage } = this.state;
        await fetch('http://localhost:3000/api/employees/login?include=user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.toLowerCase(),
                password: password,
            }),
        })
            .then(response => { return response.json(); })
            .then(resData => {
                if (resData.status == 401) {
                    this.setState({
                        errorMessage: 'Wrong credentials.',
                        loading: false,
                        token: ''
                    });
                } else {
                    this.setState({
                        user: resData.user,
                        loading: false,
                        errorMessage: '',
                        token: resData.id
                    });
                    AsyncStorage.setItem('user', JSON.stringify(this.state.user));
                    return resData;
                }
            }).catch(err => {
                console.log(err);
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        } else {
            return (
                <Button onPress={() => this.onButtonPress()}>
                    Log in
                    </Button>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={this.state.email}
                        style={{ height: 20, width: 100 }}
                        onChangeText={email => this.setState({ email: email })}
                        placeholder='user@gmail.com'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        value={this.state.password}
                        style={{ height: 20, width: 100 }}
                        onChangeText={password => this.setState({ password: password })}
                        placeholder='password'
                        secureTextEntry={true}
                    />
                </CardSection>
                <CardSection>
                    <Text>{this.state.errorMessage}</Text>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card >
        );
    }
}


export default LoginForm;