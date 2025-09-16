import Image from "next/image";

// Modules
import MainNav from "../../components/mainNav";
import styles from "./page.module.css";

export default function Register() {
    return (
        <div className="font-sans">
            <header>
                <MainNav />
            </header>
            <main className="bg-gray-50 container mx-auto p-4 md:p-8 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Player Registration</h1>
                <form>
                    <div className={`${styles.formSection}`}>
                        <h2 className={`${styles.formSectionTitle}`}>Player Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`{styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="first-name">First Name</label>
                                <input className={`${styles.formInput}`} type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className={`{styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="first-name">First Name</label>
                                <input className={`${styles.formInput}`} type="text" id="first-name" name="first-name" required />
                            </div>
                        </div>
                        <div className={`{styles.inputGroup}`}>
                            <label className={`${styles.inputLabel}`} htmlFor="birth-date">Date of Birth</label>
                            <input className={`${styles.formInput}`} type="date" id="birth-date" name="birth-date" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`{styles.inputGroup}`}>
                                <label className={`${styles.inputLabel}`} htmlFor="school">School</label>
                                <input className={`${styles.formInput}`} type="text" id="school" name="school" required />
                            </div>
                        </div>
                    </div>
                </form>
                
            </main>
        </div>
    )
}