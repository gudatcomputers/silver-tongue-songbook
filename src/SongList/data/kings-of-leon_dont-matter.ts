import { Song } from "../Song";

export default new Song(
  "Kings of Leon",
  "Don't Matter",
  [
    {
      platform: "Apple Music",
      link: `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/dont-matter/1435640185?i=1435640199"></iframe>`,
    },
    {
      platform: "Spotify",
      link: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/48Jhybk2ZpPrnFb3oXdh6Z?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
  ],
  [
    Song.section(8, "intro", "intro"),
    Song.section(16, "verse", "verse"),
    Song.section(8, "chorus", "chorus"),
    Song.section(4, "post-chorus", "post-chorus"),
    Song.section(12, "verse", "verse"),
    Song.section(8, "chorus", "chorus"),
    Song.section(4, "pre-solo", "other"),
    Song.section(12, "solo", "solo"),
    Song.section(8, "solo w/ cuts", "solo"),
    Song.section(16, "verse", "verse"),
    Song.section(8, "chorus", "chorus"),
  ]
);
