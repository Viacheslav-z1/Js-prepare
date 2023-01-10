import { Component } from "../core/component";
import { apiSservice } from "../services/api.service";
import { renderPost } from "../templates/post.template";

export class Favorite extends Component {
  constructor(id,{loader}) {
    super(id);
    this.loader = loader;
  }

  init(){
    this.$el.addEventListener('click',linkClick.bind(this));
  }

  onShow(){
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const html =  renderList(favorites);
    this.$el.innerHTML = html;
  }
}


function renderList(list = []) {
  if(list.length){
    return `
    <ul>
    ${list.map(item =>{
     return `<li><a class='js-link' href='#'>${item}</a></li>`
    }).join(' ')}
    </ul>`
  }
    return "<p class='center'>Вы пока ничего не добавили</p>";
}

async function linkClick(e) {
  e.preventDefault();
  if(e.target.classList.contains('js-link')){
    const postId = e.target.textContent;
    this.$el.innerHTML = '';
    this.loader.show();
    const post = await apiSservice.fetchPostById(postId);
    this.loader.hide();
    this.$el.insertAdjacentHTML("afterbegin", renderPost(post, {withButton:false}));
  }
}


