export class Validators{
  static requried(value = ''){
    return value && value.trim()
  }

  static minLength(length){
    return value =>{
      return value.length >= length
    }
  }
}