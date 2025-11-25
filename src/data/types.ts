export interface Book {
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  date?: string;
  paragraphs: Paragraph[];
}

export interface Paragraph {
  title: string;
  text: string;
  images?: {
    url: string;
    caption: string;
  }[];
}
