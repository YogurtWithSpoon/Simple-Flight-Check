import React from "react";
import styles from "./Flightcard.module.css";
import { ReactComponent as PlaneIcon } from "../../../icons/plane.svg";
import { ReactComponent as LongArrow } from "../../..//icons/longarrow.svg";
import { ReactComponent as Like } from "../../../icons/favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, getFavorite, selectFavorite } from "../flightSlice";
import { numberWithThousands, showDate } from "./helpers";

function Flightcard({ data }) {
  let { from, to, date, time, company, cost } = data;

  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const handleClick = () => {
    dispatch(setFavorite({ date, cost, from, to, time }));
    dispatch(getFavorite());
  };

  const isFavorite = favorite[date] && favorite[date][cost];

  return (
    <div className={styles.flight_card}>
      <div className={styles.flight_icon}>
        <div className={styles.round_icon}>
          <PlaneIcon className={styles.plane_icon} />
        </div>
      </div>
      <div className={styles.flight_card_info}>
        <div className={styles.flight_card_left}>
          <span className={styles.flight_card_direction}>
            {from} <LongArrow style={{ margin: "0 1rem" }}/> {to}
          </span>
          <span className={styles.flight_card_options}>
            {showDate(date)} — {time}
          </span>
          <span className={styles.flight_card_options}>{company}</span>
        </div>
        <div className={styles.flight_card_right}>
          <button className={styles.flight_card_like} onClick={handleClick}>
            <Like
              className={`${styles.like_icon} ${
                isFavorite ? styles.like_icon_active : ""
              }`}
            />
          </button>
          <span className={styles.flight_card_price}>
            Price:
            <span
              className={styles.flight_card_price_number}
            >{`${numberWithThousands(cost)} ₽`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Flightcard;
