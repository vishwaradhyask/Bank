import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import Bank_head from '../../images/bank_head.png'
import User_png from '../../images/user .png'
import Password_png from '../../images/password.png'
import {PopupActions, DialogType} from "react-custom-popup";
import './home.scss'
// const alert = useAlert();
class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',

    }

  }

  handleUserOnchnage = (e) => {
    console.log('user enterd: ', e.target.value)
    this.setState({
      username: e.target.value
    })

  }
  hanglePasswordOnchange = (e) => {
    this.setState({
      password: e.target.value
    })

  }
  loginvalidation = () => {
    const { username, password } = this.state
    if (username == '') {
      PopupActions.showAlert({title:"Bank", text: 'Username can not empty!!', type: DialogType.WARNING})
    }
    if (password == '') {
      PopupActions.showAlert({title:"Bank", text: 'Password can not empty!!', type: DialogType.WARNING})
    }
  }

  handleHidePop = () =>{
    this.setState({
      popmsg: "",
      pop: false
    })
  }

  render() {
    console.log('this.props:', this.props)
    console.log('this.state user:', this.state.username)
    console.log('this.state password:', this.state.password)
    return (
      <div className='home-page' >
        <div className='log-in'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='bank-head-icon'>
              <img src={Bank_head} alt="Bank_head" />
            </div>
          </div>
          <div className='welcometxt'>
            <h1 >Welcome to Gulbarga Bank</h1>
          </div>
          <div className='user-name'>
            <div style={{ border: 'black solid 0.5px', width: '65%', display: 'flex' }}>
              <div className='username-icon'>
                <img src={User_png} alt='User_png' />
              </div>
              <div className='usrname-input'>
                <input onChange={this.handleUserOnchnage} type="text" placeholder='Enter User Name' />
              </div>
            </div>
          </div>
          <div className='password-main'>
            <div className='pass-div'>
              <div className='password-icon'>
                <img src={Password_png} alt='password_png' />
              </div>
              <div className='password-input'>
                <input onChange={this.hanglePasswordOnchange} type="password" placeholder='Enter Password' />
              </div>
            </div>
          </div>
          <div className='forget-main'>
            <button>Forget Password?</button>
          </div>
          <div className='login-main'>
            <button onClick={this.loginvalidation}>Login</button>
          </div>
          <div className='signup-main'>
            <div className='account'>
              dont have account ?
            </div>
            <div className='signupbtn'>
              <button>SIGN UP</button>
            </div>
            <div className='account'>here</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.App,
  WindowManager: state.WindowManager,
  MultiLang: state.MultiLang,
  RecoveryMedia: state.RecoveryMedia,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(home) 
