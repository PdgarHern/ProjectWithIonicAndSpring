package org.pedro.animes.entity.services;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.dao.IAnimeDao;
import org.pedro.animes.entity.dao.ICharacterDao;
import org.pedro.animes.entity.models.Character;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacterServiceImpl implements ICharacterService {
	
	@Autowired
	ICharacterDao characterDao;
	
	@Autowired
	IAnimeDao animeDao;
	
	@Override
	public List<Character> getAll() {
		return (List<Character>) characterDao.findAll();
	}
	
	@Override
	public Optional<Character> getOne(long idCharacter) {
		return characterDao.findById(idCharacter);
	}
	
	@Override
	public void add(Character character) {
		characterDao.save(character);
	
	}
	
	@Override
	public void addCharacterInAnimeByAnimeId(Character character, long id_anime) {
		animeDao.findById(id_anime).ifPresent(x -> {
			character.setAnime(x);
			characterDao.save(character);
		});
	}
	
	@Override
	public void delete(long idCharacter) {
		characterDao.deleteById(idCharacter);
	
	}
	
	@Override
	public void update(Character character, long idCharacter) {
		characterDao.findById(idCharacter).ifPresent((x) -> {
			character.setId_character(idCharacter);
			characterDao.save(character);
		}) ;
	
	}

}
