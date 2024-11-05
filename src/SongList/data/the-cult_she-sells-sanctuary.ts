import { Song } from "../Song";

export default new Song(
  "The Cult",
  "She Sells Sanctuary",
  [
    {
      platform: "Apple Music",
      link: `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/she-sells-sanctuary/1028833323?i=1028833873"></iframe>`,
    },
    {
      platform: "Spotify",
      link: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3qLZ866ZfaK0B0R5FIqXLG?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
  ],
  [
    Song.section(8, "intro", "intro"),
    Song.section(8, "intro (band)", "intro"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "riff break", "other"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "chorus", "chorus"),
    Song.section(8, "riff break", "other"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "riff break", "other"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "pre-chorus (I'm sure in her you'll find)", "pre-chorus"),
    Song.section(16, "chorus", "chorus"),
    Song.section(8, "riff break ( drop out )", "other"),
    Song.section(20, "chorus", "chorus"),
    Song.section(8, "riff break", "other"),
  ]
);
