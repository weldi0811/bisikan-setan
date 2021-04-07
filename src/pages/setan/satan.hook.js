import axios from 'axios';
import { useState } from 'react';
import { UNSPLASH_CLIENT_KEY, UNSPLASH_API } from '../../clientkey.const';

const useSatan = () => {
  const [photo, setPhoto] = useState('');

  const apiHeader = {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_CLIENT_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  const roundedRandomNumber = Math.ceil(Math.random() * 100);
  const randomizePage = Math.ceil(Math.random() * 100) % 10;
  const searchFoodUrl = `${UNSPLASH_API}/search/photos?page=${randomizePage}&query=cakes`;
  const searchDrinksUrl = `${UNSPLASH_API}/search/photos?page=${randomizePage}&query=fresh-drinks`;

  const searchUrl =
    roundedRandomNumber % 2 === 0 ? searchFoodUrl : searchDrinksUrl;

  const getSatanSpawn = () => {
    axios
      .get(searchUrl, apiHeader)
      .then(result =>
        setPhoto(result.data.results[randomizePage].urls.regular),
      );
  };

  return {
    getSatanSpawn,
    photo,
  };
};

export default useSatan;
