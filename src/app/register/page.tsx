import Image from "next/image";

// Modules
import MainNav from "../../components/mainNav";
import styles from "./page.module.css";

export default function Register() {
    return (
        <div className="font-sans">
            <header className="bg-gray-50">
                <MainNav />
            </header>
            <main className="bg-gray-50 container mx-auto p-4 md:p-8 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Player Registration</h1>
                <form>
                    <div className={`${styles.formSection}`}>
                        <h2 className={`${styles.formSectionTitle}`}>Player Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="first-name">First Name</label>
                                <input className={`${styles.formInput}`} type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="last-name">Last Name</label>
                                <input className={`${styles.formInput}`} type="text" id="last-name" name="last-name" required />
                            </div>
                        </div>
                        <div className={`${styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`} htmlFor="birth-date">Date of Birth</label>
                            <input className={`${styles.formInput}`} type="date" id="birth-date" name="birth-date" required />
                        </div>
                        <div className={`${styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`} htmlFor="address">Address</label>
                            <input className={`${styles.formInput}`} id="address" name="address" type="text"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="school">School</label>
                                <input className={`${styles.formInput}`} type="text" id="school" name="school" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="grade-level">Grade Level</label>
                                <input className={`${styles.formInput}`} id="grade-level" name="grade-level" type="text" required />
                            </div>
                        </div>
                        <div className={`${styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`} htmlFor="teacher">Teacher</label>
                            <input className={`${styles.formInput}`} id="teacher" name="teacher" type="text"/>
                        </div>
                        <div className={`${styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`}>Youth T-shirt Size</label>
                            <div className={`flex flex-wrap items-center radioGroup`}>
                                <label><input name="tshirt-size" type="radio" value="xs"/> X-Small</label>
                                <label><input name="tshirt-size" type="radio" value="s"/> Small</label>
                                <label><input name="tshirt-size" type="radio" value="m"/> Medium</label>
                                <label><input name="tshirt-size" type="radio" value="l"/> Large</label>
                                <label><input name="tshirt-size" type="radio" value="xl"/> X-Large</label>
                                <label><input name="tshirt-size" type="radio" value="xxl"/> XX-Large</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className={`${styles.formSection}`}>
                            <h2 className={`${styles.formSectionTitle}`}>Parent/Guardian 1 Information</h2>

                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p1-first-name">First Name</label>
                                <input className={`${styles.formInput}`} id="p1-first-name" name="p1-first-name" type="text" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p1-last-name">Last Name</label>
                                <input className={`${styles.formInput}`} id="p1-last-name" name="p1-last-name" type="text" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p1-email">Email</label>
                                <input className={`${styles.formInput}`} id="p1-email" name="p1-email" type="email" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p1-phone">Phone</label>
                                <input className={`${styles.formInput}`} id="p1-phone" name="p1-phone" type="tel" required />
                            </div>
                        </div>

                        <div className={`${styles.formSection}`}>
                            <h2 className={`${styles.formSectionTitle}`}>Parent/Guardian 2 Information</h2>

                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p2-first-name">First Name</label>
                                <input className={`${styles.formInput}`} id="p2-first-name" name="p2-first-name" type="text" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p2-last-name">Last Name</label>
                                <input className={`${styles.formInput}`} id="p2-last-name" name="p2-last-name" type="text" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p2-email">Email</label>
                                <input className={`${styles.formInput}`} id="p2-email" name="p2-email" type="email" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="p2-phone">Phone</label>
                                <input className={`${styles.formInput}`} id="p2-phone" name="p2-phone" type="tel" required />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formSection}`}>
                        <h2 className={`${styles.formSectionTitle}`}>Medical Information</h2>

                        <div className={`${styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`} htmlFor="emergency-contact-name">Emergency Contact Name</label>
                            <input className={`${styles.formInput}`} id="emergency-contact-name" name="emergency-contact-name" type="text"/>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="emergency-contact-phone">Emergency Contact Phone Number</label>
                                <input className={`${styles.formInput}`} id="emergency-contact-phone" name="emergency-contact-phone" type="tel" required />
                            </div>
                            <div className={`${styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="relationship-to-child">Relationship to Child</label>
                                <input className={`${styles.formInput}`} id="relationship-to-child" name="relationship-to-child" type="tel" required />
                            </div>
                        </div>

                        <div className={`${styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`} htmlFor="medical-conditions">Medical conditions or allergies (optional)</label>
                            <textarea className={`${styles.formInput}`} id="medical-conditions" rows={3}></textarea>
                        </div>
                    </div>
                </form>
                
            </main>
        </div>
    );
}