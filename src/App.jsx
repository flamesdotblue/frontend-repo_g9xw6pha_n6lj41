import { Provider, useSelector } from 'react-redux'
import store from './store'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import UserInfo from './components/UserInfo'
import Footer from './components/Footer'

function Content() {
  const isLoggedIn = useSelector((s) => s.auth.isLoggedIn)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 gap-6">
          {!isLoggedIn ? (
            <LoginForm />
          ) : (
            <UserInfo />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  )
}
