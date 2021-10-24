package org.pedro.animes.entity.dao;

import org.pedro.animes.entity.models.Anime;
import org.springframework.data.repository.CrudRepository;

public interface IAnimeDao extends CrudRepository<Anime, Long> {
	
}
