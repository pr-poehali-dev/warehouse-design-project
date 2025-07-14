import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">СкладПро</span>
            </div>
            <p className="text-gray-400">
              Надежный партнер для ваших складских и логистических потребностей
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <div className="space-y-2 text-gray-400">
              <div>Аренда складов</div>
              <div>Логистика</div>
              <div>Погрузка</div>
              <div>Охрана</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <div className="space-y-2 text-gray-400">
              <div>О нас</div>
              <div>Лицензии</div>
              <div>Карьера</div>
              <div>Новости</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div>+7 (495) 123-45-67</div>
              <div>info@skladpro.ru</div>
              <div>г. Москва, ул. Складская, 15</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 СкладПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;