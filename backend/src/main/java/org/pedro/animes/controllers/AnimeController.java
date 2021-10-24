package org.pedro.animes.controllers;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.models.Anime;
import org.pedro.animes.entity.services.IAnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class AnimeController {
	
	@Autowired
	IAnimeService animeService;
	
	@GetMapping("/animes")
	List<Anime> getAll() {
		try {
			return animeService.getAll();
		} catch (Exception e) {
			System.out.print(e.getMessage());
			return null;
		}
		
		
	}
	
	@GetMapping("/animes/{id_anime}")
	Anime getOne(@PathVariable(value = "id_anime") long id_anime) {
		try {
			Optional<Anime> a = animeService.getOne(id_anime);
			
			if (a.isPresent()) {
				return a.get();
			}
			
			return null;
		} catch (Exception e) {
			System.out.print(e.getMessage());
			return null;
		}
		
		
	}
	
	@PostMapping("/animes")
	void add(Anime anime) {
		try {
			animeService.add(anime);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}
	
	@PostMapping("/animes/{id_studio}")
	public void save(Anime anime, @PathVariable (value = "id_studio") long id_studio) {
		try {
			animeService.addAnimeInStudioByStudioId(anime, id_studio);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}
	
	@DeleteMapping("/animes/{id_anime}")
	void delete(@PathVariable(value = "id_anime") long id) {
		try {
			animeService.delete(id);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}
	
	@PutMapping("/animes/{id_anime}")
	void update(@PathVariable(value = "id_anime") long id, Anime anime) {
		try {
			animeService.update(anime, id);		
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}

}
