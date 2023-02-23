import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import Bank_head from '../../images/bank_head.png'
import User_png from '../../images/user .png'
import './home.scss'
class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'vishwa'
    }

  }


  render() {
    console.log('this.props:', this.props)
    console.log('this.props:', this.state)
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
            <div style={{ border: 'black solid 0.5px', width: '65%', display:'flex' }}>
              <div className='username-icon'>
                <img src={User_png} alt='User_png' />
              </div>
              <div className='usrname-input'>
                <input type="text" placeholder='Enter User Name' />
              </div>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(home)
