import cloudinary from 'cloudinary/lib/cloudinary';

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET,
  preset_name: process.env.REACT_APP_PRESET_NAME,
});

export const cloudinaryConfig = cloudinary;
