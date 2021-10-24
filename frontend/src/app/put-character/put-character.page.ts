import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/animes';
import { Character } from '../models/characters';
import { Studio } from '../models/studios';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-put-character',
  templateUrl: './put-character.page.html',
  styleUrls: ['./put-character.page.scss'],
})
export class PutCharacterPage implements OnInit {

  id_anime: number;
  id_character: number;
  character: Character;
  submitted = false;
  error = false;

  constructor(private animeService: AnimesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.character = new Character();

    this.id_anime = this.route.snapshot.params['id_anime'];
    this.id_character = this.route.snapshot.params['id_character'];

    console.log(this.id_anime);
    console.log(this.id_character);

    this.animeService.getCharacterById(this.id_character).subscribe(data => {
      this.character = data;
    }, error => console.log(error));

    console.log(this.character.character_name);
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

  updateCharacter() {
    console.log(this.id_character);
    console.log(this.character);
    this.animeService.updateCharacter(this.id_character, this.character).subscribe(data => {
      this.character = new Character();
      this.goToAnimes();
    },
      error => console.log(error));
  }

  onSubmit() {
    if (this.character.character_name == "" || this.character.gender == null || this.character.age.toString() == "" || this.character.image == "") {
      this.error = true;
      setTimeout(() => { window.location.reload(); }, 3000);
    } else {
      this.submitted = true;
      setTimeout(() => {
        this.updateCharacter();
      }, 2000);

    }
  }

  goToAnimes() {
    this.router.navigate(['/crud']);
  }

}
