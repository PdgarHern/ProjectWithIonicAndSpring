package org.pedro.animes.entity.services;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.models.Character;

public interface ICharacterService {
	List<Character> getAll();
	Optional<Character> getOne(long idCharacter);
	void add(Character character);
	void addCharacterInAnimeByAnimeId(Character character, long id_anime);
	void delete(long idCharacter);
	void update(Character character, long idCharacter);

}
