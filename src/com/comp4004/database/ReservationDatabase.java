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
import java.util.List;

import com.comp4004.model.Reservation;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;

public class ReservationDatabase {

	private List<Reservation> reservations = null;

	public ReservationDatabase() {
		reservations = new ArrayList<Reservation>();
	}

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

	public List<Reservation> getReservations() {
		return reservations;
	}

	public void addReservation(Reservation r) {
		this.reservations.add(r);
		saveChanges();
	}

	public void deleteReservation(int ISBN, int copyNumber) {
		for (Reservation r : this.reservations) {
			if (r.getISBN() == ISBN && r.getCopyNumber() == copyNumber) {
				this.reservations.remove(r);
				saveChanges();
				break;
			}
		}
	}

	public Reservation findReservation(int ISBN, int copyNumber) {
		for (Reservation r : this.reservations) {
			if (r.getISBN() == ISBN && r.getCopyNumber() == copyNumber) {
				return r;
			}
		}
		return null;
	}

	public Reservation findReservation(int ISBN, int copyNumber, int userId) {
		for (Reservation r : this.reservations) {
			if (r.getISBN() == ISBN && r.getCopyNumber() == copyNumber && r.getUserId() == userId) {
				return r;
			}
		}
		return null;
	}

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