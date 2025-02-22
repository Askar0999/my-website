import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/about.page';
import ContactsPage from './pages/contacts.page';
import HomePage from './pages/home.page';
import GalleryPage from './pages/gallery.page';
import BlogPage from './pages/blog.page';
import { Layout } from './layout/layout';

export const routes = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				index: true,
				path: '/',
				element: <HomePage />
			},
			{
				path: '/about',
				element: <AboutPage />
			},
			{
				path: '/contacts',
				element: <ContactsPage />
			},
			{
				path: '/gallery',
				element: <GalleryPage />
			},
			{
				path: '/blog',
				element: <BlogPage />
			}
		]
	}
]);
