import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const images = [
        {
            src: "/images/Cat_One.jpg",
            alt: "emblem of gaza war news",
        },
        {
            src: "/images/Cat_Two.jpg",
            alt: "picture of the grave of Frank Arvola",
        },
        {
            src: "/images/Cat_Three.jpg",
            alt: "picture of a group of people demonstrating in support of palestine",
            
        }
    ];

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

    return (
        <div style={{ backgroundColor: 'white', padding: '20px', height: '100vh' }}>
            <h1 style={{ color: 'black' }}>Welcome to the Home Page</h1>
            <p style={{ color: 'black' }}>This is the main content of the home page.</p>

            <div style={{ alignItems: 'center', padding: '20px' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <a href={image.link}>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                style={{  height: '300px', objectFit: 'cover' }} 
                            />
                        </a>
                    </div>
                ))}
            </Slider>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                <div style={{ flex: 1, alignContent: 'center' }}>
                    <h3 style={{ color: 'black' }}>More Text</h3>
                    <p style={{ color: 'black' }}>This is the main content of the home page.</p>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'black' }}>More Text</h3>
                    <p style={{ color: 'black' }}>This is the main content of the home page.</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'black' }}>More Text</h3>
                    <p style={{ color: 'black' }}>This is the main content of the home page.</p>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'black' }}>More Text</h3>
                    <p style={{ color: 'black' }}>This is the main content of the home page.</p>
                </div>
            </div>
            
       
        </div>
    );
}

export default Home;