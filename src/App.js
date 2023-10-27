import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { logo } from "./assets";
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
//import { db } from "./firebaseConfig";
import { clientId, clientSecret, serverId } from "./utils/utils";
import { useLocation } from "react-router-dom";

function App() {
  const [isVerified, setIsVerified] = useState(null);
  const [tokenInfo, setTokenInfo] = useState();
  const location = useLocation();
  const code = location.search.slice(6);

  useEffect(() => {
    const getToken = async () => {
      if (code) {
        try {
          await fetch("https://discord.com/api/oauth2/token", {
            method: "POST",
            body: new URLSearchParams({
              client_id: clientId,
              client_secret: clientSecret,
              code,
              grant_type: "authorization_code",
              //redirect_uri: `http://localhost:3000`,
              redirect_uri: `https://mint-d4711.web.app/`,
              scope: "guilds.members.read",
            }).toString(),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
            .then((result) => result.json())
            .then((response) => {
              setTokenInfo(response);
            });
        } catch (error) {
          console.log("error", error);
        }
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    const getUserGuilds = async () => {
      if (tokenInfo?.access_token) {
        await fetch(
          `https://discord.com/api/users/@me/guilds/${serverId}/member`,
          {
            headers: {
              authorization: `${tokenInfo?.token_type} ${tokenInfo?.access_token}`,
            },
          }
        ).then((result) => {
          result.json();
          console.log(result.status);
          if (result.status === 200) {
            setIsVerified(true);
          } else {
            setIsVerified(false);
          }
        });

        // .then((response) => {
        // console.log(response.indexOf(serverId))
        // console.log(response);
        // if(response.indexOf(serverId) === -1){
        //   setIsVerified(false)
        //   setMessage(`User is not Verified on ${serverName} Server`)
        // }else{
        //   setIsVerified(true)
        // }
        // });
      }
    };
    getUserGuilds();
  }, [tokenInfo?.access_token]);

  // const getRecords = async () => {
  //   const data = query(collection(db, "records"), orderBy("timestamp", "desc"));
  //   await onSnapshot(data, (querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       record: doc.data(),
  //     }));
  //     setRecords(newData);
  //   });
  // };
  // console.log(records);
  // useEffect(() => {
  //   getRecords();
  // }, []);

  return (
    <div className="app">
      <div className="main__section">
        <div className="main">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <Routes>
            <Route exact path="/" element={<Home verified={isVerified} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
