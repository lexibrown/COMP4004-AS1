package main.java.com.comp4004.database;

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

import main.java.com.comp4004.model.Loan;
import main.java.com.comp4004.utils.Config;
import main.java.com.comp4004.utils.JsonUtil;

public class LoanDatabase {

	private List<Loan> loans = null; // list of all loans

	public LoanDatabase() {
		loans = new ArrayList<Loan>();
	}

	/**
	 * Loads loans from file database
	 * 
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public void loadLoans() throws IOException {
		File f = new File(Config.DATABASE_LOANS);
		if (!f.exists()) {
			f.createNewFile();
		}
		String content = new String(Files.readAllBytes(Paths.get(Config.DATABASE_LOANS)), StandardCharsets.UTF_8);
		if (content == null || content.isEmpty()) {
			this.loans = new ArrayList<Loan>();
		} else {
			this.loans = (List<Loan>) JsonUtil.parseList(content, Loan.class);
		}
	}

	/**
	 * Save current list of loans to file
	 */
	private void saveChanges() {
		File file = new File(Config.DATABASE_LOANS);
		DataOutputStream outstream;
		try {
			outstream = new DataOutputStream(new FileOutputStream(file, false));
			String content = JsonUtil.stringify(this.loans);
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
	 * Update inputed loan in list and update database file
	 * 
	 * @param loan
	 */
	public void saveChanges(Loan loan) {
		for (int i = 0; i < this.loans.size(); i++) {
			Loan l = this.loans.get(i);
			if (loan.getISBN() == l.getISBN() && loan.getCopyNumber() == l.getCopyNumber()) {
				this.loans.set(i, loan);
				saveChanges();
				return;
			}
		}
	}

	/**
	 * Returns all loans
	 * 
	 * @return
	 */
	public List<Loan> getLoans() {
		return loans;
	}

	/**
	 * Returns all loans owned by user
	 * 
	 * @param userId
	 * @return
	 */
	public List<Loan> getUserLoans(int userId) {
		List<Loan> userLoans = new ArrayList<Loan>();
		for (Loan l : this.loans) {
			if (userId == l.getUserId()) {
				userLoans.add(l);
			}
		}
		return userLoans;
	}

	/**
	 * Returns all loans owned by ISBN
	 * 
	 * @param ISBN
	 * @return
	 */
	public List<Loan> getLoans(int ISBN) {
		List<Loan> iSBNLoans = new ArrayList<Loan>();
		for (Loan l : this.loans) {
			if (ISBN == l.getISBN()) {
				iSBNLoans.add(l);
			}
		}
		return iSBNLoans;
	}
	
	/**
	 * Adds loan to list and save changes
	 * 
	 * @param l
	 */
	public void addLoan(Loan l) {
		this.loans.add(l);
		saveChanges();
	}

	/**
	 * Deletes loan
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void deleteLoan(int ISBN, int copyNumber) {
		for (Loan l : this.loans) {
			if (l.getISBN() == ISBN && l.getCopyNumber() == copyNumber) {
				this.loans.remove(l);
				saveChanges();
				break;
			}
		}
	}

	/**
	 * Deletes all loans with inputed ISBN
	 * 
	 * @param ISBN
	 */
	public void deleteLoan(int ISBN) {
		for (Iterator<Loan> iterator = this.loans.iterator(); iterator.hasNext();) {
			Loan l = iterator.next();
			if (ISBN == l.getISBN()) {
				iterator.remove();
			}
		}
		saveChanges();
	}

	/**
	 * Deletes all loans with inputed userId
	 * 
	 * @param userId
	 */
	public void deleteUserLoan(int userId) {
		for (Iterator<Loan> iterator = this.loans.iterator(); iterator.hasNext();) {
			Loan l = iterator.next();
			if (userId == l.getUserId()) {
				iterator.remove();
			}
		}
		saveChanges();
	}

	/**
	 * Finds loan and returns it
	 * 
	 * @param ISBN
	 * @param copyNumber
	 * @return
	 */
	public Loan findLoan(int ISBN, int copyNumber) {
		for (Loan l : this.loans) {
			if (l.getISBN() == ISBN && l.getCopyNumber() == copyNumber) {
				return l;
			}
		}
		return null;
	}

	/**
	 * Finds loan and returns it
	 * 
	 * @param ISBN
	 * @param copyNumber
	 * @param userId
	 * @return
	 */
	public Loan findLoan(int ISBN, int copyNumber, int userId) {
		for (Loan l : this.loans) {
			if (l.getISBN() == ISBN && l.getCopyNumber() == copyNumber && l.getUserId() == userId) {
				return l;
			}
		}
		return null;
	}

	/**
	 * Clears database
	 */
	public void flush() {
		File f = new File(Config.DATABASE_LOANS);
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
