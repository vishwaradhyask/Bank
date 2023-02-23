import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import "./app.scss"
import constants from './constants'
import LoadingMask from './components/common/loading_mask'
import Home from './components/home/home'
const { SET_LANG } = constants.app

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    let systemLang = ''
    try {
      // systemLang = window.navigator.systemLanguage || 'en'
      systemLang = 'en'
      const { setSystemLanguage } = this.props
      console.log('systemLang-- at calling:', systemLang)
      if (setSystemLanguage) setSystemLanguage(systemLang)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { LogIn, connectToNas, appStore } = this.props
    const {isLoading, isLoading2} = appStore
    return (
      <div className="app">
        {isLoading ? <LoadingMask text={<FormattedMessage id="COMMON_01" />} /> : null}
        {isLoading2 ? <LoadingMask text={<FormattedMessage id="COMMON_08" />} /> : null}
        <Home/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  appStore: state.App,
  LogIn: state.Login
})
const mapDispatchToProps = (dispatch) => ({
  // setSystemLanguage: systemLang => dispatch({ type: SET_LANG, systemLang }),
  connectToNas: () => dispatch({ type: logIn.connectedToNas() })
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(App));
