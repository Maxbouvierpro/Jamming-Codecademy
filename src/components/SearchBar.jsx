import React, { useState } from 'react';

const SearchBar = ({ setTracks }) => {
  const apiBase = 'https://api.spotify.com/v1/search';

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function fetchAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': import.meta.env.VITE_CLIENT_ID,
        'client_secret': import.meta.env.VITE_CLIENT_SECRET,
      }),
    });
    const data = await response.json();
    return data.access_token;
  }

  async function fetchSearchData(search) {
    const token = await fetchAccessToken();
    const response = await fetch(`${apiBase}?q=${search}&type=track&market=US&limit=5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }

  const handleSearch = async () => {
    try {
      const searchData = await fetchSearchData(searchTerm);
      console.log(searchData);

      // Stockez tous les éléments dans le state
      const allTracks = searchData?.tracks?.items || [];
      setTracks(allTracks); // Mettez à jour le state avec tous les résultats
      setSearchResults(allTracks); // Update the searchResults state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      <input
        className='input-search bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type='text'
        placeholder='Rechercher des titres...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
