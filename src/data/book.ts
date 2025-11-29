import type { Book } from "./types";
import chapter1 from "./chapters/1._Introduction";
import chapter2 from "./chapters/2_Russian_empire";
import chapter3 from "./chapters/3_Revolution_RE";
import chapter4 from "./chapters/4_Reforms";
import chapter5 from "./chapters/5_KyrgyzSSR";
import chapter6 from "./chapters/6_Kyrgyzstan_InWar";
import chapter7 from "./chapters/7_Kyrgyzstan_AfterWar";
import chapter8 from "./chapters/8_Socializm_times";

const book: Book = {
  sections: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
  ],
};

export default book;
