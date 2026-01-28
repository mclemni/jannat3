
import React from 'react';
import { useTranslation } from './App';
import { HardHat, Droplets, Settings, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const { t, lang } = useTranslation();
  const mainImageUrl = "https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg";

  const services = [
    {
      id: "civil",
      title: t.services.items.civil,
      icon: <HardHat size={48} />,
      image: mainImageUrl,
      list: lang === 'en' 
        ? ["Full-scale site preparation & excavation", "Infrastructure road building & asphalt paving", "Reinforced concrete works for industrial projects", "Public and private sector building construction"]
        : ["تهيئة المواقع بالكامل وأعمال الحفر والردم", "إنشاء الطرق والساحات الخدمية وأعمال التبليط", "تنفيذ الأعمال الخرسانية المسلحة للمشاريع الصناعية", "تشييد المباني والمنشآت للقطاعين العام والخاص"]
    },
    {
      id: "oil",
      title: t.services.items.oilGas,
      icon: <Droplets size={48} />,
      image: mainImageUrl,
      list: lang === 'en' 
        ? ["Oil field network & pipeline installation", "Specialized oil tank fabrication and assembly", "Well site preparation and maintenance", "Hydro-testing and field engineering support"]
        : ["أعمال البايبنك وخطوط الأنابيب في الحقول النفطية", "تصنيع ونصب الخزانات النفطية التخصصية", "تهيئة وصيانة مواقع آبار النفط", "الفحص الهيدروليكي والدعم الهندسي الميداني"]
    },
    {
      id: "mechanical",
      title: t.services.items.mechanical,
      icon: <Settings size={48} />,
      image: mainImageUrl,
      list: lang === 'en' 
        ? ["Heavy equipment installation & commissioning", "Precision industrial welding and structural steel", "HVAC and mechanical systems monitoring", "Ongoing industrial facility maintenance"]
        : ["نصب وتشغيل المعدات الثقيلة والأنظمة الميكانيكية", "أعمال اللحام التخصصي والمنشآت الحديدية", "أنظمة التكييف والتحكم الميكانيكي", "أعمال الصيانة الدورية للمنشآت الصناعية"]
    },
    {
      id: "supply",
      title: t.services.items.supply,
      icon: <Truck size={48} />,
      image: mainImageUrl,
      list: lang === 'en' 
        ? ["Raw material and construction supply chain", "Machinery and equipment leasing services", "Technical and industrial spare parts procurement", "Comprehensive site logistics and general transport"]
        : ["تجهيز المواد الإنشائية والمواد الأولية", "تأمين واستئجار الآليات والمعدات الثقيلة", "توفير قطع الغيار والمستلزمات الفنية", "الخدمات اللوجستية الشاملة والنقل العام للمواقع"]
    }
  ];

  return (
    <div className="animate-fadeIn">
      <section className="bg-slate-100 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src={mainImageUrl} className="w-full h-full object-cover" alt="header-bg" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-corporate-navy mb-8 uppercase tracking-tight">{t.services.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.services.desc}</p>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="flex-1">
                  <div className="text-corporate-red mb-8 flex items-center space-x-4 rtl:space-x-reverse">
                    {service.icon}
                    <div className="h-1 w-12 bg-slate-200"></div>
                  </div>
                  <h2 className="text-4xl font-black text-corporate-navy mb-8 leading-tight">{service.title}</h2>
                  <div className="space-y-6">
                    {service.list.map((item, i) => (
                      <div key={i} className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="w-2 h-2 rounded-full bg-corporate-red mt-2.5 flex-shrink-0"></div>
                        <p className="text-slate-700 text-lg font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative group">
                  <div className={`absolute -inset-4 bg-corporate-red/5 rounded-3xl transform ${index % 2 === 1 ? '-rotate-2' : 'rotate-2'} transition-transform group-hover:rotate-0`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
