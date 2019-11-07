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
        if(access_token){
            setAccessToken(access_token);
            setRefreshToken(refresh_token);
            setIsLoggedIn(true);
            spotifyApi.setAccessToken(accessToken);
            getMe();
            getTopArtists();
        }
    }, [accessToken]);

    const refreshTheToken = async () => {
        try{
          const newAccessToken = await fetch(`https://spotifity-server.herokuapp.com/refresh_token?refresh_token=${refreshToken}`);
          const newAccessTokenJson = await newAccessToken.json();
          spotifyApi.setAccessToken(newAccessTokenJson.access_token);
          console.log(newAccessTokenJson.access_token);
          setAccessToken(newAccessTokenJson.access_token);
        }
        catch(e){
          console.log(e);
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
            let topArtists = await spotifyApi.getMyTopArtists({limit: 20});
            console.log(topArtists);
            setTopArtists(topArtists.items);  
        }
        catch(e){console.log(e);}
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
        <MeContext.Provider value={{accessToken, refreshToken, isLoggedIn, userInfo, topArtists, refreshTheToken}}>
            {props.children}
        </MeContext.Provider>
    )
}
