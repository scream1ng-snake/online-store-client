import React from 'react';
import style from "./preloader.module.css";

function Preloader(props) {
  return (
    <div className={style.preloader}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Preloader;