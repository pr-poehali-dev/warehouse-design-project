import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  return (
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
  );
};

export default ReviewsSection;