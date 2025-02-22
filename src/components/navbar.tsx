import { menuItems } from '@/constants/menu.constants'
import { Link } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className="flex flex-col p-4 max-w-screen-lg px-20">
			<h1 className="flex justify-center text-4xl mb-6 font-bold">
				Falcon Group
			</h1>
			<ul className="max-w-full flex items-center gap-12 rounded-2xl via-purple-800 shadow-2xl ring-gray-900/5">
				{menuItems.map((menu, index) => (
					<li key={index}>
						<Link
							to={menu.href}
							className="flex justify-center items-center gap-3 text-gray-300 font-medium rounded-2xl via-purple-800  shadow-xl p-2 hover:bg-purple-800 hover:text-gray-400"
						>
							{menu.icon}
							{menu.name ? <span className="text-sm">{menu.name}</span> : null}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
