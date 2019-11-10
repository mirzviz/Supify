import React, { useContext } from "react";
import { MeContext } from "./MeContext";

export default function Stam() {
  const { accessToken, refreshTheToken } = useContext(MeContext);

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h4> {accessToken}</h4>
                <button onClick={refreshTheToken} className=''>Start App</button>
            </div>
        </div>
    </div>
  );
}
