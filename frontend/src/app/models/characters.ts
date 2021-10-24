import { Anime } from "./animes";

export class Character {
    id_character: number;
    character_name: string;
    gender: string;
    age: number;
    id_anime: number;
    anime: Anime;
    image: string;

    constructor() {
        this.anime = new Anime();
    }

}