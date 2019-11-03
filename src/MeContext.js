import React,{createContext, useState, useEffect} from 'react'

export const MeContext = createContext();

export default function MeContextPovider(props) {
    
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();

    useEffect(() => {
        let urlParams = getUrlParams();
        // setAccessToken(urlParams.)
        console.log(urlParams);
    });

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
        <MeContext.Provider value={accessToken, refreshToken}>
            {props.children}
        </MeContext.Provider>
    )
}
