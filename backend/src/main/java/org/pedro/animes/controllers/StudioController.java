package org.pedro.animes.controllers;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.models.Studio;
import org.pedro.animes.entity.services.IStudioService;
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
public class StudioController {

	@Autowired
	IStudioService studioService;
	
	@GetMapping("/studios")
	List<Studio> getAll() {
		return studioService.getAll();
	}
	
	@GetMapping("/studios/{id_studio}")
	Studio getOne(@PathVariable("id_studio") long id_studio) {
		Optional<Studio> s = studioService.getOne(id_studio);
		
		if (s.isPresent()) {
			return s.get();
		}
		
		return null;
	}
	
	@PostMapping("/studios")
	void add(Studio studio) {
		studioService.add(studio);
	}
	
	@DeleteMapping("/studios/{id_studio}")
	void update(@PathVariable("id_studio") long id_studio) {
		studioService.delete(id_studio);
	}
	
	@PutMapping("studios/{id_studio}")
	void update(@PathVariable("id_studio") long id_studio, Studio studio) {
		studioService.update(studio, id_studio);
	}
	
}
