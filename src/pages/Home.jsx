import React, { useState, useEffect } from 'react'
import './styles.css'
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { BEARER_TOKEN, discordLoginUrl } from '../utils/utils';



const Home = ({ verified }) => {
  const navigate = useNavigate()
  const [submissionComplete, setSubmissionComplete] = useState("")
  const [generated, setGenerated] = useState(false)
  const [data, setData] = useState({
    username: "",
    ethAdd: ""
  })




  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value })
  }

  const getTwitterUser = async () => {
    window.open("https://twitter.com/intent/tweet?text=Exploring%20the%20future%20of%20leverage%27d%20yield%20with%20%40MintProtocolApp%20as%20an%20early%20pioneer.%20%0D%0A%0D%0AWitness%20the%20revolution%20here%3A%20https%3A%2F%2Fmintprotocol.app")

    setGenerated(!generated)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (generated && verified) {
      addDoc(collection(db, "records"), {
        timestamp: serverTimestamp(),
        user: data.username,
        ethAddress: data.ethAdd
      }).then(
        setData({
          username: "",
          ethAdd: ""
        }),
        setSubmissionComplete("Your Submission is completed")
      )
    } else {
      setSubmissionComplete("You must be Verified, and generate Twitter URL before submitting Entry")
    }

  }


  return (
    <form onSubmit={handleSubmit} className="home">
      <div className="home__paragraphs"><p className="home__bold">
        Pioneering minters, we welcome you to the genesis of Mint Protocol.
      </p>
        <p className="home__light">
          You have received an exclusive invitation to our inaugural Mint Protocol event. Prepare yourself for many unique surprises reserved for those who:
        </p>
        <ul className="lists">
          <li>1. Are active participants in our Discord community</li>
          <li>2. Post the verification tweet generated by this site.</li>
          <li>3. Are following our twitter account @mintprotocolapp</li>
        </ul>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="home__buttons">
        <div className="home__button">
          <li className="home__btnList">Join the Discord:</li>
          <div className="error__container">
            <div className="input__and__button">
              <Link to={discordLoginUrl} className={"link__buttonJoin"}>LOGIN WITH DISCORD</Link>
              <button className={!verified ? "link__buttonVerify" : "link__buttonVerified"}>{!verified ? "VERIFY" : "VERIFIED"}</button>
            </div>
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
          Tweet the following message on your feed and then follow @MintProtocolApp on twitter!
        </p>
        <p className="home__light">”Exploring the future of leverage'd yield with @MintProtocolApp as an early pioneer. Witness the revolution here: https://mintprotocol.app”</p>

      </div>
      <div className="eth__address">
        <li className="home__btnList">Add your ETH address below:</li>
        <input type="text" placeholder='0x71C7656EC7ab88b098defB751B7401B5f6d8...'
          name='ethAdd' value={data.ethAdd} className="button__input"
          onChange={handleChange} required />
      </div>
      <div className="submit__button">
        <li className="home__btnList">Finalize your status:</li>
        <button className="link__button" type='submit'>SUBMIT ENTRY</button>
        {
          verified === false && (
            <span className="user__not_found">User is not in <Link className='home__link' to="https://discord.com/invite/mintprotocol" target='_blank'>discord.gg/mintprotocol</Link></span>
          )
        }
        <span className="submission__complete">{submissionComplete}</span>
      </div>
      {/* </form> */}

    </form>

  )
}

export default Home