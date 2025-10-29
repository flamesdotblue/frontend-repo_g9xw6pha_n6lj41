import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../authSlice'
import { UserPlus } from 'lucide-react'

export default function LoginForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const fakeUser = {
      id: Date.now().toString(),
      name: name.trim() || 'Guest',
      email: email.trim() || 'guest@example.com',
    }
    dispatch(login(fakeUser))
    setName('')
    setEmail('')
  }

  return (
    <div className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
        <UserPlus size={20} />
        Sign in (Mock)
      </h2>
      <p className="text-sm text-gray-500 mb-4">No password needed. This just stores a user in Redux.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </form>
    </div>
  )
}
