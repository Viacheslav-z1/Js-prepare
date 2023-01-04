import {Component} from '../core/component'

export class Header extends Component{
  constructor(id){
    super(id);
  }
  init(){
    const btn = this.$el.querySelector('.js-start');
    btn.addEventListener("click", buttonHandler.bind(this));
  }
}

function buttonHandler() {
  this.hide();
} 