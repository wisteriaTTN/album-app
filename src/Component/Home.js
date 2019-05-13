import React from 'react';
import Faker from 'faker';
import _ from 'lodash';

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
    <div className="container">
      <div className="row">
        {this.state.photos.map((photo, index) => <div key={index}><img src={photo}></img></div>)}
      </div>
    </div>
    );
  }

}
export default Home;