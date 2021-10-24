import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studio } from '../models/studios';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-put-studio',
  templateUrl: './put-studio.page.html',
  styleUrls: ['./put-studio.page.scss'],
})
export class PutStudioPage implements OnInit {

  id_studio: number;
  studio: Studio;
  submitted = false;
  error = false;

  constructor(private studioService: AnimesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.studio = new Studio();

    this.id_studio = this.route.snapshot.params['id_studio'];

    this.studioService.getStudioById(this.id_studio).subscribe(data => {
      this.studio = data;
    }, error => console.log(error));
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

  updateStudio() {
    console.log(this.id_studio);
    console.log(this.studio);
    this.studioService.updateStudio(this.id_studio, this.studio).subscribe(data => {
      this.studio = new Studio();
      this.goToAnimePost();
    },
      error => console.log(error));
  }

  onSubmit() {
    if (this.studio.studioName == "" || this.studio.hq == null || this.studio.foundationYear.toString() == "") {
      this.error = true;
      setTimeout(() => { window.location.reload(); }, 3000);
    } else {
      this.submitted = true;
      setTimeout(() => {
        this.updateStudio();
      }, 2000);
    }
  }

  goToAnimePost() {
    this.router.navigate(['/post']);
  }

}
