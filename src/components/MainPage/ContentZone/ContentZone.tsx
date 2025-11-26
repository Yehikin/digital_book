import type { Section } from "../../../data/types";

import style from "./style.module.css";

import Slider from "../Slider/Slider";

interface ContentZoneProps {
  section: Section | null;
}

export default function ContentZone({ section }: ContentZoneProps) {
  if (!section) return <div className={style.content}>Выберите раздел</div>;

  const firstParagraph = section.paragraphs[0];
  const images = firstParagraph.images ?? [];

  return (
    <div className={style.content}>
      <div className={style.timeline}></div>

      <div className={style.theme}>{firstParagraph.title}</div>

      <p className={style.main_text}>{firstParagraph.text}</p>

      <Slider images={images} />
    </div>
  );
}
