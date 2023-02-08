import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  //    console.log(forecastDays);

  return (
    <>
      <h3 className="title">Daily Forecast</h3>
<<<<<<< HEAD
      <Accordion allowZeroExpanded>
=======
      <Accordion className="forecast" allowZeroExpanded>
>>>>>>> e1f97fefdad3d2815cc2e349c0713150aebef0cb
        {data.list.splice(0, 7).map((item, index) => {
          console.log(item);
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                    />
                    <label className="day">{forecastDays[index]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
<<<<<<< HEAD
                  <div className="daily-detail-grid-item">

                  </div>
=======
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Cloud:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind:</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea-level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
>>>>>>> e1f97fefdad3d2815cc2e349c0713150aebef0cb
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
export default Forecast;
