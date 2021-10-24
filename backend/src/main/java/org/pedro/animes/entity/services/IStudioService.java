package org.pedro.animes.entity.services;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.models.Studio;

public interface IStudioService {
	List<Studio> getAll();
	Optional<Studio> getOne(long id_studio);
	void add(Studio studio);
	void delete(long id_studio);
	void update(Studio studio,long id_studio);

}
