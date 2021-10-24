import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studio } from '../models/studios';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-crud-studio',
  templateUrl: './crud-studio.page.html',
  styleUrls: ['./crud-studio.page.scss'],
})
export class CrudStudioPage implements OnInit {

  studio: Studio = new Studio();
  submitted = false;
  error = false;

  constructor(private studioService: AnimesService, private router: Router) { }

  ngOnInit() {
  }

  showMobileMenu() {
    

    const mobileMenuButton = document.getElementById("mobileMenu");
    const mobileMenu = document.querySelector("#menuHeader");

    if (mobileMenuBoolean) {
      mobileMenu.classList.remove("open");
      mobileMenu.classList.add("closed");
    } else {
      mobileMenu.classList.remove("closed");
      mobileMenu.classList.add("open");
    }

    mobileMenuBoolean = !mobileMenuBoolean;
  }

  addStudio() {
    this.studioService.createStudio(this.studio).subscribe(data => {
      this.studio = new Studio();
      this.goToPostAnime();
    },
      error => console.log(error));
  }

  onSubmit() {
    if (this.studio.studioName == null || this.studio.hq == null || this.studio.foundationYear == null) {
      this.error = true;
      setTimeout(() => { window.location.reload(); }, 3000);
    } else {
      this.submitted = true;
      setTimeout(() => {
        this.addStudio();
      }, 2000);
    }
  }

  goToPostAnime() {
    this.router.navigate(['/post']);
  }

}
