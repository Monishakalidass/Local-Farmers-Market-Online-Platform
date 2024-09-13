package com.example.mic.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="microhelp")
public class Help {
	 @Id
     private int Helpid;
	 private String Name;
	 private String Email;
	 private String Message;
	 
     
     
     

		public Help()
		{
			
		}

		public Help(int helpid, String name, String email, String message) {
			super();
			Helpid = helpid;
			Name = name;
			Email = email;
			Message = message;
		}

		public int getHelpid() {
			return Helpid;
		}

		public void setHelpid(int helpid) {
			Helpid = helpid;
		}

		public String getName() {
			return Name;
		}

		public void setName(String name) {
			Name = name;
		}

		public String getEmail() {
			return Email;
		}

		public void setEmail(String email) {
			Email = email;
		}

		public String getMessage() {
			return Message;
		}

		public void setMessage(String message) {
			Message = message;
		}
		
		


		
}
