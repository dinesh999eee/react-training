import React from 'react'
// import Carousel from 'react-elastic-carousel'
import cakedata from './cakedata';



export default function Carousalview(){

    console.log("came to carousel .js",cakedata)
    return (
        <div>  
            <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN"
            alt="Third slide"
            width="550"
            height="250"
            />
        </div>
      );
}