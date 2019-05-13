import React from 'react';
import Faker from 'faker';
import _ from 'lodash';
import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: [],
      photos: []
    }
  }

  componentWillMount() {
    var albums = this.getAlbumsList();
    this.setState(() => {
      return { albums: albums };
    });
    console.log(albums);
  }

  getPhotosList() {
    const photos = _.map(new Array(20), () => {
      return Faker.image.image()
    });
    return photos;
  }

  getAlbumsList() {
    const albums = _.map(new Array(10), () => {
      return {
        photos: this.getPhotosList()
      }
    });

    return albums;
  }
  render() {
    return (
      <div className="row albums-list">
        <div className="col-md-3 albums-list-item">
          <ion-icon className="albums-list-image" name="add"></ion-icon>
        </div>
        { 
          this.state.albums.map((album, index) => 
          <div className="col-md-3 albums-list-item" key={index}>
            <img className="albums-list-image" src={album['photos'][0]}></img>
          </div>)
        }
      </div>
    );
  }

}
export default Home;