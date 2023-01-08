import {Header} from "./components/header";
import {Navigation} from "./components/navigation";
import { Create } from "./components/create";
import { Posts } from "./components/posts";
import { Favorite } from "./components/favorite";
import "../dist/styles.css";

const header = new Header("header");

const nav = new Navigation("navigation");

const create = new Create("create");
const posts = new Posts("posts");
const favorite = new Favorite("favorite");

nav.registerTabs([
  { name: "create", component: create },
  { name: "posts", component: posts },
  { name: "favorite", component: favorite },
]);