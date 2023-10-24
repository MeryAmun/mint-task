import React, { useState } from 'react'
import './styles.css'
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { Link } from 'react-router-dom';


const Home = () => {
  const [twitterUser, setTwitterUser] = useState([])
  const [data, setData] = useState({
    username: "",
    ethAdd: ""
  })
  const [verified, setVerified] = useState(false)
  const [generated, setGenerated] = useState(false)
  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value })
  }
  const getTwitterUser = () => {
    // fetch(`https://api.twitter.com/2/users/by/username/${data.username}`)
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   setTwitterUser(data?.results);
    // });

    // addDoc(collection(db, "users"), {
    // user:data.username
    // })
    setGenerated(!generated)
  }
  console.log(twitterUser)
  const getDiscordUser = () => {
    setVerified(!verified)

  }

  const handleSubmit = () => {
    addDoc(collection(db, "records"), {
      timestamp: serverTimestamp(),
      user: data.username,
      ethAddress: data.ethAdd
    }).then(
      setData({
        username: "",
        ethAdd: ""
      })
    )
  }
  //@ayuk_madrid
  return (
    <div className="home">
      <div className="home__paragraphs"><p className="home__bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
        <p className="home__light">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p></div>
      <div className="home__buttons">
        <div className="home__button">
          <li className="home__btnList">Join the Discord:</li>
          <div className="input__and__button">
            <button className={"link__buttonJoin"} onClick={getDiscordUser}>LOGIN WITH DISCORD</button>
            <button className={!verified ? "link__buttonVerify" : "link__buttonVerified"}>{!verified ? "VERIFY" : "VERIFIED"}</button>
          </div>

        </div>
        <div className="home__button">
          <li className="home__btnList">Get the Verification Link for Twitter:</li>
          <div className="input__and__button">
            <input type="text" placeholder='@username' name="username" value={data.username}
              className="button__input"
              onChange={handleChange}
              required
            />
            <button className="link__button" onClick={getTwitterUser}>{!generated ? "GENERATE" : "GENERATED"}</button>
          </div>

        </div>
      </div>
      <div className="home__paragraphs">
        <p className="home__bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="home__light">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      </div>
      <div className="eth__address">
        <li className="home__btnList">Add your ETH address below:</li>
        <input type="text" placeholder='0x71C7656EC7ab88b098defB751B7401B5f6d8...'
          name='ethAdd' value={data.ethAdd} className="button__input"
          onChange={handleChange} required/>
      </div>
      <div className="submit__button">
        <li className="home__btnList">Finalize your status:</li>
        <button className="link__button" type='button' onClick={handleSubmit}>SUBMIT ENTRY</button>
        {/* <Link to='/spreadsheet'>see records</Link> */}
      </div>

    </div>

  )
}

export default Home