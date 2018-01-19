import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngAfterContentChecked() {
    document.getElementById("mainScript").remove();
    var mainScript = document.createElement("script");
    mainScript.setAttribute("id", "mainScript");
    mainScript.setAttribute("src", "assets/js/main.js");
    document.body.appendChild(mainScript);
  }
}