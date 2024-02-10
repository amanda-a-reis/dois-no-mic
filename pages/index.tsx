import type { ReactElement } from "react";
import HomePage from "../src/HomePage";
import style from "../styles/home/home.module.scss";

export default function Home(): ReactElement {
  return (
    <div className={style.container}>
      <HomePage />
    </div>
  );
}
