package org.pedro.animes.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "animes")
public class Anime implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id_anime;
	
	String title;
	
	@ManyToOne
	@JoinColumn(name = "id_studio")
	Studio studio;
	
	int year;
	
	String image;

	public long getId() {
		return id_anime;
	}

	public void setId(long id) {
		this.id_anime = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Studio getStudio() {
		return studio;
	}

	public void setStudio(Studio studio) {
		this.studio = studio;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Anime(String title, int year, String image) {
		super();
		this.title = title;
		this.year = year;
		this.image = image;
	}
	
	public Anime() {}

}
