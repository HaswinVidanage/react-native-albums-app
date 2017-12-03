import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AllbumDetail from './AlbumDetail';
class AlbumList extends Component {
  
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  componentWillMount () {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        console.log('Response', res);
        this.setState({
          albums: res.data
        });
        
      });
    
  }
  
  renderAlbums () {
    return this.state.albums.map(album =>
      <AllbumDetail key={album.title} album={album}/>);
  }
  render () {
    return (
      <ScrollView>
        {
        this.state.albums.length > 0 &&
        this.renderAlbums()
        }
      </ScrollView>
    );
  }
}
export default  AlbumList;
