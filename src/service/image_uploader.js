// import cloudinary from 'cloudinary/lib/cloudinary';
import axios from 'axios';

class ImageUploader {
  constructor(cloud_name, preset_name) {
    this.cloud_name = cloud_name;
    this.preset_name = preset_name;
  }

  // async delete(public_id) {
  //   console.log(public_id);
  //   cloudinary.v2.uploader
  //     .destroy(public_id)
  //     .then((result) => console.log(result));
  // }

  async upload(file) {
    console.log(file);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', this.preset_name);

    const result = await axios.post(
      `https://api.cloudinary.com/v1_1/${this.cloud_name}/image/upload`,
      data,
    );
    return result;
  }
}

export default ImageUploader;
