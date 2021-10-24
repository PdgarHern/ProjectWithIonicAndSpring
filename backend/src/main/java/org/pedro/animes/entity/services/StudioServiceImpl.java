package org.pedro.animes.entity.services;

import java.util.List;
import java.util.Optional;

import org.pedro.animes.entity.dao.IStudioDao;
import org.pedro.animes.entity.models.Studio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudioServiceImpl implements IStudioService {

	@Autowired
	IStudioDao studioDao;

	@Override
	public List<Studio> getAll() {
		return (List<Studio>) studioDao.findAll();
	}

	@Override
	public Optional<Studio> getOne(long id_studio) {
		return studioDao.findById(id_studio);
	}

	@Override
	public void add(Studio studio) {
		studioDao.save(studio);
		
	}

	@Override
	public void delete(long id_studio) {
		studioDao.deleteById(id_studio);
		
	}

	@Override
	public void update(Studio studio, long id_studio) {
		studioDao.findById(id_studio).ifPresent((x) -> {
			studio.setId_studio(id_studio);
			studioDao.save(studio);
		});
		
	}
	
	
	
}
