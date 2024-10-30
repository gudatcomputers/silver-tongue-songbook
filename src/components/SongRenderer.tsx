import { Song, SongSection, SongSectionType } from "../SongList/Song";
import LinkTabs from "./LinkTabs";

type SongRendererProps = {
  song: Song;
};

function Bars(props: { measures: undefined[]; type: SongSectionType }) {
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

function arrayOfLength(length: number): undefined[] {
  return Array.from({ length: Math.floor(length) }, () => undefined);
}

function Section(props: { section: SongSection }) {
  const { section } = props;
  const fullBarGroups = arrayOfLength(Math.floor(section.measures.length / 8));

  return (
    <div className={`song-section song-section-${section.type}`}>
      <span className="roboto-regular">{section.name}</span>
      {fullBarGroups.map((_, i) => (
        <div key={`section-group-${i}`} className="section-group">
          <Bars measures={arrayOfLength(8)} type={section.type} />
        </div>
      ))}

      {section.measures.length % 8 !== 0 && (
        <div className="section-group">
          <Bars
            measures={arrayOfLength(
              section.measures.length - fullBarGroups.length * 8
            )}
            type={section.type}
          />
        </div>
      )}
    </div>
  );
}
export default function SongRenderer(props: SongRendererProps) {
  const { song } = props;

  return (
    <div id="song-content" className="song-content">
      <LinkTabs links={song.links} />
      <div className="song-structure-container">
        {song.structure.map((section, i) => {
          return <Section section={section} key={`${section.name}-${i}`} />;
        })}
      </div>
    </div>
  );
}
