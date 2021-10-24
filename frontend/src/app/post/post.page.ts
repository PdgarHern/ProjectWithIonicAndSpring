import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/animes';
import { Studio } from '../models/studios';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public studios: Array<Studio> = [];
  anime: Anime = new Anime();
  submitted = false;
  error = false;
  studioExist = true;
  studioCorrect = false;

  constructor(private animeService: AnimesService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo();
    })

  }

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

  loadInfo() {
    this.animeService.getStudios().subscribe((s: Array<Studio>) => {
      this.studios = s;
    })
  }

  addAnime() {
    this.animeService.createAnime(this.anime).subscribe(data => {
      this.anime = new Anime();
      this.goToAnimes();
    },
      error => console.log(error));

  }

  onSubmit() {
    if (this.anime.title == null || this.anime.id_studio == null || this.anime.year == null || this.anime.image == null) {
      this.error = true;
      setTimeout(() => {  window.location.reload(); }, 3000);
    } else {

      for (let i = 0; i < this.studios.length; i++) {
        if (this.studios[i].id_studio == this.anime.id_studio) {
          this.studioCorrect = true;
          break;
        }
      }

      if (this.studioCorrect) {
        this.submitted = true;
        setTimeout(() => {
          this.addAnime();
        }, 2000);
      } else {
        this.studioExist = false;
        setTimeout(() => {  window.location.reload(); }, 3000);
      }

    }

  }

  goToAnimes() {
    this.router.navigate(['/crud']);
  }

  deleteStudio(id_studio: number) {
    this.animeService.deleteStudio(id_studio).subscribe(() => {
      this.loadInfo();
    })
  }

}
