package org.pedro.animes.entity.dao;

import org.pedro.animes.entity.models.Character;
import org.springframework.data.repository.CrudRepository;

public interface ICharacterDao extends CrudRepository<Character, Long> {

}
