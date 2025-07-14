import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section id="rental" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Полный спектр складских услуг</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем комплексные решения для хранения и логистики вашего товара
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-blue-600" />
              </div>
              <CardTitle className="text-xl">Логистические услуги</CardTitle>
              <CardDescription>Полный цикл логистики от приемки до отгрузки</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Приемка товара</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Комплектация заказов</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Доставка по городу</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Управление запасами</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={32} className="text-orange-600" />
              </div>
              <CardTitle className="text-xl">Погрузо-разгрузочные работы</CardTitle>
              <CardDescription>Профессиональное оборудование и опытная команда</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Погрузчики всех типов</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Квалифицированные операторы</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Бережная обработка груза</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Работа 24/7</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <CardTitle className="text-xl">Охрана и безопасность</CardTitle>
              <CardDescription>Круглосуточная охрана и системы безопасности</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Видеонаблюдение 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Контроль доступа</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Пожарная сигнализация</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-gray-700">Страхование имущества</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;