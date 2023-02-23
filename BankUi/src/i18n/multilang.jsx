import React, { useEffect } from 'react'
import { connect, useDispatch} from 'react-redux'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import recoveryAction from '../actions/recoveryMedia'

const MultiLang = (props) => {
  const { appStore, children } = props
  const { lang, langStr } = appStore
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(recoveryAction.getLanguage())
  }, [])

  // console.log('app', appStore)

  return (
    <IntlProvider
      locale={lang}
      defaultLocale="en"
      key={lang}
      messages={langStr}
    >
      {children}
    </IntlProvider>
  )
}

MultiLang.propTypes = {
  children: PropTypes.element.isRequired,
  appStore: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    langStr: PropTypes.object.isRequired,
  }),
}

MultiLang.defaultProps = {
  appStore: {
    lang: '',
    langStr: {},
  },
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  appStore: state.App,
})

export default connect(mapStateToProps)(MultiLang)
