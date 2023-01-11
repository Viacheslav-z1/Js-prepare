import { Component } from "../core/component";
import { apiSservice } from "../services/api.service";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../templates/post.template";
export class Posts extends Component {
  constructor(id, {loader}) {
    super(id);
    this.loader = loader;

  }

  init(){
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }

  async onShow() {
    this.loader.show();
    const fbdata = await apiSservice.fetchPosts();
    const posts = TransformService.fbObjectToArray(fbdata);
    const postsHtml = posts.map((post) => renderPost(post, { withButton: true })).join(" ");
    this.loader.hide();
    this.$el.innerHTML = postsHtml;
  }

  onHide(){
    this.$el.innerHTML = '';
  }
}



function buttonHandler(e) {
  const $el = e.target;
  const id = $el.dataset.id;
  const title = $el.dataset.title;
  
  if(id){
  let favorites =  JSON.parse(localStorage.getItem("favorites")) || [];

  const candidate = favorites.find( p => p.id === id);

  if (candidate) {
    $el.textContent = "Сохранить";
    $el.classList.add("button-primary");
    $el.classList.remove("button-danger");
    favorites = favorites.filter((p) => p.id != id);
  } else {
    $el.classList.remove("button-primary");
    $el.classList.add("button-danger");
    $el.textContent = "Удалить";
    favorites.push({ id, title });
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}