import PushIt from "./data/garbage_push-it";
import Zombie from "./data/the-cranberries_zombie";
import Lunch from "./data/girl-in-red_lunch";
import { Song } from "./Song";

export default function SongList(): Song[] {
  return [PushIt, Zombie, Lunch];
}
