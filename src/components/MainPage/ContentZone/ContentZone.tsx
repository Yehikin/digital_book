import type { Section } from "../../../data/types";

import style from "./style.module.css";

interface ContentZoneProps {
  section: Section | null;
}

export default function ContentZone({ section }: ContentZoneProps) {
  if (!section) return <div className={style.content}>Выберите раздел</div>;

  const firstParagraph = section.paragraphs[0];

  return (
    <div className={style.content}>
      <div className={style.timeline}></div>

      <div className={style.theme}>{firstParagraph.title}</div>

      <p className={style.main_text}>{firstParagraph.text}</p>

      {firstParagraph.images?.map((img, i) => (
        <figure key={i}>
          <img src={img.url} alt={img.caption} />
          <figcaption>{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
