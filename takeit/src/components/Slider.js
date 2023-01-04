import React from 'react';
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
require('react-responsive-carousel/lib/styles/carousel.min.css');
require('./../styles/Slider.css')


const datas = [
    {
        id : 1,
        image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?cs=srgb&dl=pexels-thisisengineering-3861943.jpg&fm=jpg",
        title: "Titre 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum suscipit voluptatum. Cupiditate quidem animi, soluta pariatur deleniti doloribus cumque?"  
     },
     {
        id : 2,
        image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?cs=srgb&dl=pexels-thisisengineering-3861943.jpg&fm=jpg",
        title: "Titre 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum suscipit voluptatum. Cupiditate quidem animi, soluta pariatur deleniti doloribus cumque?"  
     },
     {
        id : 3,
        image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?cs=srgb&dl=pexels-thisisengineering-3861943.jpg&fm=jpg",
        title: "Titre 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum suscipit voluptatum. Cupiditate quidem animi, soluta pariatur deleniti doloribus cumque?"  
     },
]
const Slider = () => (
<Carousel showArrows={true} >
                {datas.map((slide) => (
                    <div key={slide.id}>
                        
                        <img src={slide.image} alt=""></img><div className="overlay">
                            
                        
                        <h2 className='overlay_title'>{slide.title}</h2>
                        <p className="overlay_text">{slide.text}</p>
                        <br></br>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Get started</button>
                    </div>
                    </div>
                )


                )}
            </Carousel>

);

export default Slider;
