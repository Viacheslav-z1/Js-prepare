import {Header} from "./components/header";
import {Navigation} from "./components/navigation";
import { Form } from "./components/form";
import { Posts } from "./components/posts";
import { Favorite } from "./components/favorite";
import "../dist/styles.css";

const header = new Header("header");

const nav = new Navigation("navigation");

const form = new Form("create");
const posts = new Posts("posts");
const favorite = new Favorite("favorite");

nav.registerTabs([
  { name: "create", component: form },
  { name: "posts", component: posts },
  { name: "favorite", component: favorite },
]);