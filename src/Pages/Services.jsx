import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../Assets/პოლიგრაფია.jpg";
import image3 from "../Assets/სასაჩუქრე.jpg";
import image4 from "../Assets/სოციალური ქსელები.jpg";
import image5 from "../Assets/პროდაქშენი.jpg";
import image6 from "../Assets/პოლიგრაფია.jpg";
import "./servicies.css"; // Import your CSS file

const Services = () => {
  const images = [image1, image3, image4, image5, image6];
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="services">
      <h1>სერვისები</h1>
      <div className="carousel-container">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <li className="carousel-list-item">
                <span className="text">
                  {
                    [
                      "პოლიგრაფია",
                      "სასაჩუქრე იდეები",
                      "სოციალური ქსელების მართვა",
                      "პროდაქშენი",
                      "პორტფოლიო",
                      "ბეჭდვა",
                    ][index]
                  }
                </span>
                <img
                  className="carousel-img"
                  src={image}
                  alt={`Service ${index + 1}`}
                />
              </li>
            </div>
          ))}
        </Carousel>
      </div>
      {/* <button className="arrow-button" onClick={handleNextClick}>
        Next
      </button> */}

      <h3 className="ani">მიყვარხარ ანიუტააა</h3>
    </div>
  );
};

export default Services;
