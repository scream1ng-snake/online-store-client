import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/test/Gibson_Explorer.png"
import image2 from "../../assets/test/Gibson_Flying_V.png"
import image3 from "../../assets/test/Gibson_Iron_Cross_James_hetfield.png"
import image4 from "../../assets/test/Gibson_Jimmy_Page_Double_Neck.png"

export const GuitarCarusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {guitars.map((g) =>
        <Carousel.Item>
          <Col className='carusel-item'>
          <img
            className="carusel-image"
            src={g.image}
          />
          <Carousel.Caption>
            <p className='carusel-caption'>{g.name}</p>
          </Carousel.Caption>
          </Col>
        </Carousel.Item>
      )}
    </Carousel>
  );
}

const guitars = [
  {
    name: "Gibson_Explorer",
    image: image1
  },
  {
    name: "Gibson_Flying_V",
    image: image2
  },
  {
    name: "Gibson_Iron_Cross_James_hetfield",
    image: image3
  },
  {
    name: "Gibson_Jimmy_Page_Double_Neck",
    image: image4
  },
]
