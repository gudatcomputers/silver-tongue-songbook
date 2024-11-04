import { SongSection } from "../SongList/SongSection";
import arrayOfLength from "./arrayOfLength";
import Bars from "./Bars";

type SectionProps = {
  section: SongSection;
};

export default function Section(props: SectionProps) {
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
