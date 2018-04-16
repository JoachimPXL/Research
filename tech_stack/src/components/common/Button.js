import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity >
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

// Make the component available to other parts of the app.
export { Button };
