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
                            <div className={`flex flex-wrap items-center ${styles.radioGroup}`}>
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

                        <div className="mt-6">
                            <label className={`${styles.checkboxLabel}`}>
                                <input className={`${styles.formCheckbox} h-5 w-5 text-blue-600`} type="checkbox" />
                                <span className="ml-2 text-sm text-gray-700"><strong>Authorization For Emergency Mecical Care</strong> <br/> I give permission for Rigby Free Soccer Club volunteers to seek emergency medical treatment for my child if I cannot be reached. I understand that I am responsible for any medical expenses incurred.</span>
                            </label>

                            <label className={`${styles.checkboxLabel}`}>
                                <input className={`${styles.formCheckbox} h-5 w-5 text-blue-600`} type="checkbox" />
                                <span className="ml-2 text-sm text-gray-700"><strong>Liability Waiver - Medical Responsibility</strong> <br/> I acknowledge that Rigby Free Soccer Club does not provide health insurance coverage. I agree to assume full responsibility for any medical expenses incurred in participation in club activities.</span>
                            </label>
                        </div>
                    </div>

                    <div className={`${styles.formSection}`}>
                        <h2 className={`${styles.formSectionTitle}`}>Permission/Liability Waiver</h2>

                        <div className={`${styles.inputGroup}`}>
                            <p className={`${styles.inputLabel}`}>May we photograph/video your child? Photos/images may be used on school and/or public displays, e.g. Facebook, website, newspaper articles.</p>
                            <div className={`flex items-center ${styles.radioGroup}`}>
                                <label><input name="photo-permission" type="radio" value={"yes"} /> Yes</label>
                                <label><input name="photo-permission" type="radio" value={"no"} /> No</label>
                            </div>
                        </div>

                        <div className={`${styles.inputGroup}`}>
                            <p className={`${styles.inputLabel}`}>Are you interested in helping volunteer this year?</p>
                            <div className={`flex items-center ${styles.radioGroup}`}>
                                <label><input name="volunteer" type="radio" value={"yes"} /> Yes</label>
                                <label><input name="volunteer" type="radio" value={"no"} /> No</label>
                            </div>
                        </div>

                        <div className={`${styles.inputGroup}`}>
                            <p className={`${styles.inputLabel}`}>Does your child have your permission to walk home alone after practice?</p>
                            <div className={`flex items-center ${styles.radioGroup}`}>
                                <label><input name="walk-home" type="radio" value={"yes"} /> Yes</label>
                                <label><input name="walk-home" type="radio" value={"no"} /> No</label>
                            </div>
                        </div>

                        <div className={`${styles.inputGroup}`}>
                            <p className={`${styles.inputLabel}`}>Does you child have your permission to travel by district transportation to other schools for games/tournaments?</p>
                            <div className={`flex items-center ${styles.radioGroup}`}>
                                <label><input name="travel" type="radio" value={"yes"} /> Yes</label>
                                <label><input name="travel" type="radio" value={"no"} /> No</label>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className={`${styles.checkboxLabel}`}>
                                <input className={`${styles.formCheckbox} h-5 w-5 text-blue-600`} type="checkbox" />
                                <span className="ml-2 text-sm text-gray-700">I have chosen to allow my child, noted above, to participate in an after-school program in the Jefferson School District. I understand that the school district and its employees are not responsible for supervising my child. I also understand that I am responsible for any damages to school property or any injury to any person which my child may cause while participating in this program. In the event of an injury to my child while participating in soccer during the 2024-2025 school year, I also understand that this may happen. I promise not to bring a claim or lawsuit against the school district for any damages or injuries my child may suffer. This includes a waiver of any claims related to transportation to and from soccer games, or similar events.</span>
                            </label>
                        </div>

                        <div className={`${styles.inputGroup} mt-6`}>
                            <label className={`${styles.inputLabel}`} htmlFor="signature">Parent/Guardian Signature</label>
                            <input className={`${styles.formInput}`} id="signature" type="text" />
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300 shadow-lg" type="submit">Submit</button>
                    </div>
                </form>
                
            </main>
        </div>
    );
}