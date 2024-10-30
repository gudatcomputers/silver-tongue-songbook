import { Song } from "../Song";

export default new Song(
  "Girl In Red",
  "Lunch",
  [
    {
      platform: "YouTube",
      link: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iz5Bh2rVHUU?si=sJlKJ5YwlCxfHCAj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
  ],
  [
    Song.section(2, "intro", "intro"),
    Song.section(16, "verse", "verse"),
    Song.section(8, "baby I think you were made for me...", "other"),
    Song.section(8, "pre-chorus", "pre-chorus"),
    Song.section(8, "chorus (acapella start)", "chorus"),
    Song.section(8, "post-chorus", "post-chorus"),
    Song.section(16, "verse", "verse"),
    Song.section(16, "chorus", "chorus"),
  ]
);
