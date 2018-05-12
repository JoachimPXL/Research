import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import AlbumDetail from './AlbumDetail';


// Class Component
class AlbumList extends Component {
    state = {
        movies: []
    };

    async componentWillMount() {
        let date = new Date();
        console.log("after request: " + date + " ms: " + date.getMilliseconds());
        return fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json', {
            method: 'GET'
        }).then(resp => { return resp.json() })
            .then(res => {
                console.log(res);

                var date = new Date();
                console.log("after request: " + date + " ms: " + date.getMilliseconds());
                this.setState({ movies: res });

                return res;
            });// automatically added from Component calss

    }

    renderAlbums() {
        if (this.state.movies != []) {
            let date = new Date();
            console.log("after request: " + date + " ms: " + date.getMilliseconds());
        }

        return this.state.movies.map((album, index) =>
            <View>
                <AlbumDetail key={index} album={album} />
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
