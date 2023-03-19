export type Links = {
  text: string;
  path: string;
};

export interface BoxProps {
  id?: string;
  title: string;
  description: string;
}

export interface CoreBoxData extends Omit<BoxProps, "id"> {
  id: string;
}
export interface SpecializedBoxData extends CoreBoxData {}

export interface HeroData extends Omit<CoreBoxData, "id"> {
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

export interface ITrackData {
  id: string;
  name: string;
  quarters: quarterData[];
}

export {};
