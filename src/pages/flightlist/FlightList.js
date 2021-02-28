import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./FlightList.module.css";
import { useDispatch } from "react-redux";
import { getFlightList } from "../../features/flightselect/flightSlice";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { ReactComponent as Logout } from "../../icons/logout.svg";
import FlightSelect from "../../features/flightselect/FlightSelect";
import CustomSlider from "../../features/slider/Slider";

function FlightList() {
  const history = useHistory();
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10));
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    history.push("/");
  };

  const inputDateHandler = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    dispatch(getFlightList(date));
  }, [date]);

  return (
    <div className={styles.container}>
      <button className={styles.logout} onClick={handleLogout}>
        Выйти <Logout className={styles.logout_icon} />
      </button>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <div className={styles.flight_direction}>
            <h3 styles={styles.departures}>Вылеты</h3>
            <Arrow style={{ margin: "0 1.25rem" }} />
            <h3 styles={styles.departures}>SVO - JFK</h3>
          </div>
          <div className={styles.flight_date}>
            <input
              type="date"
              id="start"
              className={styles.flight_date_input}
              onChange={inputDateHandler}
              value={date}
            />
            <span className={styles.open_button}>
              <button type="button">
                <Calendar className={styles.calendar_icon} />
              </button>
            </span>
          </div>
        </div>
        <CustomSlider />
        <FlightSelect />
      </div>
    </div>
  );
}

export default FlightList;
