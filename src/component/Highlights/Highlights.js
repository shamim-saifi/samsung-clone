import React, { Fragment, useState } from "react";
import "./Highlights.css";


const Highlights = ({ LeftCover, NewIn, Mobile, tv, Appliances, GalaxyEcosystem }) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const changer = (index) => {
        setCurrentSlide(index)
    }

    return (
        <Fragment>
            <div className="tabs">
                <ul>
                    <li onClick={() => changer(0)} >NewIn</li>
                    <li onClick={() => changer(1)} >Mobile</li>
                    <li onClick={() => changer(2)} >TV</li>
                    <li onClick={() => changer(3)} >Appliances</li>
                </ul>
            </div>

            {/* first slide */}
            {currentSlide === 0 ?
                <div id="cotainer">
                    <div className="leftImg">
                        <img src={LeftCover[0].image} />

                    </div>
                    <div className="rightImg">
                        <div className="rightCard">
                            {
                                NewIn.map((item, i) => (
                                    < >
                                        <figure>
                                            <img key={item.image} src={item.image} alt={`image${i}`} />
                                            <figcaption>
                                                <p>{item.name}</p>
                                                <span>{item.span}</span>
                                            </figcaption>
                                        </figure>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

                : null
            }

            {/* second slide */}
            {
                currentSlide === 1 ?
                    <div id="cotainer">
                        <div className="leftImg">
                            <img src={LeftCover[1].image} />

                        </div>
                        <div className="rightImg">
                            <div className="rightCard">
                                {
                                    Mobile.map((item, i) => (
                                        < >
                                            <figure>
                                                <img key={item.image} src={item.image} alt={`image${i}`} />
                                                <figcaption>
                                                    <p>{item.name}</p>
                                                    <span>{item.span}</span>
                                                </figcaption>
                                            </figure>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    : null
            }

            {/* third slide */}
            {
                currentSlide === 2 ?
                    <div id="cotainer">
                        <div className="leftImg">
                            <img src={LeftCover[2].image} />

                        </div>
                        <div className="rightImg">
                            <div className="rightCard">
                                {
                                    tv.map((item, i) => (
                                        < >
                                            <figure>
                                                <img key={item.image} src={item.image} alt={`image${i}`} />
                                                <figcaption>
                                                    <p>{item.name}</p>
                                                    <span>{item.span}</span>
                                                </figcaption>
                                            </figure>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    : null
            }

            {/* four slide */}
            {
                currentSlide === 3 ?
                    <div id="cotainer">
                        <div className="leftImg">
                            <img src={LeftCover[3].image} />

                        </div>
                        <div className="rightImg">
                            <div className="rightCard">
                                {
                                    Appliances.map((item, i) => (
                                        < >
                                            <figure>
                                                <img key={item.image} src={item.image} alt={`image${i}`} />
                                                <figcaption>
                                                    <p>{item.name}</p>
                                                    <span>{item.span}</span>
                                                </figcaption>
                                            </figure>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    : null
            }
        </Fragment>
    )
}

export default Highlights;