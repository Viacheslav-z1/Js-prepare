import {Header} from "./components/header";
import {Navigation} from "./components/navigation";
import { Create } from "./components/create";
import { Posts } from "./components/posts";
import { Favorite } from "./components/favorite";
import { Loader } from "./components/loader";
import "../dist/styles.css";

const header = new Header("header");

const nav = new Navigation("navigation");

const loader = new Loader('loader')

const create = new Create("create");
const posts = new Posts("posts", {loader});
const favorite = new Favorite("favorite", { loader });

nav.registerTabs([
  { name: "create", component: create },
  { name: "posts", component: posts },
  { name: "favorite", component: favorite },
]);