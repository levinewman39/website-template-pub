import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Our_Work() {

    // This is an array of images the will be displayed one home page
    const firstRowImages = [
        {
            src: "/images/Cat_One.jpg",
            alt: "Cute cat pic one",
            // link: "https://example.com/cat-one",
        },
        {
            src: "/images/Cat_Two.jpg",
            alt: "Cute cat pic two",
        },
        {
            src: "/images/Cat_Three.jpg",
            alt: "Cute cat pic three",
            
        }
    ];

    const secondRowImages = [
        {
            src: "/images/Cat_One.jpg",
            alt: "Cute cat pic one",
            // link: "https://example.com/cat-one",
        },
        {
            src: "/images/Cat_Two.jpg",
            alt: "Cute cat pic two",
        },
        {
            src: "/images/Cat_Three.jpg",
            alt: "Cute cat pic three",
            
        }
    ];


    //Setting for the image slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
    // This is the main content of the home page
    return (
        <div style={{ backgroundColor: 'white', padding: '20px', color: 'black' }}>
            <h1 style={{textAlign: 'Center'}}>Our Work & Mission</h1>
            <p style={{ textAlign: 'center', width: '40%', margin: '0 auto' }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
                lobortis nisl ut aliquip ex ea commodo consequat.
            </p>

            <div style={{ alignItems: 'center', padding: '20px' }}>
            <Slider {...settings}>
                {firstRowImages.map((image, index) => (
                    <div key={index}>
                        <a href={image.link}>
                            <img 
                                src={image.src}  
                                alt={image.alt} 
                                style={{  height: '800px', width: '100%', objectFit: 'cover' }} 
                            />
                        </a>
                    </div>
                ))}
            </Slider>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '50%', padding: '20px' }}> 
                    <h2 style={{ color: 'black' }}>More Text</h2>
                    <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
                        lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
                        lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
                <div style={{ width: '40%', padding: '50px' }}>
                    <Slider {...settings}>
                    {firstRowImages.map((image, index) => (
                        <div key={index}>
                            <a href={image.link}>
                                <img 
                                    src={image.src}  
                                    alt={image.alt} 
                                    style={{  height: '300px', width: '100%',objectFit: 'cover' }} 
                                />
                            </a>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            
       
        </div>
    );
}

export default Our_Work;