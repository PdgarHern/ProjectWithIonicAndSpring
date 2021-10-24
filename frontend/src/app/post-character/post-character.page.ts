import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/characters';
import { AnimesService } from '../services/animes.service';

let mobileMenuBoolean = false;

@Component({
  selector: 'app-post-character',
  templateUrl: './post-character.page.html',
  styleUrls: ['./post-character.page.scss'],
})
export class PostCharacterPage implements OnInit {

  character: Character = new Character();
  id_anime: number;
  submitted = false;
  error = false;

  constructor(private characterService: AnimesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_anime = this.route.snapshot.params['id_anime'];
    this.character.id_anime = this.id_anime;
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

  addCharacter() {
    this.characterService.createCharacter(this.character).subscribe(data => {
      this.character = new Character();
      console.log(this.character.gender);
      this.goToCharacters();
    },
      error => console.log(error));
  }

  onSubmit() {
    if (this.character.character_name == null || this.character.gender == null || this.character.age == null || this.character.id_anime == null || this.character.image == null) {
      this.error = true;
      setTimeout(() => { window.location.reload(); }, 3000);
    } else {
      this.submitted = true;
      setTimeout(() => {
        this.addCharacter();
      }, 2000);
    }
  }

  goToCharacters() {
    this.router.navigate(['/crud']);
  }

}
