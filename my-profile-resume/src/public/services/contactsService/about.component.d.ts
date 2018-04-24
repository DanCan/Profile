
export interface IAboutData {
  contacts: [IAboutContact],
  welcomeMessage: string,
  welcomeMessageCallout
}

export interface IAboutContact {
  title: string;
  content: string;
}
