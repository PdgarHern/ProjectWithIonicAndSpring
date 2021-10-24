package org.pedro.animes.controllers;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.models.Character;
import org.pedro.animes.entity.services.ICharacterService;
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
public class CharacterController {
	
	@Autowired
	ICharacterService characterService;
	
	@GetMapping("/characters")
	List<Character> getAll() {
		try {
			return characterService.getAll();
		} catch (Exception e) {
			System.out.print(e.getMessage());
			return null;
		}
		
		
	}
	
	@GetMapping("/characters/{id_character}")
	Character getOne(@PathVariable(value = "id_character") long id_character) {
		try {
			Optional<Character> c = characterService.getOne(id_character);
			
			if (c.isPresent()) {
				return c.get();
			}
			
			return null;
		} catch (Exception e) {
			System.out.print(e.getMessage());
			return null;
		}
		
		
	}
	
	@PostMapping("/characters")
	void add(Character character) {
		try {
			characterService.add(character);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}
	
	@PostMapping("/characters/{id_anime}")
	public void save(Character character, @PathVariable (value = "id_anime") long id_anime) {
		try {
			characterService.addCharacterInAnimeByAnimeId(character, id_anime);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}
	
	@DeleteMapping("/characters/{id_character}")
	void delete(@PathVariable(value = "id_character") long id_character) {
		try {
			characterService.delete(id_character);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}
	
	@PutMapping("/characters/{id_character}")
	void update(@PathVariable(value = "id_character") long id_character, Character character) {
		try {
			characterService.update(character, id_character);
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
		
	}

}
