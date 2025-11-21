import style from "./style.module.css";

export default function ContentZone() {
  return (
    <div className={style.content}>
      <div className={style.timeline}>2000 г. до н.э.</div>
      <div className={style.theme}>Глава 1. Первобытные века</div>
      <p className={style.main_text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id asperiores
        placeat repellat accusamus quae dolore fugit ratione reiciendis
        molestias, nostrum autem quos sapiente. Perspiciatis repellendus neque
        ullam incidunt consequatur, sapiente officia cumque animi maxime? Hic
        reiciendis quia molestiae ipsum? Repudiandae optio veniam quia id
        officiis atque ullam unde assumenda omnis recusandae tempora commodi
        consequatur, suscipit perspiciatis totam culpa similique saepe expedita
        fuga consequuntur doloremque nesciunt necessitatibus debitis? Nesciunt,
        quia. Veniam sapiente molestiae consequatur deserunt nihil velit iste
        odio nemo odit culpa, cum commodi fuga et maxime impedit quibusdam quam
        sit molestias, enim consequuntur soluta esse. Quis modi maxime corrupti
        a?
      </p>
      <img src="/images/kyrgyz-history.jpg" alt="" />
    </div>
  );
}
