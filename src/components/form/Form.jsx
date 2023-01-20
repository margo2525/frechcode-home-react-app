import React, { Component } from "react";
import classNames from "classnames";

import styles from './form.module.css'
import { SlNote } from "react-icons/sl";


const INITIAL_VALUES = {
  userName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  isAgree: false,
};
const LOGIN_FORM_REX_EXP = {
  userName: /^(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
  passwordConfirmation:
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
  isAgree: /^(true)$/,
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: INITIAL_VALUES.userName,
      isUserNameValid: false,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
      showPassword: false,
      passwordConfirmation: INITIAL_VALUES.passwordConfirmation,
      isPasswordConfirmationValid: false,
      showPasswordConfirmation: false,
      isAgree: false,
      isIsAgreeValid: false,
      passwordsEqual: false,
    };
  }

  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const obj = {
      [name]: value,
      ["is" + this.capitalize(name) + "Valid"]:
        LOGIN_FORM_REX_EXP[name].test(value),
    };

    if (name === "passwordConfirmation") {
      obj.isPasswordConfirmationValid =
        obj.isPasswordConfirmationValid && this.state.password === value;
    }

    if (name === "password") {
      obj.isPasswordConfirmationValid =
        this.state.passwordConfirmation === value;
    }

    this.setState(obj);
    console.log("obj", obj);
  };

  handleShowPassword = (event) => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleShowPasswordConfirmation = (event) => {
    this.setState({
      showPasswordConfirmation: !this.state.showPasswordConfirmation,
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    // send request
    this.setState(INITIAL_VALUES);
  };

  render() {
    const {
      userName,
      isUserNameValid,
      email,
      isEmailValid,
      password,
      isPasswordValid,
      passwordConfirmation,
      isPasswordConfirmationValid,
      isAgree,
      isIsAgreeValid,
      showPassword,
      showPasswordConfirmation,
      passwordsEqual,
    } = this.state;

    const userNameClassName = classNames(styles.input, {
      [styles.inputValid]: isUserNameValid,
      [styles.inputInvalid]: !isUserNameValid,
    });

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });

    const passwordConfirmationClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordConfirmationValid,
      [styles.inputInvalid]: !isPasswordConfirmationValid,
    });

    const checkboxClassName = classNames(styles.input, {
      [styles.inputValid]: isIsAgreeValid,
      [styles.inputInvalid]: !isIsAgreeValid,
    });
    return (
      <div className='header'>
        <div className="formInfo">
          <div className="form__content">
            <div className='ikon'><SlNote /></div>
            <h2>Регистрация</h2>
            <p>Create Your Account</p>

            <div className="form__field error">
              <label className={styles.input}>
                <span className={styles.inputName}>FULL NAME</span>
                <input
                  className={userNameClassName}
                  type="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={userName}
                  onChange={this.handleInputChange}

                  autoFocus
                />
              </label>


            </div>
            <div className="form__field">
              <label className={styles.label}>
                <svg className="check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z" />
                </svg>
                <span className={styles.inputName}>Email Address</span>
                <input
                  className={emailClassName}

                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={this.handleInputChange}

                  autoFocus
                />
              </label>

            </div>




            <div className="form__field">
              <label className={styles.label}>
                <svg className="eye" height="24px" viewBox="0 0 24 24" width="24px">
                  <path d="M21.821,12.43c-0.083-0.119-2.062-2.944-4.793-4.875C15.612,6.552,13.826,6,12,6c-1.825,0-3.611,0.552-5.03,1.555  c-2.731,1.931-4.708,4.756-4.791,4.875c-0.238,0.343-0.238,0.798,0,1.141c0.083,0.119,2.06,2.944,4.791,4.875  C8.389,19.448,10.175,20,12,20c1.826,0,3.612-0.552,5.028-1.555c2.731-1.931,4.71-4.756,4.793-4.875  C22.06,13.228,22.06,12.772,21.821,12.43z M12,16.5c-1.934,0-3.5-1.57-3.5-3.5c0-1.934,1.566-3.5,3.5-3.5c1.93,0,3.5,1.566,3.5,3.5  C15.5,14.93,13.93,16.5,12,16.5z" />
                  <g>
                    <path d="M14,13c0,1.102-0.898,2-2,2c-1.105,0-2-0.898-2-2c0-1.105,0.895-2,2-2C13.102,11,14,11.895,14,13z" />
                  </g>
                </svg>
                <span className={styles.inputName}>Password</span>
                <input
                  className={passwordClassName}
                  type={showPassword ? "text" : "password"}

                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
              </label>


            </div>
            <div className="form__field">
              <label className={styles.label}>
                <svg className="eye" height="24px" viewBox="0 0 24 24" width="24px">
                  <path d="M21.821,12.43c-0.083-0.119-2.062-2.944-4.793-4.875C15.612,6.552,13.826,6,12,6c-1.825,0-3.611,0.552-5.03,1.555  c-2.731,1.931-4.708,4.756-4.791,4.875c-0.238,0.343-0.238,0.798,0,1.141c0.083,0.119,2.06,2.944,4.791,4.875  C8.389,19.448,10.175,20,12,20c1.826,0,3.612-0.552,5.028-1.555c2.731-1.931,4.71-4.756,4.793-4.875  C22.06,13.228,22.06,12.772,21.821,12.43z M12,16.5c-1.934,0-3.5-1.57-3.5-3.5c0-1.934,1.566-3.5,3.5-3.5c1.93,0,3.5,1.566,3.5,3.5  C15.5,14.93,13.93,16.5,12,16.5z" />
                  <g>
                    <path d="M14,13c0,1.102-0.898,2-2,2c-1.105,0-2-0.898-2-2c0-1.105,0.895-2,2-2C13.102,11,14,11.895,14,13z" />
                  </g>
                </svg>
                <span className={styles.inputName}>Password</span>
                <input
                  className={passwordConfirmationClassName}
                  type={showPasswordConfirmation ? "text" : "password"}
                  name="passwordConfirmation"
                  placeholder="password confirmation"
                  value={passwordConfirmation}
                  onChange={this.handleInputChange}

                />
              </label>


            </div>

            <div className="form__additional">
              <div>
                <input class="styled-checkbox" id="checkbox" type="checkbox" value="value1"
                  className={checkboxClassName}
                />
                <label for="checkbox">I agree all statements in terms of service</label>
              </div>

            </div>

            <button>Sign Up</button>
            <p>I'm already a member! <a data-toggle="tab" href="#signin">Sign In</a></p>

          </div>
        </div>
      </div>

    );
  }
}


