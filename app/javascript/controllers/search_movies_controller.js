import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form","input","list"]
  connect() {
    //console.log(this.formTarget.action)
    //console.log(this.inputTarget.value)
    //console.log(this.listTarget)
  }

  update() {
    //console.log("todo an ajax request!")
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    // this builds http://localhost:3000/movies/?query=whatever is in the form
    fetch(url, {headers: {"Accept": "text/plain"}})
    .then(response => response.text())
    .then((data) => {
      this.listTarget.outerHTML = data
    })
  }
}
