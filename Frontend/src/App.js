import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/Header/Header.css';
import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header.js';
import pz from './poza.png';
import Img1 from './img1.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Fig1 from './insta.png';
import Fig2 from './mess.png';
import Fig3 from './facebook.png';
import Fig4 from './twitter.png';
import Logare from '../src/components/Logare.js';
import Creare from '../src/components/Creare.js';
import Navigationbar from '../src/components/Navigationbar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const shoot = () => {
    <div className='Window1'>
      
    </div>
  }
  return (
    <>
      <Header />
          <Navigationbar />
      <div>
        <img className='Pic' src={pz} alt="IMG" />
        <img className='img1' src={Img1} alt="IMG1" />
        <img className='img2' src={Img2} alt="IMG2" />
        <img className='img3' src={Img3} alt="IMG3" />
      </div>
      <div className='Back'>
        <div className='Box'>
          <div className="cer">Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</div>
          <div className="ask">Ai tupeu și crezi că ești amuzant?</div>
          <div className="desc">Descriere</div>
          <div className="mem">Meme (jpg, jpeg, png, gif)</div>
          <button className="send" onClick={shoot}>Trimite</button>
          <div className='BoxDesc'>
            <div className="scris">descriere</div>
          </div>
          <div className='BoxDragdrop' id="drag">
            <div className="drag">drag & drop image or click to upload</div>
          </div>
        </div>
      </div>
      <div className='Backblue'>
        <img className='insta' src={Fig1} alt="FIG1" />
        <img className='mess' src={Fig2} alt="FIG2" />
        <img className='facebook' src={Fig3} alt="FIG3" />
        <img className='twitter' src={Fig4} alt="FIG4" />
        <div className='footer'>Copyright 2022 | La muncă, nu la întins mâna.</div>
      </div>
      <button className='buton'>Upload a MEME</button>
      <div className="text">Partajarea de meme-uri nu a fost niciodată mai simplă!</div>
      <div className="subtitlu">Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.</div>
      <div className="title">Most Viewed</div>
    </>
  );
}

export default App;
