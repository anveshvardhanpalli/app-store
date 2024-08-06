// Write your code here

import './index.css'

const TabItem = props => {
  const {text, changeTab, isActive} = props
  const {displayText, tabId} = text
  const tabClass = isActive ? 'active-tab' : 'non-active-tab'
  const onClickChangeTab = () => {
    changeTab(tabId)
  }
  return (
    <li>
      <button type="button" onClick={onClickChangeTab} className={tabClass}>
        {displayText}
      </button>
      <hr className={tabClass} />
    </li>
  )
}

export default TabItem
