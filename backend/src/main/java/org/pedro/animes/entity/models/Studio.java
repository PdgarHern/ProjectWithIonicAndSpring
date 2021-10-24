package org.pedro.animes.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "studios")
public class Studio implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id_studio;
	
	String studio_name;
	
	String hq;
	
	int foundation_year;

	public long getId_studio() {
		return id_studio;
	}

	public void setId_studio(long id_studio) {
		this.id_studio = id_studio;
	}

	public String getStudioName() {
		return studio_name;
	}

	public void setStudioName(String studio_name) {
		this.studio_name = studio_name;
	}

	public String getHq() {
		return hq;
	}

	public void setHq(String hq) {
		this.hq = hq;
	}

	public int getFoundationYear() {
		return foundation_year;
	}

	public void setFoundationYear(int foundation_year) {
		this.foundation_year = foundation_year;
	}

	public Studio(String studio_name, String hq, int foundation_year) {
		super();
		this.studio_name = studio_name;
		this.hq = hq;
		this.foundation_year = foundation_year;
	}
	
	public Studio() {}
	
}
