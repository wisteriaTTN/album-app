import faker from 'faker';

export default class API {
  getAlbums() {
    
  };

  getPhotoByAlbum(album) {
    return Array(20).map(faker.image[album]);
  }
}