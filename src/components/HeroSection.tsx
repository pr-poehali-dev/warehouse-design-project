import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;