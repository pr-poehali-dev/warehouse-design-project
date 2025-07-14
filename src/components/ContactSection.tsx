import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;