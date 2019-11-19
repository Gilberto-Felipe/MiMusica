import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import ArtistBox from './ArtistBox';

import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component<Props> {
    
    handlePress(artist) {
        Actions.artistDetail({ artist: artist })
    }

    render() {
        return (
            <FlatList 
                data = { this.props.artists }
                renderItem = {({item: artist}) => (
                    <TouchableOpacity onPress = {() => this.handlePress(artist)}>
                        <ArtistBox artist = {artist}/>
                    </TouchableOpacity>
                )}
            />
        );
    }
}
