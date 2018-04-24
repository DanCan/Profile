
export interface IProjectData {
  side: Array<IProject>;
  course: Array<IProject>;
}

export interface IProject {
  title: string;
  host?: string;
  github?: string;
  play?: string;
  dates: string;
  description: string;
  todo?: Array<string>;
  images: Array<string>;
}
