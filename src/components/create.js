import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";

export class Create extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener("submit", submitHandler.bind(this));

    this.form = new Form(this.$el, {
      title: [Validators.requried],
      fulltext: [Validators.requried, Validators.minLength(10)],
    });
  }
}

function submitHandler(e) {
  e.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value(),
    };
    this.form.resetForm();
    console.log(formData);
  } 
}
