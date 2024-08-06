import './index.css'

const AppItem = props => {
  const {appData} = props
  const {appName, imageUrl} = appData
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-class" />
      <h1>{appName}</h1>
    </li>
  )
}
export default AppItem
