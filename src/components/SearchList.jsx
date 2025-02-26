import React from 'react';

const SearchList = ({ tracks = [], playlist, setPlaylist }) => {
    const handleClick = (track) => {
        if (playlist.length < 10) { 
            if (!playlist.some(t => t.id === track.id)) { 
                console.log(track);
                setPlaylist([...playlist, track]); 
            } else {
                alert("Cette piste est déjà dans la playlist."); 
            }
        } else {
            alert("Vous ne pouvez pas ajouter plus de 10 pistes à la playlist."); 
        }
    }

    console.log('Tracks:', tracks); 

    return (
        <div className='flex-1 flex flex-col items-start gap-6 bg-gray-50 p-8 rounded-lg shadow-xl'> 
            <h3 className='items-center text-2xl font-bold dark:text-black'>Résultats de recherche</h3>
            {Array.isArray(tracks) && tracks.length > 0 ? (
                tracks.map((track) => (
                    <div className="w-full" key={track.id}>
                        <div className>                        
                            <img className='max-w-12 rounded-md' src={track.album.images[0].url} alt={track.name} />
                        </div>
                    <div className='flex w-full'>
                            <div className='flex-col justify-items-start w-full'>                     
                                <p className='items-center text-l font-bold dark:text-black text-left'>{track.name}</p>
                                <p className='items-center text-ss font-regular dark:text-black text-left'>{track.artists ? track.artists[0].name : ''}</p>
                            </div>
                    <div>
                        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => handleClick(track)}>+</button>
                    </div>                        
                    
                    </div>

                    </div>
                ))
            ) : (
                <p className='dark:text-black'>Pas encore de recherche effectuée</p>
            )}
        </div>
    );
};

export default SearchList;
