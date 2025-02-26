import React from 'react';

const Playlist = ({ playlist, setPlaylist }) => {   
    
    const handleRemove = (track) => {
        setPlaylist(playlist.filter((t) => t.id !== track.id));
    }
    
    return (
        <div className='flex-1 flex flex-col items-start gap-6'>
            <h3 className='items-center text-2xl font-bold dark:text-white'>Ma playlist :</h3>
            <div className='w-full'>
                <div className='w-full flex flex-col gap-6'>
                    {playlist.length >= 10 ? (
                        <p>Vous ne pouvez plus ajouter de sons</p>
                    ) : null} 
                    {playlist.map((track) => (
                    <div className="w-full" key={track.id}>
                    <div>                        
                        <img className='max-w-12 rounded-md' src={track.album.images[0].url} alt={track.name} />
                    </div>
                    <div className='flex w-full'>
                        <div className='flex-col justify-items-start w-full'>                     
                            <p className='items-center text-l font-bold dark:text-white text-left'>{track.name}</p>
                            <p className='items-center text-ss font-regular dark:text-white text-left'>{track.artists ? track.artists[0].name : ''}</p>
                        </div>
                    <div>
                        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => handleRemove(track)}>-</button>
                    </div>
                    </div>

                </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Playlist;
