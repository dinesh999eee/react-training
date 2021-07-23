import React from 'react'
// import Carousel from 'react-elastic-carousel'
import cakedata from './cakedata';



export default function Carousalview(){

    console.log("came to carousel .js",cakedata)
    return (
        // <div>  
        //     <img
        //     src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN"
        //     alt="Third slide"
        //     width="450"
        //     height="250"
        //     />
        //     <img
        //     src="https://i.pinimg.com/originals/e9/2c/2e/e92c2ec1ccffa93c2e5827c5298b9505.jpg"
        //     alt="Third slide"
        //     width="550"
        //     height="250"
        //     />
        // </div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img style ={{height:300,width:400}} class="d-block w-100" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img style ={{height:300,width:400}} class="d-block w-100" src="https://i.pinimg.com/originals/e9/2c/2e/e92c2ec1ccffa93c2e5827c5298b9505.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img style ={{height:300,width:400}} class="d-block w-100" src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/rainbow-cake760x580.jpg?ext=.jpg" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        
      );
}