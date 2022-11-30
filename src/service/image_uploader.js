class ImageUploader {
  async upload(file) {
    console.log(file);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'ehonlltb');

    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dbtdekrri/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    return await result.json();
  }
}

export default ImageUploader;
