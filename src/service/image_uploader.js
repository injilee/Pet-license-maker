import axios from 'axios';

class ImageUploader {
  constructor(cloud_name, preset_name) {
    this.cloud_name = cloud_name;
    this.preset_name = preset_name;
  }

  async delete(public_id) {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Basic NjUxMzU4OTk2NzE2NTk3OlVVMWd5SVhWMEEzOU5id2l1MkpwcloyTmlfaw==',
    );

    const formdata = new FormData();
    formdata.append('public_ids[]', public_id);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      `cloudinary/v1_1/${this.cloud_name}/resources/image/upload/`,
      requestOptions,
    ).catch((error) => console.log('error', error));
  }

  async upload(file) {
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
