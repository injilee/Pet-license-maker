class ImageUploader {
  constructor(cloud_name, preset_name) {
    this.cloud_name = cloud_name;
    this.preset_name = preset_name;
  }

  async upload(file) {
    console.log(file);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', this.preset_name);

    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${this.cloud_name}/image/upload`,
      {
        method: 'POST',
        body: data,
      },
    );
    return await result.json();
  }
}

export default ImageUploader;
