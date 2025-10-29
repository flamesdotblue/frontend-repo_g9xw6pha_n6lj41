import { useSelector, useDispatch } from 'react-redux'
import { updateUser, logout } from '../authSlice'
import { useState } from 'react'
import { User, Pencil, LogOut } from 'lucide-react'

export default function UserInfo() {
  const dispatch = useDispatch()
  const user = useSelector((s) => s.auth.user)
  const [name, setName] = useState(user?.name || '')

  const onUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser({ name }))
  }

  return (
    <div className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-blue-600/10 text-blue-700 flex items-center justify-center">
          <User size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Welcome back</h3>
          <p className="text-sm text-gray-500">You're signed in with mock data.</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium">{user?.name}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium">{user?.email}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">User ID</span><span className="font-medium">{user?.id}</span></div>
      </div>

      <form onSubmit={onUpdate} className="mt-5 flex items-center gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Update display name"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 transition"
        >
          <Pencil size={16} />
          Save
        </button>
        <button
          type="button"
          onClick={() => dispatch(logout())}
          className="inline-flex items-center gap-1 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </form>
    </div>
  )
}
