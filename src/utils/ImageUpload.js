
const CLOUDINARY_PRESET = 'emxwgppl'
const API_URL = 'https://api.cloudinary.com/v1_1/kallyasmedia/image/upload';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_PRESET);

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData
  });
  return response.json();
}