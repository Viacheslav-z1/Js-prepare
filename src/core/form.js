export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }

  value() {
    const values = {};
    Object.keys(this.controls).forEach((control) => {
      values[control] = this.form[control].value;
    });

    return values;
  }
  
  resetForm(){
    this.form.reset();
  }

  isValid() {
    let isFormValid = true;

    Object.keys(this.controls).forEach((control) => {
      const validators = this.controls[control];

      let isValid = true;
      validators.forEach((validator) => {
        isValid = validator(this.form[control].value) && isValid;
      });

      isValid ? clearError(this.form[control]) : setError(this.form[control]);

      isFormValid = isFormValid && isValid;
    });

    return isFormValid;
  }
}

function setError(control) {
  clearError(control);
  const errorMessage =
    '<p class="validation-error">Введите корректное значения</p>';

  control.classList.add("invalid");
  control.insertAdjacentHTML("afterEnd", errorMessage);
}

function clearError(control) {
  control.classList.remove("invalid");
  if (control.nextSibling) {
    control.closest(".form-control").removeChild(control.nextSibling);
  }
}

