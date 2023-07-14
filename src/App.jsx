import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState, createContext } from 'react';
import * as Realm from "realm-web";
import { AppRoutes } from './AppRoutes';
export let realmApp = null;
export let mongoDb = null;

export const GlobalContext = createContext();

function App() {

  const [artworks,setArtworks] = useState(null);
  const [artistConfig,setArtistConfig] = useState(null);
  

  useEffect (() => {
    const login =  async () => {    
      const id = "dm-art-api-jznsb"; 
      const credentials = Realm.Credentials.anonymous();
      try {
        realmApp = new Realm.App({id,});
        const user = await realmApp.logIn(credentials);
        console.log("Successfully logged in!", user.id);
        mongoDb = realmApp.currentUser.mongoClient("mongodb-atlas");
        const aws = await mongoDb.db("artworks").collection("works");
        setArtworks(aws);
        const c = await mongoDb.db("artworks").collection("config").findOne({});
        setArtistConfig(c);


      } catch (err) {
        console.error("Failed to log in", err.message);     
      }
    }
    
    login();

  },[]);


  return (
    <div className="App">
      <GlobalContext.Provider value={{artworks, artistConfig}} >
        <AppRoutes/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
