import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cardd from './Cardd';

import './styles/Intro.css';

const Intro = () => {
  const [nasaData, setNasaData] = useState(null);
  const KEY = process.env.REACT_APP_KEY;

  //do stat
  let d = new Date();
  var datestring = d.getFullYear() + "-" + ("0"+(d.getMonth())).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  let stat = datestring;
  // console.log(stat);

  async function fetchNasaData(KEY){
    const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${stat}&api_key=${KEY}`);
    const nasaData = await res.json();
    setNasaData(nasaData);
  }
  useEffect(() => {
    fetchNasaData(KEY)
  }, [])


  if(!nasaData){
    return (
      //@TODO loader
      <span>
        Getting data from NASA,, Loading...
      </span>
    )
  }else {
  //  let len = Object.keys(nasa).length;
   return (
    <div className='intro'>
    <Container>
      <Row xs={1} md={3} className="g-4">
        {
          nasaData.slice(0).reverse().map((card, index) => {
            return <Cardd key={index} copy={card.copyright} url={card.hdurl} date={card.date} explanation={card.explanation} title={card.title}/>
          })
        }
      </Row>
    </Container>
    </div>
   )
  }
}

export default Intro
