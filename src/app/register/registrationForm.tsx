"use client";
import { useRouter } from 'next/navigation';

// imports
import styles from "./page.module.css";

export default function RegistrationForm() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formDataObj: Record<string, any> = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        try {
            const response = await fetch('/api/player', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataObj)
            });
            if (response.ok) {
                router.push('/register/success');
            } else {
                console.error('Failed to register player');
                alert('There was an error submitting the form. Please refresh the page and try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return <form onSubmit={handleSubmit}>
        <div className={`${styles.formSection}`}>
            <h2 className={`${styles.formSectionTitle}`}>Player Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="first_name">First Name</label>
                    <input className={`${styles.formInput}`} type="text" id="first_name" name="first_name" required />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="last_name">Last Name</label>
                    <input className={`${styles.formInput}`} type="text" id="last_name" name="last_name" required />
                </div>
            </div>
            <div className={`${styles.inputGroup}`}>
                <label className={`${styles.inputLabel}`} htmlFor="date_of_birth">Date of Birth</label>
                <input className={`${styles.formInput}`} type="date" id="date_of_birth" name="date_of_birth" required />
            </div>
            <div className={`${styles.inputGroup}`}>
                <label className={`${styles.inputLabel}`} htmlFor="address">Address</label>
                <input className={`${styles.formInput}`} id="address" name="address" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="school">School</label>
                    <input className={`${styles.formInput}`} type="text" id="school" name="school" required />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="grade_level">Grade Level</label>
                    <input className={`${styles.formInput}`} id="grade_level" name="grade_level" type="text" required />
                </div>
            </div>
            <div className={`${styles.inputGroup}`}>
                <label className={`${styles.inputLabel}`} htmlFor="teacher">Teacher</label>
                <input className={`${styles.formInput}`} id="teacher" name="teacher" type="text" />
            </div>
            <div className={`${styles.inputGroup}`}>
                <label className={`${styles.inputLabel}`}>Youth T-shirt Size</label>
                <div className={`flex flex-wrap items-center ${styles.radioGroup}`}>
                    <label><input name="shirt_size" type="radio" value="xs" /> X-Small</label>
                    <label><input name="shirt_size" type="radio" value="s" /> Small</label>
                    <label><input name="shirt_size" type="radio" value="m" /> Medium</label>
                    <label><input name="shirt_size" type="radio" value="L" /> Large</label>
                    <label><input name="shirt_size" type="radio" value="XL" /> X-Large</label>
                    <label><input name="shirt_size" type="radio" value="XXL" /> XX-Large</label>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${styles.formSection}`}>
                <h2 className={`${styles.formSectionTitle}`}>Parent/Guardian 1 Information</h2>

                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p1_first_name">First Name</label>
                    <input className={`${styles.formInput}`} id="p1_first_name" name="p1_first_name" type="text" required />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p1_last_name">Last Name</label>
                    <input className={`${styles.formInput}`} id="p1_last_name" name="p1_last_name" type="text" required />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p1_email">Email</label>
                    <input className={`${styles.formInput}`} id="p1_email" name="p1_email" type="email" required />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p1_phone">Phone</label>
                    <input className={`${styles.formInput}`} id="p1_phone" name="p1_phone" type="tel" required />
                </div>
            </div>

            <div className={`${styles.formSection}`}>
                <h2 className={`${styles.formSectionTitle}`}>Parent/Guardian 2 Information</h2>

                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p2_first_name">First Name</label>
                    <input className={`${styles.formInput}`} id="p2_first_name" name="p2_first_name" type="text" />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p2_last_name">Last Name</label>
                    <input className={`${styles.formInput}`} id="p2_last_name" name="p2_last_name" type="text" />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p2_email">Email</label>
                    <input className={`${styles.formInput}`} id="p2_email" name="p2_email" type="email" />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="p2_phone">Phone</label>
                    <input className={`${styles.formInput}`} id="p2_phone" name="p2_phone" type="tel" />
                </div>
            </div>
        </div>

        <div className={`${styles.formSection}`}>
            <h2 className={`${styles.formSectionTitle}`}>Medical Information</h2>

            <div className={`${styles.inputGroup}`}>
                <label className={`${styles.inputLabel}`} htmlFor="emergency_name">Emergency Contact Name</label>
                <input className={`${styles.formInput}`} id="emergency_name" name="emergency_name" type="text" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="emergency_phone">Emergency Contact Phone Number</label>
                    <input className={`${styles.formInput}`} id="emergency_phone" name="emergency_phone" type="tel" required />
                </div>
                <div className={`${styles.inputGroup}`}>
                    <label className={`${styles.inputLabel}`} htmlFor="emergency_relation">Relationship to Child</label>
                    <input className={`${styles.formInput}`} id="emergency_relation" name="emergency_relation" type="tel" required />
                </div>
            </div>

            <div className={`${styles.inputGroup}`}>
                <label className={`${styles.inputLabel}`} htmlFor="medical_conditions">Medical conditions or allergies (optional)</label>
                <textarea className={`${styles.formInput}`} id="medical_conditions" name="medical_conditions" rows={3}></textarea>
            </div>

            <div className="mt-6">
                <label className={`${styles.checkboxLabel}`}>
                    <input className={`${styles.formCheckbox} h-5 w-5 text-blue-600`} type="checkbox" name="emergency_care_consent" />
                    <span className="ml-2 text-sm text-gray-700"><strong>Authorization For Emergency Mecical Care</strong> <br/> I give permission for Rigby Free Soccer Club volunteers to seek emergency medical treatment for my child if I cannot be reached. I understand that I am responsible for any medical expenses incurred.</span>
                </label>

                <label className={`${styles.checkboxLabel}`}>
                    <input className={`${styles.formCheckbox} h-5 w-5 text-blue-600`} type="checkbox" name="liability_waiver" />
                    <span className="ml-2 text-sm text-gray-700"><strong>Liability Waiver - Medical Responsibility</strong> <br/> I acknowledge that Rigby Free Soccer Club does not provide health insurance coverage. I agree to assume full responsibility for any medical expenses incurred in participation in club activities.</span>
                </label>
            </div>
        </div>

        <div className={`${styles.formSection}`}>
            <h2 className={`${styles.formSectionTitle}`}>Permission/Liability Waiver</h2>

            <div className={`${styles.inputGroup}`}>
                <p className={`${styles.inputLabel}`}>May we photograph/video your child? Photos/images may be used on school and/or public displays, e.g. Facebook, website, newspaper articles.</p>
                <div className={`flex items-center ${styles.radioGroup}`}>
                    <label><input name="photo_permission" type="radio" value={"yes"} /> Yes</label>
                    <label><input name="photo_permission" type="radio" value={"no"} /> No</label>
                </div>
            </div>

            <div className={`${styles.inputGroup}`}>
                <p className={`${styles.inputLabel}`}>Are you interested in helping volunteer this year?</p>
                <div className={`flex items-center ${styles.radioGroup}`}>
                    <label><input name="volunteer_interest" type="radio" value={"yes"} /> Yes</label>
                    <label><input name="volunteer_interest" type="radio" value={"no"} /> No</label>
                </div>
            </div>

            <div className={`${styles.inputGroup}`}>
                <p className={`${styles.inputLabel}`}>Does your child have your permission to walk home alone after practice?</p>
                <div className={`flex items-center ${styles.radioGroup}`}>
                    <label><input name="walk_home_permission" type="radio" value={"yes"} /> Yes</label>
                    <label><input name="walk_home_permission" type="radio" value={"no"} /> No</label>
                </div>
            </div>

            <div className={`${styles.inputGroup}`}>
                <p className={`${styles.inputLabel}`}>Does you child have your permission to travel by district transportation to other schools for games/tournaments?</p>
                <div className={`flex items-center ${styles.radioGroup}`}>
                    <label><input name="travel_permission" type="radio" value={"yes"} /> Yes</label>
                    <label><input name="travel_permission" type="radio" value={"no"} /> No</label>
                </div>
            </div>

            <div className="mt-6">
                <label className={`${styles.checkboxLabel}`}>
                    <input className={`${styles.formCheckbox} h-5 w-5 text-blue-600`} type="checkbox" name="general_waiver_signed" />
                    <span className="ml-2 text-sm text-gray-700">I have chosen to allow my child, noted above, to participate in an after-school program in the Jefferson School District. I understand that the school district and its employees are not responsible for supervising my child. I also understand that I am responsible for any damages to school property or any injury to any person which my child may cause while participating in this program. In the event of an injury to my child while participating in soccer during the 2024-2025 school year, I also understand that this may happen. I promise not to bring a claim or lawsuit against the school district for any damages or injuries my child may suffer. This includes a waiver of any claims related to transportation to and from soccer games, or similar events.</span>
                </label>
            </div>

            <div className={`${styles.inputGroup} mt-6`}>
                <label className={`${styles.inputLabel}`} htmlFor="signature">Parent/Guardian Signature</label>
                <input className={`${styles.formInput}`} id="signature" name="signature" type="text" required />
            </div>
        </div>

        <div className="text-center mt-8">
            <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300 shadow-lg" type="submit">Submit</button>
        </div>
    </form>
}