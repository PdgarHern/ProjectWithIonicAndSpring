package org.pedro.animes.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "characters")
public class Character implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id_character;
	
	String character_name;
	
	String gender;
	
	int age;
	
	@ManyToOne
	@JoinColumn(name = "id_anime")
	Anime anime;
	
	String image;

	public long getId_character() {
		return id_character;
	}

	public void setId_character(long id_character) {
		this.id_character = id_character;
	}

	public String getCharacter_name() {
		return character_name;
	}

	public void setCharacter_name(String character_name) {
		this.character_name = character_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Anime getAnime() {
		return anime;
	}

	public void setAnime(Anime anime) {
		this.anime = anime;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Character(String character_name, String gender, int age, String image) {
		super();
		this.character_name = character_name;
		this.gender = gender;
		this.age = age;
		this.image = image;
	}
	
	public Character() {}

}
