import { SignUp } from "@clerk/nextjs";
import styles from "../../page.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.signins}>
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        afterSignUpUrl="/new-user"
        redirectUrl="/new-user"
      />
    </div>
  );
};

export default SignUpPage;

// path="/sign-up"
// signInUrl="/sign-in"
// afterSignUpUrl="/new-user"
// redirectUrl="/new-user"
