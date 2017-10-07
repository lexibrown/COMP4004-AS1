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

import com.comp4004.model.Loan;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;

public class LoanDatabase {

	private List<Loan> loans = null;

	public LoanDatabase() {
		loans = new ArrayList<Loan>();
	}

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
			this.loans = (List<Loan>) JsonUtil.parse(content, Loan.class);
		}
	}

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

	public List<Loan> getLoans() {
		return loans;
	}

	public void addLoan(Loan l) {
		this.loans.add(l);
		saveChanges();
	}

	public void deleteLoan(int ISBN, int copyNumber) {
		for (Loan l : this.loans) {
			if (l.getISBN() == ISBN && l.getCopyNumber() == copyNumber) {
				this.loans.remove(l);
				saveChanges();
				break;
			}
		}
	}

	public Loan findLoan(int ISBN, int copyNumber) {
		for (Loan l : this.loans) {
			if (l.getISBN() == ISBN && l.getCopyNumber() == copyNumber) {
				return l;
			}
		}
		return null;
	}

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
