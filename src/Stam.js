import React, { useContext } from "react";
import { MeContext } from "./MeContext";

export default function Stam() {
  const { accessToken, refreshToken } = useContext(MeContext);

  const fuckYou = () => {
    console.log(accessToken);
  };

  return (
    <>
      <div onClick={fuckYou}>
        Access: {accessToken}
      </div>
      <div onClick={fuckYou}>Refresh: {refreshToken}</div>
    </>
  );
}
