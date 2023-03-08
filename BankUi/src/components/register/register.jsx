import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { PopupActions, DialogType } from "react-custom-popup";
import appAction from '../../actions/app'

import './register.scss'
// const alert = useAlert();
class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      user_name: '',
      password: '',
      confirm_password: '',
      email: '',
      phone_number: '',
      hint: '',
      checkbox: false,
    }

  }

  handleonChange = (e, type) => {
    console.log('type', type)
    console.log('e', e.target.value)
    if (type === 'fn') {
      this.setState({
        first_name: e.target.value
      })
    }

    if (type === 'ln') {
      this.setState({
        last_name: e.target.value
      })
    }

    if (type === 'usr') {
      this.setState({
        user_name: e.target.value
      })
    }

    if (type === 'pwd') {
      this.setState({
        password: e.target.value
      })
    }

    if (type === 'cnf-pwd') {
      this.setState({
        confirm_password: e.target.value
      })
    }

    if (type === 'email') {
      this.setState({
        email: e.target.value
      })
    }

    if (type === 'phone') {
      this.setState({
        phone_number: e.target.value
      })
    }

    if (type === 'hint') {
      this.setState({
        hint: e.target.value
      })
    }
    if(type === 'check'){
      const {checkbox} = this.state
      this.setState({
        checkbox: !checkbox
      })
    }
  }

  handleRegister = () => {
    const { first_name, last_name, user_name, password, confirm_password, email, phone_number, hint, checkbox } = this.state
    if (first_name === '') {
      PopupActions.showAlert({ title: "Bank", text: 'First name can not empty!!', type: DialogType.WARNING })
      return
    }
    if (last_name === '') {
      PopupActions.showAlert({ title: "Bank", text: 'Last name can not empty!!', type: DialogType.WARNING })
      return
    }
    if (user_name === '') {
      PopupActions.showAlert({ title: "Bank", text: 'User name can not empty!!', type: DialogType.WARNING })
      return
    }
    if (password === '') {
      PopupActions.showAlert({ title: "Bank", text: 'Password name can not empty!!', type: DialogType.WARNING })
      return
    }
    if (confirm_password === '') {
      PopupActions.showAlert({ title: "Bank", text: 'Confirm password name can not empty!!', type: DialogType.WARNING })
      return
    }
    if (password !== confirm_password) {
      PopupActions.showAlert({ title: "Bank", text: 'password and Confirm password are not same!', type: DialogType.WARNING })
      return
    }
    if (email === '') {
      PopupActions.showAlert({ title: "Bank", text: 'Email Id can not empty!!', type: DialogType.WARNING })
      return
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      PopupActions.showAlert({ title: "Bank", text: 'Invalid email id!', type: DialogType.WARNING })
      return
    }
    if (phone_number === '') {
      PopupActions.showAlert({ title: "Bank", text: 'Phone Number can not empty!!', type: DialogType.WARNING })
      return
    }
    if (phone_number.length !== 10 || isNaN(phone_number)) {
      PopupActions.showAlert({ title: "Bank", text: 'Invalid Phone Number!', type: DialogType.WARNING })
      return
    }
    if (hint === '') {
      PopupActions.showAlert({ title: "Bank", text: 'hint can not empty!!', type: DialogType.WARNING })
    }
    if(!checkbox){
      PopupActions.showAlert({ title: "Bank", text: 'Please accept Terms and policy!', type: DialogType.WARNING })
    }
  }

  handleLogin = () => {
    const { setCmp } = this.props
    setCmp('login')
  }
  render() {
    console.log('this.state:', this.state)
    return (
      <div className='register' >
        <div className='reg-body'>
          <div className='head'>
            <div>
              <hr />
            </div>
            <div>
              <h1>Register</h1>
            </div>
            <div>
              <hr />
            </div>
          </div>
          <div className='fn-lm'>
            <div className='first-name'>
              <input onChange={(e) => this.handleonChange(e, 'fn')} placeholder='First Name' type="text" />
            </div>
            <div>
              <input onChange={(e) => this.handleonChange(e, 'ln')} placeholder='Last Name' type="text" />
            </div>
          </div>
          <div className='cmn-1'>
            <input onChange={(e) => this.handleonChange(e, 'usr')} placeholder='Username' type="text" />
          </div>
          <div className='cmn-1'>
            <input onChange={(e) => this.handleonChange(e, 'pwd')} placeholder='password' type="password" />
          </div >
          <div className='cmn-1'>
            <input onChange={(e) => this.handleonChange(e, 'cnf-pwd')} placeholder='confirm password' type="password" />
          </div>
          <div className='cmn-1'>
            <input onChange={(e) => this.handleonChange(e, 'email')} placeholder='email id' type="email" />
          </div>
          <div className='cmn-1'>
            <input onChange={(e) => this.handleonChange(e, 'phone')} placeholder='phone number' type="text" />
          </div>
          <div className='cmn-1'>
            <input onChange={(e) => this.handleonChange(e, 'hint')} type="text" placeholder='hint' />
          </div>
          <div className='cmn-1 note'>
            Note: Hint used to reset the password please remember it
          </div>
          <div className='terms'>
            <div>
              <input value={this.state.checkbox} type="checkbox" onClick={(e) => this.handleonChange(e, 'check')} />
            </div>
            <div>
              I accept the Terms of Use and Privacy Policy
            </div>
          </div>
          <div className='register-btn'>
            <div style={{marginRight: '10px'}}>
              <button  onClick={this.handleRegister}>Register Now</button>
            </div>
            <div>
              <button  onClick={this.handleLogin}>Cancel</button>
            </div>
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
  setCmp: (data) => dispatch(appAction.setCmp(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(register) 
