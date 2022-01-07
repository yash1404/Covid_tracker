import React from "react";
import "./Datashow.css"

function Datashow(props) {
    const { active, cases, country, deaths, population, recovered } = props.data;
    console.log(props.data)
    return (
        <React.Fragment>
            <div className="populatedata">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="sameprop">
                                <h1>Country</h1>
                                <span>{country}</span>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="samepropone">
                                <h1>Active Case</h1>
                                <span>{active}</span>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sameproptwo">
                                <h1>Total Case</h1>
                                <span>{cases}</span>

                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="samepropthree">
                                <h1>Total Death</h1>
                                <span>{deaths}</span>

                            </div>
                         </div>

                         <div className="col-lg-4">
                                <div className="samepropfour">
                                    <h1>Recovered</h1>
                                    <span>{recovered}</span>

                                </div>
                         </div>

                            
                         <div className="col-lg-4">
                                <div className="samepropfive">
                                    <h1>Total Population</h1>
                                    <span>{population}</span>

                                </div>
                         </div>

                        </div>
                    </div>
                    </div>
                
            
        </React.Fragment>
    );
}

export default Datashow;
