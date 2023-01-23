import axios from 'axios';

const API_KEY = '31646623-01570f01238a20d01c1f98059';
const API_URL = 'https://pixabay.com/api/';

export async function getImages(query, page) {
  const SEARCH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: query,
  };

  const response = await axios.get(API_URL, {
    params: SEARCH_PARAMS,
  });

  return response.data;
}
