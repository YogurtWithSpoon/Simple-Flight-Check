import React, { useEffect } from "react";
import styles from "./FlightSelect.module.css";
import FlightCard from "./flightcard/Flightcard";
import { Scrollbar } from "react-scrollbars-custom";
import { useSelector, useDispatch } from "react-redux";
import { selectFlights, getFavorite, selectFavorite } from "./flightSlice";
import { num_word, count } from "./helpers";
import {
  trackYSetting,
  wrapperSettings,
  customStyles,
} from "./ScrollBarSetting";

function FlightSelect() {
  const dispatch = useDispatch();
  const flights = useSelector(selectFlights);
  const favorite = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getFavorite());
  }, []);

  let favoriteCount = count(favorite);

  return (
    <div className={styles.flight_select}>
      <span className={styles.flight_favorite}>
        Добавленно в Избранное:
        <span className={styles.flight_favorite_number}>{favoriteCount}</span>
        {` ${num_word(favoriteCount, ["рейс", "рейса", "рейсов"])}`}
      </span>
      <div className="fligth_scroll_list">
        <Scrollbar
          style={customStyles}
          maximalThumbYSize={100}
          trackYProps={trackYSetting}
          wrapperProps={wrapperSettings}
        >
          {flights.length === 0 ? (
            <span className={styles.noflight}>Нет рейсов</span>
          ) : (
            flights.map((item) => {
              return <FlightCard key={item.id} data={item} />;
            })
          )}
        </Scrollbar>
      </div>
    </div>
  );
}

export default FlightSelect;
