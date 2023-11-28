import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movie-card"
export default class extends Controller {
  static targets = ["content","info","card"]
  connect() {
    //console.log(this.contentTarget)
  }
  revealContent() {
    this.contentTarget.classList.toggle("d-none")
  }

  update(event) {
    event.preventDefault();
    const url = this.contentTarget.action
    fetch(url, {
      method: "PATCH",
      headers: {"Accept": "text/plain"},
      body: new FormData(this.contentTarget)
    })
    .then(response => response.text())
    .then((data => this.cardTarget.outerHTML = data))
  }
}
