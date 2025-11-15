import * as React from "react";
import Slider from "react-slick";

const BecomeContentSlider = ({ data }) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <div aria-label="Next slide" tabIndex="0" role="button" >{">"}</div>,
    prevArrow: <div aria-label="Prev slide" tabIndex="0" role="button">{"<"}</div>,
  };
  return (
    <section className="become-slider">
      <div className="container mx-auto px-4">
        <div className="become-slider-wrapper">
          <Slider {...settings}>
            {data?.description?.map((item, i) => {
              return (
                <div key={i}>
                  <p
                    className="description text-white"
                    dangerouslySetInnerHTML={{
                      __html: item.item,
                    }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BecomeContentSlider;
