import { IMenuLink } from '@/interface/menu.iterface'
import { BookUser, Building2, Home } from 'lucide-react'

export const menuItems: IMenuLink[] = [
	{
		href: '/',
		icon: <Home size={20} />,
	},
	{
		name: 'About',
		href: '/about',
		icon: <Building2 size={20} />,
	},
	{
		name: 'Contacts',
		href: '/contacts',
    icon: <BookUser size={20} />
	},
	/*{
		name: 'Blog',
		href: '/blog',
	},
	{
		name: 'Gallery',
		href: '/gallery',
	},*/
]
