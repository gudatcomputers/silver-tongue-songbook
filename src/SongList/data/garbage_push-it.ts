import { Song } from "../Song";

export default new Song(
  "Garbage",
  "Push It",
  [
    {
      platform: "Apple Music",
      link: `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/push-it/1363328157?i=1363328710"></iframe>`,
    },
    {
      platform: "Spotify",
      link: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6fVnRxwxVL7RavAGTVrNxW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
  ],
  [
    Song.section(8, "intro", "intro"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "don't worry baby", "other"),
    Song.section(4, "pre-chorus", "pre-chorus"),
    Song.section(8, "chorus", "chorus"),
    Song.section(4, "post-chorus", "post-chorus"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "don't worry baby", "other"),
    Song.section(4, "pre-chorus", "pre-chorus"),
    Song.section(8, "chorus", "chorus"),
    Song.section(8, "post-chorus", "post-chorus"),
    Song.section(8, "don't worry baby (decrescendo)", "other"),
    Song.section(4, "pre-chorus (solo vocal & build)", "pre-chorus"),
    Song.section(16, "chorus", "chorus"),
    Song.section(12, "bridge", "bridge"),
    Song.section(8, "chorus", "chorus"),
  ]
);
