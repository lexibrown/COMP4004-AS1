package com.comp4004.database;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.comp4004.model.Reservation;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;

public class ReservationDatabase {

	private List<Reservation> reservations = null; // list of all reservations

	public ReservationDatabase() {
		reservations = new ArrayList<Reservation>();
	}

	/**
	 * Load reservations from file database
	 * 
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public void loadReservations() throws IOException {
		File f = new File(Config.DATABASE_RESERVE);
		if (!f.exists()) {
			f.createNewFile();
		}
		String content = new String(Files.readAllBytes(Paths.get(Config.DATABASE_RESERVE)), StandardCharsets.UTF_8);
		if (content == null || content.isEmpty()) {
			this.reservations = new ArrayList<Reservation>();
		} else {
			this.reservations = (List<Reservation>) JsonUtil.parseList(content, Reservation.class);
		}
	}

	/**
	 * Save current list of reservations to file
	 */
	private void saveChanges() {
		File file = new File(Config.DATABASE_RESERVE);
		DataOutputStream outstream;
		try {
			outstream = new DataOutputStream(new FileOutputStream(file, false));
			String content = JsonUtil.stringify(this.reservations);
			outstream.write(content.getBytes());
			outstream.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Update inputed reservation in list and update database file
	 * 
	 * @param reservation
	 */
	public void saveChanges(Reservation reservation) {
		for (int i = 0; i < this.reservations.size(); i++) {
			Reservation r = this.reservations.get(i);
			if (reservation.getISBN() == r.getISBN() && reservation.getCopyNumber() == r.getCopyNumber()
					&& reservation.getUserId() == r.getUserId()) {
				this.reservations.set(i, reservation);
				saveChanges();
				return;
			}
		}
	}

	/**
	 * Returns all reservations
	 * 
	 * @return
	 */
	public List<Reservation> getReservations() {
		return reservations;
	}

	/**
	 * Returns all reservations owned by user
	 * 
	 * @param userId
	 * @return
	 */
	public List<Reservation> getReservations(int userId) {
		List<Reservation> userReservations = new ArrayList<Reservation>();
		for (Reservation r : this.reservations) {
			if (userId == r.getUserId()) {
				userReservations.add(r);
			}
		}
		return userReservations;
	}

	/**
	 * Adds reservation and save changes
	 * 
	 * @param r
	 */
	public void addReservation(Reservation r) {
		this.reservations.add(r);
		saveChanges();
	}

	/**
	 * Deletes reservation
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void deleteReservation(int ISBN, int copyNumber) {
		for (Reservation r : this.reservations) {
			if (r.getISBN() == ISBN && r.getCopyNumber() == copyNumber) {
				this.reservations.remove(r);
				saveChanges();
				break;
			}
		}
	}

	/**
	 * Deletes all reservations with book ISBN
	 * 
	 * @param ISBN
	 */
	public void deleteReservation(int ISBN) {
		for (Iterator<Reservation> iterator = this.reservations.iterator(); iterator.hasNext();) {
			Reservation r = iterator.next();
			if (ISBN == r.getISBN()) {
				iterator.remove();
			}
		}
		saveChanges();
	}

	/**
	 * Deletes all reservations with userId
	 * 
	 * @param userId
	 */
	public void deleteUserReservation(int userId) {
		for (Iterator<Reservation> iterator = this.reservations.iterator(); iterator.hasNext();) {
			Reservation r = iterator.next();
			if (userId == r.getUserId()) {
				iterator.remove();
			}
		}
		saveChanges();
	}

	/**
	 * Finds and returns reservation
	 * 
	 * @param ISBN
	 * @param copyNumber
	 * @return
	 */
	public Reservation findReservation(int ISBN, int copyNumber) {
		for (Reservation r : this.reservations) {
			if (r.getISBN() == ISBN && r.getCopyNumber() == copyNumber) {
				return r;
			}
		}
		return null;
	}

	/**
	 * Finds and returns reservation
	 * 
	 * @param ISBN
	 * @param copyNumber
	 * @param userId
	 * @return
	 */
	public Reservation findReservation(int ISBN, int copyNumber, int userId) {
		for (Reservation r : this.reservations) {
			if (r.getISBN() == ISBN && r.getCopyNumber() == copyNumber && r.getUserId() == userId) {
				return r;
			}
		}
		return null;
	}

	/**
	 * Clears database
	 */
	public void flush() {
		File f = new File(Config.DATABASE_RESERVE);
		if (f.exists()) {
			try {
				f.delete();
				f.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}