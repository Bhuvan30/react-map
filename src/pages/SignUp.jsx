import { useEffect, useState } from "react";
import PageNav from "../components/PageNav/PageNav";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
function SignIn() {
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <PageNav />
      <main className={styles.signUp}>
        <form className={styles.form} onSubmit={handelSubmit}>
          <div className={styles.row}>
            <label htmlFor="text">Name</label>
            <input type="text" />
          </div>
          <div className={styles.row}>
            <label htmlFor="password">Phone No</label>
            <input type="tel" />
          </div>
          <div className={styles.row}>
            <label htmlFor="password">City Name</label>
            <input type="text" />
          </div>

          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" />
          </div>

          <div className={(styles.row, styles.perti)}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div>
            <Button type="primary">Sign In</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignIn;
