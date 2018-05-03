
export interface IAboutData {
  contacts: [IAboutContact],
  welcomeMessage: string,
  welcomeMessageCallout: string,
  skills: Array<Array<string>>
  skills2: any;
}

export interface IAboutContact {
  title: string;
  content: string;
}
