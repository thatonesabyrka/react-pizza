import { Header } from './components/Header'
import { Outlet } from 'react-router'

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
