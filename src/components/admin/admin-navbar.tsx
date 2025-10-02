'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Users, 
  FileText, 
  Upload, 
  Video, 
  Trophy, 
  Settings,
  Sun,
  Moon,
  LogOut
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LOGUS from "../../../public/loguss.png"
import { useAuth } from "@/context/AuthContext"

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/admin", icon: Home },
      { title: "Students", url: "/admin/students", icon: Users },
    ]
  },
  {
    title: "Quiz Management",
    items: [
      { title: "Upload Excel", url: "/admin/upload", icon: Upload },
      { title: "Quiz Details", url: "/admin/quiz", icon: FileText },
      { title: "Quiz Results", url: "/admin/quiz-results", icon: Trophy },
    ]
  },
  {
    title: "Video Contest",
    items: [
      { title: "Submissions", url: "/admin/videos", icon: Video },
      { title: "Winners", url: "/admin/winners", icon: Trophy },
    ]
  },
  {
    title: "System",
    items: [
      { title: "Settings", url: "/admin/settings", icon: Settings },
    ]
  }
]

export function AdminNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { signOut } = useAuth()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav className="bg-primary text-primary-foreground shadow-md w-full flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
        <Image src={LOGUS} alt="AISB Logo" width={40} height={40} />
        <h1 className="text-lg font-semibold">AISB Admin</h1>
      </div>
      <div className="flex items-center gap-4">
        {navigation.map((group) => (
          <div key={group.title} className="flex items-center gap-4">
            {group.items.map((item) => (
              <Link key={item.title} href={item.url} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition">
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
        <Button 
          variant="destructive" 
          size="sm"
          onClick={signOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </nav>
  )
}
