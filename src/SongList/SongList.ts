import { Song } from "./Song";
import PushIt from "./data/garbage_push-it";
import Zombie from "./data/the-cranberries_zombie";
import Lunch from "./data/girl-in-red_lunch";
import SheSellsSanctuary from "./data/the-cult_she-sells-sanctuary";
import DontMatter from "./data/kings-of-leon_dont-matter";
import VolcanoGirls from "./data/veruca-salt_volcano-girls";

export default function SongList(): Song[] {
  return [PushIt, Zombie, Lunch, SheSellsSanctuary, DontMatter, VolcanoGirls];
}
