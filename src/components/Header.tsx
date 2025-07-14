import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Building2" size={32} className="text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">СкладПро</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
          <a href="#rental" className="text-gray-600 hover:text-blue-600 transition-colors">Аренда</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
          <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
          <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Icon name="Phone" size={16} className="mr-2" />
          Связаться
        </Button>
      </div>
    </nav>
  );
};

export default Header;