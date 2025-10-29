import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../authSlice'
import { User, LogOut } from 'lucide-react'

export default function Header() {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state) => state.auth)

  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">A</span>
          <h1 className="text-lg font-semibold text-gray-800">Auth Mock</h1>
        </div>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <User size={18} />
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <button
                onClick={() => dispatch(logout())}
                className="inline-flex items-center gap-1 rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-gray-800 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <p className="text-sm text-gray-600">Not signed in</p>
          )}
        </div>
      </div>
    </header>
  )
}
