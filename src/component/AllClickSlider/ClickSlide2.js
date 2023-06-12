import React, { Fragment, useState } from "react";
import "./clickSlide1.css"

const ClickSlideShow2 = ({ Slide1Item }) => {


    const [showSlide, setshowSlide] = useState(0)
    const showSlideHnadler = (index) => {
        setshowSlide(index)
    }

    return (
        <Fragment>
            <div id="clickContainer">
                
                <div id="clickSlideImg">

                    {
                        showSlide === 0 ?
                            <div className="InnerSlide">
                                <img src={Slide1Item[0].image} alt={`image ${Slide1Item.name}`} />
                                <div className="InnerSlideText">
                                    <p style={{color:"white"}}>{Slide1Item[0].name}</p>
                                    <span style={{color:"white"}}>{Slide1Item[0].span}</span>
                                </div>
                            </div>
                            : null
                    }

                    {
                        showSlide === 1 ?
                            <div className="InnerSlide">
                                <img src={Slide1Item[1].image} alt={`image ${Slide1Item.name}`} />
                                <div className="InnerSlideText">
                                    <p>{Slide1Item[1].name}</p>
                                    <span>{Slide1Item[1].span}</span>
                                </div>
                            </div>
                            : null
                    }

                    {
                        showSlide === 2 ?
                            <div className="InnerSlide">
                                <img src={Slide1Item[2].image} alt={`image ${Slide1Item.name}`} />
                                <div className="InnerSlideText">
                                    <p style={{color:"black"}}>{Slide1Item[2].name}</p>
                                    <span style={{color:"black"}}>{Slide1Item[2].span}</span>
                                </div>
                            </div>
                            : null
                    }

                    {
                        showSlide === 3 ?
                            <div className="InnerSlide">
                                <img src={Slide1Item[3].image} alt={`image ${Slide1Item.name}`} />
                                <div className="InnerSlideText">
                                    <p style={{color:"white"}}>{Slide1Item[3].name}</p>
                                    <span style={{color:"white"}}>{Slide1Item[3].span}</span>
                                </div>
                            </div>
                            : null
                    }

                    {
                        showSlide === 4 ?
                            <div className="InnerSlide">
                                <img src={Slide1Item[4].image} alt={`image ${Slide1Item.name}`} />
                                <div className="InnerSlideText">
                                    <p style={{color:"black"}} >{Slide1Item[4].name}</p>
                                    <span style={{color:"black"}} >{Slide1Item[4].span}</span>
                                </div>
                            </div>
                            : null
                    }


                </div>
                <ul >
                    <li style={showSlide===0||showSlide===3?{color:"white"}:null} onClick={() => showSlideHnadler(0)} >{Slide1Item[0].name}</li>
                    <li style={showSlide===0||showSlide===3?{color:"white"}:null} onClick={() => showSlideHnadler(1)} >{Slide1Item[1].name}</li>
                    <li style={showSlide===0||showSlide===3?{color:"white"}:null} onClick={() => showSlideHnadler(2)} >{Slide1Item[2].name}</li>
                    <li style={showSlide===0||showSlide===3?{color:"white"}:null} onClick={() => showSlideHnadler(3)} >{Slide1Item[3].name}</li>
                    <li style={showSlide===0||showSlide===3?{color:"white"}:null} onClick={() => showSlideHnadler(4)} >{Slide1Item[4].name}</li>
                </ul>

            </div>
        </Fragment>
    )
}

export default ClickSlideShow2;