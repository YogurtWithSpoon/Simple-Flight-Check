import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSlice";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";
function Login() {
  let [form, setForm] = useState({ email: "", password: "" });
  let [formErrors, setFormErrors] = useState({ email: "", password: "" });
  let [emailValid, setEmailValid] = useState(false);
  let [passwordValid, setPasswordValid] = useState(false);
  let [formValid, setFormValid] = useState(false);
  const correctUser = useSelector(selectAuth);
  let history = useHistory();

  useEffect(() => {
    // Проверка записи о входе
    let auth = localStorage.getItem("auth");
    if (auth) {
      history.push("/flights");
    }
  }, []);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Значения с формы
    let { email, password } = form;
    // Значения захардкоженного зарегистрированного пользователя из Redux Store
    let { email: correctEmail, password: correctPassword } = correctUser;
    // Если значения совпадают
    if (email === correctEmail && password === correctPassword) {
      console.log("you are welcome");
      localStorage.setItem("auth", JSON.stringify({ email, password }));
      history.push("/flights");
    } else {
      // указываем текст ошибки
      setFormErrors({
        email: "Неверное имя пользователя",
        password: "или пароль",
      });
    }
    setForm({ email: "", password: "" });
  };

  function validateField(fieldName, value) {
    let fieldValidationErrors = formErrors;
    let currentEmailValid = emailValid;
    let currentPasswordValid = passwordValid || false;
    switch (fieldName) {
      case "email":
        currentEmailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || false;
        fieldValidationErrors.email = currentEmailValid
          ? ""
          : "Укажите верный формат почты";
        break;
      case "password":
        // собираем текст ошибки если они есть
        let errors = [];
        let passwordShort = value.length < 8;
        let CyrillicPassword = value.match(/[а-яё]/i) || false;
        if (passwordShort) {
          errors.push("меньше 8 символов");
        }
        if (CyrillicPassword) {
          errors.push("содержит кирилицу");
        }
        currentPasswordValid = !passwordShort && !CyrillicPassword;
        // Чтобы отобразить ошибки вместе соединениям
        fieldValidationErrors.password = errors.join(" и ");
        break;
      default:
        break;
    }
    // Устанавливаем значения состояния формы
    setEmailValid(currentEmailValid);
    setPasswordValid(currentPasswordValid);
    setFormErrors(fieldValidationErrors);
    setFormValid(currentEmailValid && currentPasswordValid);
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginform} onSubmit={submitHandler}>
        <h2 className={styles.loginform_title}>Simple Flight Check</h2>
        <div
          className={`${styles.loginform_section} ${
            formErrors.email.length === 0 ? "" : styles.loginform_error
          }`}
        >
          <label htmlFor="login">Логин:</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            autoComplete="off"
            value={form.email}
            onChange={inputHandler}
            className={`${styles.loginform_input} ${
              formErrors.email.length === 0 ? "" : styles.loginform_error
            }`}
          />
          {formErrors.email.length !== 0 && (
            <span className={styles.loginform_error}>{formErrors.email}</span>
          )}
        </div>
        <div
          className={`${styles.loginform_section} ${
            formErrors.password.length === 0 ? "" : styles.loginform_error
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            value={form.password}
            onChange={inputHandler}
            autoComplete="off"
            name="password"
            className={`${styles.loginform_input} ${
              formErrors.password.length === 0 ? "" : styles.loginform_error
            }`}
          />
          {formErrors.password.length !== 0 && (
            <span className={styles.loginform_error}>
              {formErrors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={!formValid}
          className={styles.button}
          style={{ alignSelf: "flex-end" }}
        >
          Войти
        </button>
      </form>
      <div className={styles.bg_image} />
    </div>
  );
}

export default Login;
