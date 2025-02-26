import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import Playlist from './Playlist';


const App = () => {
    const [tracks, setTracks] = useState([]);
    const [playlist, setPlaylist] = useState([]); 

    return (
        <div className='flex flex-col gap-8 items-center'>
            <h1 className='items-center text-5xl font-extrabold dark:text-white'>Bienvenue dans Jammin' !</h1>            
                <h2 className='items-center text-2xl font-semibold dark:text-white'>Créez votre playlist ci-dessous!</h2>

            <div className='flex flex-col max-w-3xs w-full'>
                <SearchBar setTracks={setTracks} />
            </div>
            <div className='gap-20 flex flex-col lg:flex-row w-full'>
                <SearchList tracks={tracks} playlist={playlist} setPlaylist={setPlaylist} />
                <Playlist playlist={playlist} setPlaylist={setPlaylist} />
            </div>
        </div>
    );
};

export default App;
