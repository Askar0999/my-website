import { Navbar } from '@/components/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC<React.PropsWithChildren> = () => {
	return (
		<>
			<main className="bg-gradient-to-r from-black via-purple-950 to-black min-h-screen text-gray-200 flex flex-col items-center">
				<Navbar />
				<Outlet />
			</main>
		</>
	)
}
