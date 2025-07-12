'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/lib/auth-context'
import { 
  Leaf, 
  User, 
  Package, 
  ArrowUpDown, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const handleLogout = () => {
    logout()
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">ReWear</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/items"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isActive('/items') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Browse Items
            </Link>
            
            {user && (
              <>
                <Link
                  href="/items/new"
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    isActive('/items/new') ? 'text-emerald-600' : 'text-gray-700'
                  }`}
                >
                  List Item
                </Link>
                <Link
                  href="/swaps"
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    isActive('/swaps') ? 'text-emerald-600' : 'text-gray-700'
                  }`}
                >
                  My Swaps
                </Link>
                {user.role === 'ADMIN' && (
                  <Link
                    href="/admin"
                    className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                      isActive('/admin') ? 'text-emerald-600' : 'text-gray-700'
                    }`}
                  >
                    Admin
                  </Link>
                )}
              </>
            )}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {user.points} points
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard">
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/items"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Items
            </Link>
            
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/items/new"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  List Item
                </Link>
                <Link
                  href="/swaps"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Swaps
                </Link>
                {user.role === 'ADMIN' && (
                  <Link
                    href="/admin"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <div className="px-3 py-2 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{user.name}</span>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                      {user.points} points
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="mt-2 w-full justify-start"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <div className="px-3 py-2 space-y-2 border-t">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/auth/signin" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}