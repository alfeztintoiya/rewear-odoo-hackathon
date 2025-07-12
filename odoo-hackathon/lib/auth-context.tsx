'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from './mock-data'

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  signup: (name: string, email: string, password: string) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('rewear-user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock authentication - accept admin@rewear.com/admin123 or any other email/password123
    if ((email === 'admin@rewear.com' && password === 'admin123') || 
        (email !== 'admin@rewear.com' && password === 'password123')) {
      
      const mockUser: User = email === 'admin@rewear.com' 
        ? {
            id: '1',
            name: 'Admin User',
            email: 'admin@rewear.com',
            points: 1000,
            role: 'ADMIN',
            createdAt: '2024-01-01T00:00:00Z'
          }
        : {
            id: '2',
            name: 'Demo User',
            email: email,
            points: 150,
            role: 'USER',
            createdAt: '2024-01-01T00:00:00Z'
          }
      
      setUser(mockUser)
      localStorage.setItem('rewear-user', JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      points: 100,
      role: 'USER',
      createdAt: new Date().toISOString()
    }
    
    setUser(newUser)
    localStorage.setItem('rewear-user', JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('rewear-user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}