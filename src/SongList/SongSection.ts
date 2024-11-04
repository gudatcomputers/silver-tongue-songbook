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
