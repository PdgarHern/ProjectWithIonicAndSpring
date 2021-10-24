import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/animes';
import { Studio } from '../models/studios';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-put',
  templateUrl: './put.page.html',
  styleUrls: ['./put.page.scss'],
})
export class PutPage implements OnInit {

  public studios: Array<Studio> = [];
  id_anime: number;
  anime: Anime;
  submitted = false;
  error = false;
  studioExist = true;
  studioCorrect = false;

  constructor(private animeService: AnimesService, private route: ActivatedRoute, private router: Router) {

    route.params.subscribe((x) => {
      this.loadInfo();
    })

  }

  ngOnInit() {
    this.anime = new Anime();

    this.id_anime = this.route.snapshot.params['id_anime'];

    this.animeService.getAnimeById(this.id_anime).subscribe(data => {
      this.anime = data;
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

  loadInfo() {
    this.animeService.getStudios().subscribe((s: Array<Studio>) => {
      this.studios = s;
    })
  }

  updateAnime() {
    console.log(this.id_anime);
    console.log(this.anime);
    this.animeService.updateAnime(this.id_anime, this.anime).subscribe(data => {
      this.anime = new Anime();
      this.goToAnimes();
    },
      error => console.log(error));
  }

  onSubmit() {
    if (this.anime.title == "" || this.anime.studio.id_studio == null || this.anime.year.toString() == "" ) {
      this.error = true;
      setTimeout(() => {  window.location.reload(); }, 3000);
    } else {

      for (let i = 0; i < this.studios.length; i++) {
        if (this.studios[i].id_studio == this.anime.studio.id_studio) {
          this.studioCorrect = true;
          break;
        }
      }

      if (this.studioCorrect) {
        this.submitted = true;
        setTimeout(() => {
          this.updateAnime();
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
