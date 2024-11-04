import { SongSectionType } from "../SongList/SongSection";
import arrayOfLength from "./arrayOfLength";

type BarsProps = {
  measures: undefined[];
  type: SongSectionType;
};

export default function Bars(props: BarsProps) {
  const { measures, type } = props;
  const fillerMeasures = arrayOfLength(8 - measures.length);

  return (
    <>
      {measures.map((_, i) => (
        <span key={`measure-${i}`} className={`measure ${type}`}>
          &nbsp;
        </span>
      ))}

      {fillerMeasures.map((_, i) => (
        <span key={`filler-measure-${i}`} className="measure filler" />
      ))}
    </>
  );
}