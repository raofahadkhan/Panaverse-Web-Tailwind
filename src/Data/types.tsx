export type Links = {
  text: string;
  path: string;
};

export interface BoxProps {
  id?: string;
  title: string;
  description: string;
  href?: string;
}

export interface CoreBoxData extends Omit<BoxProps, "id"> {
  id: string;
}
export interface SpecializedBoxData extends BoxProps {}

export interface HeroData extends Omit<BoxProps, "id"> {
  id: "hero" | "core-courses" | "segment";
  header: string;
  buttonText: string;
  img: true | false;
  blurEffect?: true | false;
  bgcolor?: "black" | "transparent";
}

export interface dataProgram extends CoreBoxData {}

export interface quarterData {
  id: string;
  objective: string;
  duration_weeks: number; //weeks
  description: string[];
  outline: {
    title: string;
    children?: (
      | {
          type: string;
          text: string;
          url?: string;
        }
      | {
          type: string;
          children: {
            type: string;
            text: string;
            url?: string;
          }[][];
        }
    )[][];
  }[];
}

export interface specializedQuarterData {
  id: string;
  name: string;
  heroDescription: string;
  objective: string;
  duration_weeks: number; //weeks
  description: string[];
  outline: {
    title: string;
    children?: (
      | {
          type: string;
          text: string;
          url?: string;
        }
      | {
          type: string;
          children: {
            type: string;
            text: string;
            url?: string;
          }[][];
        }
    )[][];
  }[];
}

export interface trackData {
  id: string;
  name: string;
  quarters: specializedQuarterData[];
}

export interface trackSegementData {
  trackName: string;
  data: quarterData;
}

export {};
