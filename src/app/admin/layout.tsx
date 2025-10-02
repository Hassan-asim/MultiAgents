'use client'

import React from "react"
import { usePathname } from "next/navigation"
import { AdminNavbar } from "@/components/admin/admin-navbar"
import { AuthProvider } from "@/context/AuthContext"

function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Login page - render without navbar
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  // All other admin pages - show admin layout
  return (
    <div className="flex flex-col h-screen w-full">
      <AdminNavbar />
      <main className="flex-1 overflow-auto p-6">
        {children}
      </main>
    </div>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <ProtectedAdminLayout>{children}</ProtectedAdminLayout>
    </AuthProvider>
  )
}