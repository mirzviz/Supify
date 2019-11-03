import React, { useEffect } from "react";
import "./App.css";

useEffect(() => {
  const {} = getUrlParams();
});

const getUrlParams = () => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var accessToken = url.searchParams.get("access_token");
  console.log(accessToken);
  var refreshToken = url.searchParams.get("refresh_token");
  console.log(refreshToken);

};
function App() {
  return <div className="App">Hello Supe</div>;
}

export default App;
