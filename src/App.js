import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import * as Realm from "realm-web";

function App() {
  // let artworks = null;
  // let config = {};
  // let realmApp = null;
  
  const homeArtworkRef = useRef({});
  const configRef = useRef({});

  


  useEffect (() => {
    const login =  async () => {    
      const id = "dm-art-api-jznsb"; 
      const credentials = Realm.Credentials.anonymous();
      try {
        let realmApp = new Realm.App({id,});
        const user = await realmApp.logIn(credentials);
        console.log("Successfully logged in!", user.id);
        const mongodb = realmApp.currentUser.mongoClient("mongodb-atlas");
        let artwork = await mongodb.db("artworks").collection("works").findOne({tags: "home"});
        homeArtworkRef.current = artwork;
        const cfg = await mongodb.db("artworks").collection("config").findOne({});
        configRef.current = cfg;
        console.log(`Config`, cfg);
        console.log(`Artwork `, artwork);
      } catch (err) {
        console.error("Failed to log in", err.message);     
      }
    }
    
    login();

  });

  const url = `${configRef.current.imageRootURI}/${homeArtworkRef.current.imagePath}`;
  console.log("URL ", url);

  return (
    <div className="App">
        <img alt="home" src={url}/>
        <p>
          Hello there
        </p>
    </div>
  );
}

export default App;
