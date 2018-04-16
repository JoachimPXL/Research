import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

// Class Component
class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); // automatically added from Component calss
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <View>
                <AlbumDetail key={album.title} album={album} />
            </View>
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView >
        );
    }
}

export default AlbumList;
