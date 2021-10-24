import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/animes';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  public animes: Array<Anime> = [];

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
    this.animeService.getAnimes().subscribe((a: Array<Anime>) => {
      this.animes = a;
    })
  }

  deleteAnime(id_anime: number) {
    this.animeService.deleteAnime(id_anime).subscribe(() => {
      this.loadInfo();
    });
  }

}
