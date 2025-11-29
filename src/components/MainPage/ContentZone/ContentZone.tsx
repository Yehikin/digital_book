import type { Section, Paragraph } from "../../../data/types";
import style from "./style.module.css";
import Slider from "../Slider/Slider";

interface ContentZoneProps {
  section: Section | null;
}

export default function ContentZone({ section }: ContentZoneProps) {
  if (!section) {
    return <div className={style.content}>Выберите раздел</div>;
  }

  return (
    <div className={style.content}>
      <div className={style.timeline}></div>

      <h2 className={style.sectionTitle}>{section.title}</h2>

      {section.paragraphs.map((para: Paragraph, index) => {
        const images = para.images ?? [];
        return (
          <div key={para.title + index} className={style.paragraphBlock}>
            <h3 className={style.paragraphTitle}>{para.title}</h3>
            <p className={style.main_text}>{para.text}</p>
            {images.length > 0 && <Slider images={images} />}
          </div>
        );
      })}
    </div>
  );
}
