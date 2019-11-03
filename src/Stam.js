import React, {useContext} from 'react'
import {MeContext} from './MeContext'

export default function Stam() {
    const [accessToken, refreshToken] = useContext(MeContext);

    return (
        <div>
            Access: {accessToken} Refresh: {refreshToken}
        </div>
    )
}
