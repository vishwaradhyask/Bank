/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-template */
import * as React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
// import { NCState } from "../../../reducers";

const style = {
  div: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    // position: 'absolute',
    position: 'fixed',
    zIndex: 99999,
    display: 'flex',
    justifyContent: 'center',
    msFlexPack: 'center',
    alignItems: 'center',
    msFlexAlign: 'center',
  },
  loadingIcon: {
    width: 24/16 +'rem',
    height: 24/16 +'rem',
    top: '1.5rem',
    marginLeft: '25px',
    backgroundImage: 'url(imgs/loading_30.svg)',
  },
  loadingItem: {
    border: '1px solid #ffffff',
    backgroundColor: 'rgba(50,50,55,0.9)',
    padding: '24px',
  },
  loadingItemContent: {
    background: 'none',
    border: 'none',
    padding: '0',
    fontSize: '16px',
    color: '#ffffff',
    paddingLeft: '10px',
  },
}

class LoadingMask extends React.PureComponent {
  render() {
    let { isTransparent, lang, noMsg, text, over, intl } = this.props
    const overStyle = over ? { zIndex: 999 } : {}
    return (
      <div style={{ ...style.div, ...overStyle, ...(isTransparent?{backgroundColor: 'transparent'}:{backgroundColor: 'rgba(0,0,0,0.4)'}) }}>
        {noMsg?null:
        <div className="qcss-message-item qcss-mask-loading" style={style.loadingItem}>
          <div className="qcss-message-item-detial">
            <div className="qcss-message-loading-icon" style={style.loadingIcon} />
            {/* <div className="qcss-message-item-content">{text ? text : lang.NCSC_103}</div> */}
            <div className="qcss-message-item-content" style={style.loadingItemContent}>{text ? text : intl.formatMessage({ id: "COMMON_01" })}</div>
          </div>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  // lang: state.Language.strings
})

export default connect(mapStateToProps)(injectIntl(LoadingMask))
// export default LoadingMask
