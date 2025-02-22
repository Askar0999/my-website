import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function ContactsPage() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.1 }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
			className="flex flex-col items-center justify-center "
		>
			<div className='text-white p-6 max-w-full flex flex-col items-center'>

				<div className="max-w-4xl mx-auto p-6 text-center text-white flex flex-col items-center shadow-lg rounded-2xl outline outline-black/5">
					<h1 className="text-4xl font-bold text-white">Свяжитесь с нами</h1>
					<p className="mt-4 text-lg text-gray-400">
						Мы всегда рады общению! Свяжитесь с Falcon Group по любым вопросам, и
						наша команда ответит вам в кратчайшие сроки.
					</p>
					<h2 className="mt-6 text-2xl font-semibold text-white">
						Наши контакты
					</h2>
					<ul className="mt-4 text-lg text-gray-400 list-disc list-inside">
						<li>Email: falcon-group@gmail.com</li>
						<li>Телефон: +996 708-94-65-92</li>
						<li>Адрес: Каракол, ул.Тыныстанова, 42</li>
					</ul>
					<h2 className="mt-6 text-2xl font-semibold text-white">
						Социальные сети
					</h2>
					<div className="flex justify-center p-9 gap-9 space-x-4 ">
						<a
							href="https://web.telegram.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTelegram className="w-8 h-8 text-blue-400 hover:text-blue-600 transition-colors" />
						</a>
						<a
							href="https://web.whatsapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaWhatsapp className="w-8 h-8 text-green-400 hover:text-green-600 transition-colors" />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition-colors" />
						</a>
					</div>
				</div>
				<Footer />
			</div>
		</motion.div>
	)
}
