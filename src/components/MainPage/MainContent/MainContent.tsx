import { useState } from "react";
import type { Book, Section } from "../../../data/types";
import ContentZone from "../ContentZone/ContentZone";

import style from "./style.module.css";

interface MainContentProps {
  book: Book;
}

export default function MainContent({ book }: MainContentProps) {
  const [selectedSection, setSelectedSection] = useState<Section | null>(
    book.sections[0]
  );

  return (
    <div className={style.main_block}>
      <ul className={style.chap_list}>
        {book.sections.map((section) => (
          <li
            key={section.id}
            className={`${style.chap_element} ${
              selectedSection?.id === section.id ? style.active : ""
            }`}
            onClick={() => setSelectedSection(section)}
          >
            {section.title}
          </li>
        ))}
      </ul>
      <ContentZone section={selectedSection} />
    </div>
  );
}
