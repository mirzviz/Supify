import React,{createContext, useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const MeContext = createContext();

export const MeContextProvider = (props) => {
    
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [topArtists, setTopArtists] = useState();

    useEffect(() => {
        const {access_token, refresh_token} = getUrlParams();
        spotifyApi.setAccessToken(access_token);
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        setIsLoggedIn(true);
        // getMe();
        getTopArtists();
        // getArtistInfo();
    }, []);

    const getArtistInfo = async() => {
        try{
            if(topArtists){
                const extraInfo = await spotifyApi.getArtistAlbums(topArtists[0]);
                console.log(extraInfo);
            }else{
                console.log('no top artists!')
            }
        }
        catch(e){console.log(e)}
    }

    const refreshTheToken = async () => {
        try{
          const newAccessToken = await fetch(`https://spotifity-server.herokuapp.com/refresh_token?refresh_token=${refreshToken}`);
          const newAccessTokenJson = await newAccessToken.json();
          setAccessToken(newAccessTokenJson.access_token);
          spotifyApi.setAccessToken(newAccessTokenJson.access_token);
            getTopArtists();
        }
        catch(e){
          console.log('error!!!! ' , e);
        }
      }

    const getMe = async() => {
        try{
            let me = await spotifyApi.getMe(); 
            setUserInfo(me);
            console.log(me);
        }
        catch(e){console.log(e)}
    }

    const getTopArtists = async() => {
        try{
            let artists = await spotifyApi.getMyTopArtists({limit: 20});
            artists = artists.items;
            console.log(artists);

            artists = artists.map(async(artist) => {
                let artistsAlbums = await spotifyApi.getArtistAlbums(artist.id);
                artistsAlbums = artistsAlbums.items;
                // console.log(artistsAlbums);
                let newArtist = {...artist, albums: artistsAlbums};
                // console.log(newArtist);
                return newArtist;
            });

            Promise.all(artists).then((values) => {
                console.log(values);
                setTopArtists(values);
            });
        }
        catch(e){console.log('Error!!', e);}
    }


    const getUrlParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
    }

    return (
        <MeContext.Provider value={{accessToken, refreshToken, isLoggedIn, userInfo, topArtists, refreshTheToken, getTopArtists}}>
            {props.children}
        </MeContext.Provider>
    )
}
