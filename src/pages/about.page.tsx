import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.1 }}
			transition={{ duration: 0.7, ease: 'easeInOut' }}
			className="flex flex-col items-center justify-center"
		>
			<div>
				<div className="max-w-5xl mx-auto text-center p-6 flex flex-col items-center shadow-lg rounded-2xl outline outline-black/10">
					<h1 className="text-4xl font-bold text-white">
						О компании Falcon Group
					</h1>
					<p className="mt-4 text-lg text-gray-400 ">
						Falcon Group — это динамичная компания, специализирующаяся на
						инновационных решениях в области технологий, консалтинга и бизнеса.
						Мы создаем передовые продукты и сервисы, которые помогают нашим
						клиентам достигать новых высот.
					</p>
					<p className="mt-2 text-lg text-gray-400">
						Наша миссия — внедрять инновации, делать сложное простым и помогать
						бизнесу развиваться в быстро меняющемся мире. Мы ценим качество,
						надежность и стремимся к совершенству в каждом проекте.
					</p>
					<h2 className="mt-6 text-2xl font-semibold text-white">
						Наши ключевые направления
					</h2>
					<ul className="mt-4 text-lg text-gray-400 list-disc list-inside">
						<li>Цифровая трансформация и IT-решения</li>
						<li>Консалтинг и стратегическое планирование</li>
						<li>Финансовые и инвестиционные услуги</li>
						<li>Маркетинг и развитие брендов</li>
					</ul>
					<p className="mt-6 text-lg text-gray-400">
						Присоединяйтесь к Falcon Group и двигайтесь вперед вместе с нами!
					</p>
				</div>
				<Footer />
			</div>
		</motion.div>
	)
}
