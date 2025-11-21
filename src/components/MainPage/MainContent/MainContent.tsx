import ContentZone from "../ContentZone/ContentZone";
import style from "./style.module.css";

export default function MainContent() {
  return (
    <div className={style.main_block}>
      <ul className={style.chap_list}>
        <li className={style.chap_element}>Глава 1. Первобытные в...</li>
      </ul>
      <ContentZone />
    </div>
  );
}
