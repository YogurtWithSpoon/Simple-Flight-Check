import styles from './FlightSelect.module.css';

export const trackYSetting = {
  renderer: (props) => {
    const { elementRef, ...restProps } = props;
    return (
      <span
        {...restProps}
        ref={elementRef}
        className={styles.trackY}
      />
    );
  },
}



export const wrapperSettings = {
  renderer: (props) => {
    const { elementRef, ...restProps } = props;
    return (
      <span
        {...restProps}
        ref={elementRef}
        className={styles.MyAwesomeScrollbarsWrapper}
      />
    );
  },
}

export const customStyles = {height: Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
)/2}