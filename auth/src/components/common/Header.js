// Import a Library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
// Functional component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        paddingTop: 15,
        height: 60,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }

};

// Make the component available to other parts of the app.
export { Header };
