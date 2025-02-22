import Footer from '@/components/footer'
import ImageSlider from '@/components/imageslider'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'

export default function HomePage() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.1 }}
			transition={{ duration: 0.7, ease: 'easeInOut' }}
			className="flex flex-col items-center justify-center"
		>
			<div className="text-white p-6 max-w-5xl flex flex-col items-center shadow-lg rounded-2xl outline outline-black/5 ">
				<div className="p-6 flex flex-col items-center shadow-lg rounded-2xl outline outline-black/5 ">
					<h1 className="text-4xl font-bold mb-4">О компании FALCON GROUP</h1>
					<p className="text-xl mb-6 text-center">
						Мы — профессиональная команда разработчиков, которая стремится
						создавать высококачественные веб-приложения и программные решения.
						Мы решаем задачи любого масштаба, от малого бизнеса до крупных
						корпоративных решений.
					</p>
					<div className="flex flex-col justify-center rounded-2xl">
						<h2 className="text-2xl font-semibold mb-4">Наши достижения</h2>
						<ul className="list-disc pl-5 text-lg">
							<li>100+ успешных проектов для клиентов по всему миру</li>
							<li>10 лет опыта в разработке ПО</li>
							<li>Технологии, которые двигают бизнес вперед</li>
						</ul>
					</div>
				</div>
				<div className="p-6 flex-col items-center shadow-lg rounded-2xl outline outline-black/5">
					<section className=" outline-black/5">
						<h2 className="text-3xl font-semibold mb-8 flex justify-center ">
							Наши проекты
						</h2>
						<ImageSlider />
						{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							<img
								src="https://cdn.dribbble.com/userupload/17036137/file/original-aeb39f75a9c1f60cbd4021d1b94388ea.png?resize=1024x768&vertical=center"
								alt="Фото"
								className="rounded-sm"
							/>
							<img
								src="https://cdn.dribbble.com/userupload/32373444/file/original-7faa0217ad6de8a80e606a00076ab4a0.png?resize=1504x1128&vertical=center"
								alt="Фото"
								className="rounded-sm"
							/>
							<img
								src="https://cdn.dribbble.com/userupload/33091798/file/original-15cab2b3bf2bc1a53aa1d7e4509714a5.jpg?resize=1504x1128&vertical=center"
								alt="Фото"
								className="rounded-sm"
							/>
						</div> */}
					</section>
					<section className="mb-8 p-2">
						<h2 className="text-3xl font-semibold mb-4 p-5 flex justify-center ">
							Наши видео
						</h2>
						<div className="flex justify-center p-2 ">
							<ReactPlayer
								url="https://youtu.be/3QrkCmsfewM?si=h7_ZmkDZfHTHyRIY"
								className="rounded-lg shadow-lg"
								width="100%"
								height="400px"
								controls
							/>
						</div>
					</section>
					<section>
						<h2 className="text-3xl font-semibold mb-4">Наши услуги</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
							<div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
								<h3 className="text-2xl font-semibold mb-4">
									Разработка веб-сайтов
								</h3>
								<p>
									Создание высококачественных, пользовательски ориентированных
									веб-сайтов для вашего бизнеса.
								</p>
							</div>
							<div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
								<h3 className="text-2xl font-semibold mb-4">
									Мобильные приложения
								</h3>
								<p>
									Разработка мобильных приложений для iOS и Android, которые
									помогают вам оставаться на связи с клиентами.
								</p>
							</div>
							<div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
								<h3 className="text-2xl font-semibold mb-4">
									Консалтинг и аналитика
								</h3>
								<p>
									Предоставляем профессиональную консультацию по IT-стратегиям и
									аналитике данных для вашего бизнеса.
								</p>
							</div>
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</motion.div>
	)
}
