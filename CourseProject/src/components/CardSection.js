// Import a Library to help create a component
import React from 'react';
import { View } from 'react-native';

// Create a component
// Functional component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }

};

// Make the component available to other parts of the app.
export default CardSection;
