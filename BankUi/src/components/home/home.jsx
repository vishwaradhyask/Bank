import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import './home.scss'
class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'vishwa'
    }

  }


  render() {
    console.log('this.props:', this.props)
    console.log('this.props:', this.state)
    return (
      <div className='home-page' >
        this is home 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
app:   state.App,
WindowManager: state.WindowManager,
MultiLang: state.MultiLang,
RecoveryMedia: state.RecoveryMedia,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(home)
