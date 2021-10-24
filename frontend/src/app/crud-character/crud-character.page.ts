import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/animes';
import { Character } from '../models/characters';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-crud-character',
  templateUrl: './crud-character.page.html',
  styleUrls: ['./crud-character.page.scss'],
})
export class CrudCharacterPage implements OnInit {

  public characters: Array<Character> = [];
  id_anime: number;

  constructor(private animeService: AnimesService, private router: Router, private route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo();
    })

  }

  ngOnInit() {
    this.id_anime = this.route.snapshot.params['id_anime'];
    console.log(this.id_anime);

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
    this.animeService.getCharacters().subscribe((a: Array<Character>) => {
      this.characters = a;
    })
  }

  deleteCharacter(id_character: number) {
    this.animeService.deleteCharacter(id_character).subscribe(() => {
      this.loadInfo();
    });
  }

}
