import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы аренды складов</h2>
          <p className="text-xl text-gray-600">Выберите оптимальный тариф для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Стартовый</CardTitle>
              <CardDescription>Для малого бизнеса</CardDescription>
              <div className="text-4xl font-bold text-blue-600 mt-4">
                ₽25,000<span className="text-lg text-gray-600">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>До 100 м² площади</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Базовая охрана</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Погрузка в рабочие дни</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-blue-500 border-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white px-3 py-1">Популярный</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Бизнес</CardTitle>
              <CardDescription>Оптимальное решение</CardDescription>
              <div className="text-4xl font-bold text-blue-600 mt-4">
                ₽45,000<span className="text-lg text-gray-600">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>До 500 м² площади</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Полная охрана 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Логистические услуги</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Погрузка 24/7</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Корпоративный</CardTitle>
              <CardDescription>Для крупных компаний</CardDescription>
              <div className="text-4xl font-bold text-blue-600 mt-4">
                ₽85,000<span className="text-lg text-gray-600">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>От 1000 м² площади</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>VIP охрана</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Персональный менеджер</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Все услуги включены</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;