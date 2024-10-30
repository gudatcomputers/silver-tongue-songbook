import { Song } from "../Song";

export default new Song(
  "The Cranberries",
  "Zombie",
  [
    {
      platform: "Apple Music",
      link: `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/zombie/1440735255?i=1440735264"></iframe>`,
    },
    {
      platform: "Spotify",
      link: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7EZC6E7UjZe63f1jRmkWxt?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
  ],
  [
    Song.section(4, "guitar intro", "intro"),
    Song.section(8, "band intro", "intro"),
    Song.section(4, "pre-verse riff", "other"),
    Song.section(16, "verse", "verse"),
    Song.section(8, "chorus", "chorus"),
    Song.section(4, "post-chorus", "post-chorus"),
    Song.section(4, "pre-verse riff", "other"),
    Song.section(16, "verse", "verse"),
    Song.section(8, "chorus", "chorus"),
    Song.section(8, "oh-oh", "post-chorus"),
    Song.section(8, "pre-solo", "other"),
    Song.section(8, "solo", "solo"),
    Song.section(4, "solo w/ breakdown", "solo"),
    Song.section(6, "outro", "outro"),
  ]
);
