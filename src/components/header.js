import {Component} from '../core/component'

const body = document.querySelector('.body');

export class Header extends Component{
  constructor(id){
    super(id);
  }
  init(){
    if(localStorage.getItem('visited')){
      this.hide();
      body.classList.remove("overflow");
    }
    const btn = this.$el.querySelector('.js-start');
    btn.addEventListener("click", buttonHandler.bind(this));
  }
}

function buttonHandler() {
  this.hide();
  body.classList.remove('overflow');
  localStorage.setItem('visited','true');
} 