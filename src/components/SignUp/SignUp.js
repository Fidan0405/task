import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h2 className={styles.registrationHeader}>Registration Form</h2>
                <form>
                    <div className={styles.inputField}>
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputField}>
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputField}>
                        <label>Phone</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputField}>
                        <label>Company</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputField}>
                        <label>Company Adress</label>
                        <input type="text" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
