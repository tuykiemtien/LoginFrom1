import React from 'react';
import styles from "./Form.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      account: '',
      passowrd: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
    this.handleUserInput=this.handleUserInput.bind(this);

  }
  handleUserInput (e){
    const name=e.target.name;
    const value=e.target.value;
    this.setState({[name]:value},()=>{this.validateField(name,value) });
  }
  validateField(fieldName,value){
    let fieldValidationErrors=this.state.formErrors;
    let accountValid=this.state.accountValid;
    let passwordValid=this.state.passwordValid;
    switch (fieldName) {
      case 'account':
          accountValid=value.length>=6;
          fieldValidationErrors.account=accountValid?'':'is too short';
          break;
      case 'password':
        passwordValid=value.length>=6;
        fieldValidationErrors.password=passwordValid?'':'is too short';
        break;
        break;
      default:
        break;
    }
    this.setState({formErrors:fieldValidationErrors,
                    accountValid:accountValid,
                  passwordValid: passwordValid},this.validateForm);
  }
  validateForm(){
    this.setState({formValid:this.state.accountValid&&this.state.passwordValid});
  }
  errorClass(error){
    return(error.length===0?'':'has-error');
  }

  render(){
    return(
      <form className="loginForm">
        <h2>Đăng nhập hệ thống quản lý</h2>
        <p>Nhập tài khoản của bạn dưới đây</p>
        <div className="accountForm">
          <label htmlFor="account">Account    </label>
          <input type="text" className="account" name="account"
              placeholder="Account" value={this.state.account} onChange={this.handleUserInput}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" className="account" name="password"
              placeholder="Password" value={this.state.password} onChange={this.handleUserInput} />
        </div>
        <button type="submit" className="signUpButton">Sign up</button>

        <div><a href="#">Quên mật khẩu?</a></div>
      </form>
    )
  }
}
export default App;
