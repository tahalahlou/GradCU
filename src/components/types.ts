export type CourseType =
  | 'math'
  | 'science'
  | 'seas-core'
  | 'cs-intro-core'
  | 'prob-stat'
  | 'cs-area-foundation'
  | 'cs-elective'
  | 'tech-elective'
  | 'required';

export interface Theme {
  bg: string;
  text: string;
  textSecondary: string;
}

export interface ThemeModes {
  light: Theme;
  dark: Theme;
}

export interface Thread {
  name: CourseType;
  formalName: string;
  theme: ThemeModes;
  show: boolean;
}