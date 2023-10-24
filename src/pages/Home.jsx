import React from 'react'
import './styles.css'

const Home = () => {
  return (
    <div className='home'>
    <div className="body">
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
         <button className="link__buttonJoin">LOGIN WITH DISCORD</button>
         <button className="link__buttonVerify">VERIFY</button>
         </div>
         
        </div>
        <div className="home__button">
          <li className="home__btnList">Get the Verification Link for Twitter:</li>
         <div className="input__and__button">
         <input type="text" placeholder='@username' className="button__input" />
         <button className="link__button">GENERATE</button>
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
         <input type="text" placeholder='0x71C7656EC7ab88b098defB751B7401B5f6d8...' className="button__input" />
         </div>
         <div className="submit__button">
         <li className="home__btnList">Finalize your status:</li>
         <button className="link__button" type='button'>SUBMIT ENTRY</button>
         </div>
        
    </div>
    </div>
  )
}

export default Home