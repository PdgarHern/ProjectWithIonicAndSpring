import { Studio } from "./studios";

export class Anime {
    id: number;
    title: string;
    id_studio: number;
    studio: Studio;
    year: number;
    image: string;

    constructor() {
        this.studio = new Studio();
    }

}