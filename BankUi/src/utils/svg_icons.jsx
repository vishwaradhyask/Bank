/* eslint-disable max-len */
import * as React from 'react'

import EmailCustmizeSVG from '../imgs/customize_mail.svg'
import SMSCustmizeSVG from '../imgs/customize_sms.svg'
import IMCustmizeSVG from '../imgs/customize_mobileapp.svg'
import PushCustmizeSVG from '../imgs/customize_push.svg'
import SendTestSVG from '../imgs/action_test.svg'
import SearchSVG from '../imgs/action_search.svg'
import InputDelete from '../imgs/input_delete.svg'
import CheckboxOn from '../imgs/checkbox_on.svg'
import CheckboxOff from '../imgs/checkbox_off.svg'
import Step1 from '../imgs/wizard_step1.svg'
import Step2 from '../imgs/wizard_step2.svg'
import Step3 from '../imgs/wizard_step3.svg'
import Step4 from '../imgs/wizard_step4.svg'
import DownArrowSVG from '../imgs/down_arrow.svg'
import UpArrowSVG from '../imgs/down_arrow_close.svg'
import AddRoundButtonSVG from '../imgs/add_round_normal.svg'
import AboutSVG from '../imgs/frameset_about.svg'
import RuleSystem from '../imgs/rulesetting_system.svg'
import RuleLog from '../imgs/rulesetting_log.svg'
import Qbot from '../imgs/ic_qbot.svg'
import Wizard_Step_Select_VM from '../imgs/icon_fill_wz_select_vm.svg'
import Wizard_Step_Schedule from '../imgs/icon_fill_wz_schedule.svg'
import Wizard_Step_Rules from '../imgs/icon_fill_wz_rules.svg'
import Wizard_Step_Summary from '../imgs/icon_fill_wz_summary.svg'

export const ChannelIcon = {
  email: EmailCustmizeSVG,
  sms: SMSCustmizeSVG,
  im: IMCustmizeSVG,
  push: PushCustmizeSVG,
}

export const Normal = {
  SendTestSVG: SendTestSVG,
  checkboxOn: CheckboxOn,
  checkboxOff: CheckboxOff,
  about: AboutSVG,
  qbot: Qbot,
}

export const Action = {
  search: SearchSVG,
  sendTest: SendTestSVG,
  inputDelte: InputDelete,
}

export const Button = {
  addRoundButton: AddRoundButtonSVG,
}

export const WizardStep = {
  step1: Step1,
  step2: Step2,
  step3: Step3,
  step4: Step4,
}

export const Navigation = {
  ruleSystem: RuleSystem,
  ruleLog: RuleLog,
}

export const Arrow = {
  DownArrowSVG: DownArrowSVG,
  UpArrowSVG: UpArrowSVG
}

export const BackupWizardStep = {
  step1: Wizard_Step_Select_VM,
  step2: Wizard_Step_Schedule,
  step3: Wizard_Step_Rules,
  step4: Wizard_Step_Summary,
}

export const RestoreWizardStep = {
  selectVM: Wizard_Step_Select_VM,
  schedule: Wizard_Step_Schedule,
  summary: Wizard_Step_Summary,
  rules: Wizard_Step_Rules,
}

/**
 * viewBox - view box size
 * svgPath - production path include id, ex: './imgs/action_resend.svg#action_resend'
 * @param  {string} viewBox             view box size
 * @param  {string} svgPath             svg production path
 * @param  {string} className?          svg class name
 * @param  {React.CSSProperties} style? ''
 * @return {SVGElement}                            ''
 */
export const getUseSVG = (viewBox, svgPath, className, style) => <svg viewBox={viewBox} className={className} style={style}><use xlinkHref={svgPath} /></svg>
