import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <button className={style.home_btn}>История Кыргызстана</button>
    </header>
  );
}
