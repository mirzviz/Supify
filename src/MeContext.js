import React,{createContext, useState, useEffect} from 'react'

export const MeContext = createContext();

export default function MeContextPovider(props) {
    
    const [accessToken, setAccessToken] = useState(123);
    const [refreshToken, setRefreshToken] = useState(321);

    useEffect(() => {
        let urlParams = getUrlParams();
        setAccessToken(urlParams.access_token);
        setRefreshToken(urlParams.refresh_token);
    }, []);

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
        <MeContext.Provider value={{accessToken, refreshToken}}>
            {props.children}
        </MeContext.Provider>
    )
}
