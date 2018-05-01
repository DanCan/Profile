
export interface IAboutData {
  contacts: [IAboutContact],
  welcomeMessage: string,
  welcomeMessageCallout: string,
  skills: Array<Array<string>>
}

export interface IAboutContact {
  title: string;
  content: string;
}
