import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";
import { ApiService, apiSservice } from "../services/api.service.js";

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

async function submitHandler(e) {
  e.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };
    this.form.resetForm();
    console.log(formData);
    await apiSservice.createPost(formData);
    alert('Запис опубліковано')
  } 
}
