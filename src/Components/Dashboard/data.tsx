import {
  Group1Icon,
  Group2Icon,
  Group3Icon,
  Group4Icon,
  HomeIcon,
  RegistrationIcon,
} from "../../svg";

type navOptionsType = {
  id: number;
  icon: React.ReactNode;
  name: string;
  path?: string;
};

type HomePageOptionsType = {
  id: number;
  title: string;
  subtitle: string;
  svgColor: string;
};

export const menuOptions: navOptionsType[] = [
  { id: 1, icon: <HomeIcon />, name: "Κεντρική σελίδα", path: "/" },
  { id: 2, icon: <Group1Icon />, name: "Αποθήκη 1", path: "/storage1" },
  { id: 3, icon: <Group2Icon />, name: "Αποθήκη 2", path: "/storage2" },
  { id: 4, icon: <Group3Icon />, name: "Αποθήκη 3", path: "/storage3" },
  { id: 5, icon: <Group4Icon />, name: "Αποθήκη 4", path: "/storage4" },
];
export const materialEntriesOptions: navOptionsType[] = [
  { id: 1, icon: <RegistrationIcon />, name: "Καταχώριση" },
];
export const HomePageOptions: HomePageOptionsType[] = [
  {
    id: 1,
    title: "ΕΞΑΓΩΓΗ",
    subtitle: "Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη",
    svgColor: "#c2566d",
  },
  {
    id: 2,
    title: "ΜΕΤΑΚΙΝΗΣΗ",
    subtitle: "Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη",
    svgColor: "#f0c17d",
  },
  {
    id: 3,
    title: "ΕΙΣΑΓΩΓΗ",
    subtitle: "Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη",
    svgColor: "#2bc3a7",
  },
];
