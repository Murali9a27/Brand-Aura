export interface HomeSection {
  id: string;
  number: string;
  label: string;
}

export const homeSections: HomeSection[] = [
  {
    id: "hero",
    number: "I.",
    label: "INTRO",
  },
  {
    id: "clients",
    number: "II.",
    label: "CLIENTS",
  },
  {
    id: "portfolio",
    number: "III.",
    label: "WORK",
  },
  {
    id: "services",
    number: "IV.",
    label: "SERVICES",
  },
  {
    id: "founder",
    number: "V.",
    label: "FOUNDER",
  },
  {
    id: "game",
    number: "VI.",
    label: "PLAY",
  },
];