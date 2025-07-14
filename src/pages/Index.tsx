import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  Премиум склады с полным сервисом
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Современные складские комплексы с услугами
                  <span className="text-blue-600"> логистики</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Профессиональная аренда складских помещений с полным спектром услуг: 
                  логистика, погрузо-разгрузочные работы, круглосуточная охрана.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать склад
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Виртуальный тур
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Складов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Безопасность</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/59d280b9-6fdd-410a-a2b9-938642a3a147.jpg" 
                alt="Современный склад" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={24} className="text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Сертифицированная безопасность</div>
                    <div className="text-sm text-gray-600">ISO 9001:2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Pricing Section */}
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

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-gray-600">Более 500 довольных партнеров выбрали наши склады</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Отличный сервис! Быстрая обработка грузов, надежная охрана. 
                  Работаем уже 2 года, очень довольны качеством услуг."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Александр Петров</div>
                    <div className="text-sm text-gray-600">ООО "ТехКомплект"</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Профессиональная команда, современное оборудование. 
                  Логистика работает как часы. Рекомендуем!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Мария Сидорова</div>
                    <div className="text-sm text-gray-600">ЗАО "Логистик+"</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Идеальное соотношение цена-качество. Удобное расположение, 
                  отличная инфраструктура. Работаем и не думаем!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Игорь Васильев</div>
                    <div className="text-sm text-gray-600">ИП Васильев</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы обсудить ваши потребности в складских услугах</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Phone" size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 987-65-43</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Mail" size={24} className="text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@skladpro.ru</p>
                    <p className="text-gray-600">sales@skladpro.ru</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <Icon name="MapPin" size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Адрес офиса</h3>
                      <p className="text-gray-600">г. Москва, ул. Складская, 15</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>Пн-Пт: 9:00 - 18:00</div>
                    <div>Сб-Вс: 10:00 - 16:00</div>
                    <div>Склады работают 24/7</div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Бесплатная консультация</h3>
                <p className="mb-4">Оставьте заявку и получите персональное предложение в течение часа</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Записаться на встречу
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/15864386-1212-49fe-9002-a4e83516e7b8.jpg" 
                alt="Наши склады" 
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;