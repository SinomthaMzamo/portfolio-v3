// Realm

import { Crown } from "lucide-react";

// attributes: title (string), kingdoms:Kingdom[], progress??
interface Realm {
  title: string;
  kingdoms: Kingdom[];
  getProgress(): number;
}

// Kingdom
// attributes: name (string), icon (string), description (string), missions(Mission[])
export interface Kingdom {
  id: string;
  name: KingdomName;
  icon: typeof Crown;
  description: string;
  missions: Mission[];
  colour: string;
  position: any;
}

export enum KingdomName {
  Projects = "The Forge",
  Education = "The Academy",
  Experience = "The Guild Hall",
  Skills = "The Arsenal",
  Exploring = "The Frontier",
  Certifications = "The treasury",
  AboutMe = "About Me",
}

// Mission
// attributes:
export interface Mission {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies?: string[];
  links?: { label: string; url: string }[];
  date?: string;
  unlocked: boolean;
  gameType: "memory" | "crossword" | "dragdrop";
  gameData: GameData;
}

export interface GameData {
  crossword: { word: string; hint: string }[];
  architectureLayers?: {
    layerPosition: number;
    description: string;
    icon: string;
  }[];
  memoryMatch: string[];
  matchThree: { colour: string; icon: string }[];
}
