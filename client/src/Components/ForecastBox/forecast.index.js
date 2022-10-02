import React from "react";
import "./forecast.style.css"
import Measurement from "../Measurement/measurement.index"
import Sun from "../../sun.png"

const ForecastBox = ({obj1,obj2,obj3,obj4}) => {

    return(
        <div className={"img-container"}>
            <img alt={"sun"} src={Sun}/>
            <div className={"forecast-container"}>
                <p>{obj1.time +  obj1.place}</p>
                <Measurement
                    type={obj1.type}
                    from={obj1.from}
                    to={obj1.to}
                    unit={obj1.unit}
                    precipitation_types={0}
                    directions={0}
                />
                <Measurement
                    type={obj2.type}
                    from={obj2.from}
                    to={obj2.to}
                    unit={obj2.unit}
                    precipitation_types={obj2.precipitation_types}
                    directions={0}
                />
                <Measurement
                    type={obj3.type}
                    from={obj3.from}
                    to={obj3.to}
                    unit={obj3.unit}
                    precipitation_types={0}
                    directions={obj3.direction}
                />
                <Measurement
                    type={obj4.type}
                    from={obj4.from}
                    to={obj4.to}
                    unit={obj4.unit}
                    precipitation_types={0}
                    directions={0}
                />
            </div>
        </div>
    )
}
export default ForecastBox