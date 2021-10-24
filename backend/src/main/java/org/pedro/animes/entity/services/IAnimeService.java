package org.pedro.animes.entity.services;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.models.Anime;

public interface IAnimeService {
	List<Anime> getAll();
	Optional<Anime> getOne(long idAnime);
	void add(Anime anime);
	void addAnimeInStudioByStudioId(Anime anime, long id_studio);
	void delete(long idAnime);
	void update(Anime anime, long idAnime);

}
