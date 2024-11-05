import { Song } from "../Song";

export default new Song(
  "Veruca Salt",
  "Volcano Girls",
  [
    {
      platform: "Apple Music",
      link: `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/volcano-girls/1440908609?i=1440908615"></iframe>`,
    },
    {
      platform: "Spotify",
      link: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3cMliO9emUSa4d1Ap2MbfW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
  ],
  [
    Song.section(1, "hi-hat 4 count", "other"),
    Song.section(9, "chorus", "chorus"),
    Song.section(7, "post-chorus", "post-chorus"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "pre-chorus (volcanooo girlls)", "pre-chorus"),
    Song.section(6, "chorus", "chorus"),
    Song.section(3, "post-chorus", "post-chorus"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "pre-chorus (flip off everyone)", "pre-chorus"),
    Song.section(11, "solo", "solo"),
    Song.section(4, "post-solo", "other"),
    Song.section(4, "drum solo?", "solo"),
    Song.section(3, "interlude", "other"),
    Song.section(11, "bridge", "bridge"),
    Song.section(11, "chorus", "chorus"),
    Song.section(4, "post-chorus (outro)", "post-chorus"),
  ]
);
