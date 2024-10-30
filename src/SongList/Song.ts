import { v4 as uuidv4 } from "uuid";
export type SongSectionType =
  | "intro"
  | "verse"
  | "chorus"
  | "pre-chorus"
  | "post-chorus"
  | "bridge"
  | "outro"
  | "other"
  | "solo";

export class SongSection {
  name: string;
  beatsPerMeasure: number;
  measures: undefined[];
  type: SongSectionType;

  private constructor(
    name: string,
    type: SongSectionType,
    measures: number,
    beatsPerMeasure: number
  ) {
    this.name = name;
    this.type = type;
    this.measures = Array.from({ length: measures }, () => undefined);
    this.beatsPerMeasure = beatsPerMeasure;
  }

  static new(
    name: string,
    type: SongSectionType,
    measures: number,
    beatsPerMeasure: number
  ): SongSection {
    return new SongSection(name, type, measures, beatsPerMeasure);
  }
}

export type PlatformType = "YouTube" | "Apple Music" | "Spotify";

export type SongLink = {
  link: string;
  platform: PlatformType;
};

export class Song {
  id: string;
  artist: string;
  title: string;
  links: SongLink[];
  structure: SongSection[];

  constructor(
    artist: string,
    title: string,
    links: SongLink[],
    structure: SongSection[]
  ) {
    this.id = uuidv4();
    this.artist = artist;
    this.title = title;
    this.structure = structure;
    this.links = links;
  }

  static section(
    measures: number,
    name: string,
    type: SongSectionType,
    beatsPerMeasure: number = 4
  ): SongSection {
    return SongSection.new(name, type, measures, beatsPerMeasure);
  }
}
