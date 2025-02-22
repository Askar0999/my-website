import { FaTelegram, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white flex justify-center items-center">
      {/* <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Контакты</h3>
          <p className="text-gray-400"> Email: falcon-group@gmail.com</p>
          <p className="text-gray-400"> Телефон: +996 708-94-65-92</p>
          <p className="text-gray-400"> Адрес: Каракол, ул.Тыныстанова, 42</p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-2">Мы в соцсетях</h3>
          <div className="flex space-x-4">
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="w-8 h-8 text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-8 h-8 text-green-400 hover:text-green-600 transition-colors" />
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
          </div>
        </div>
      </div> */}

     
      <div className="text-center text-gray-500 mt-6">
        © {new Date().getFullYear()} Falcon Group. Все права защищены.
      </div>
    </footer>
  );
}
