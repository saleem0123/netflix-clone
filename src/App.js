import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {Action,Orginals,HorrorMovie,Documentaries} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals} title='Netflix Orginals'/>
      <RowPost url={Action  } title='Action' isSmall/>
      <RowPost url={HorrorMovie } title='HorrorMovie' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>

     
    </div>
  );
}

export default App;
