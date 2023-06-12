import React, { Fragment } from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ slider }) => {
    return (
        <Fragment>
            <Carousel fade>

                {
                    slider.map((item, i) => (
                        <Carousel.Item>
                            <div className="slider">
                                <img src={item.image} alt={`image${i}`} />
                                
                                    <p>{item.name}</p>
                                    <span>{item.span}</span>
                                
                            </div>
                        </Carousel.Item>
                    ))
                }

            </Carousel>
        </Fragment>

    )
}

export default Slider;

