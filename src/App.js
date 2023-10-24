import './App.css';
import React, { useEffect,useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/index';
import { logo } from './assets';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from './firebaseConfig';

function App() {
  const [records, setRecords] = useState([]);

  const getRecords = async() => {
    const data = query(
      collection(db, "records"),
      orderBy("timestamp", "desc")
    );
      await onSnapshot(data, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
         record: doc.data(),
        }))
        setRecords(newData)
      })
  }
console.log(records)

  useEffect(() => {
    getRecords()
  }, [])
  
  return (
    <div className="app">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route exact path='/spreadsheet' element={<DataSpreadSheet data={records}/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
