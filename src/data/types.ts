export interface Paragraph {
  title: string;
  text: string;
  images?: {
    url: string;
    caption: string;
  }[];
}

export interface Section {
  id: string;
  title: string;
  date?: string;
  paragraphs: Paragraph[];
}

export interface Book {
  sections: Section[];
}
