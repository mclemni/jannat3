
import React from 'react';
import { useTranslation } from './App';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="animate-fadeIn">
      <section className="bg-corporate-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t.contact.info}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-corporate-navy mb-8">
                {lang === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-slate-100 p-4 rounded-xl text-corporate-red">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-navy text-lg">{lang === 'en' ? 'Our Office' : 'مقرنا'}</h3>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-slate-100 p-4 rounded-xl text-corporate-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-navy text-lg">{lang === 'en' ? 'Phone' : 'الهاتف'}</h3>
                    <p className="text-gray-600 font-bold tracking-widest">{t.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-slate-100 p-4 rounded-xl text-corporate-red">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-navy text-lg">{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</h3>
                    <p className="text-gray-600">info@jannat-alfayhaa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border">
              <h2 className="text-2xl font-bold text-corporate-navy mb-8">
                {lang === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-corporate-navy mb-2">{t.contact.formName}</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-corporate-navy mb-2">{t.contact.formEmail}</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-corporate-navy mb-2">{t.contact.formMessage}</label>
                  <textarea rows={5} className="w-full p-4 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none"></textarea>
                </div>
                <button type="button" className="w-full bg-corporate-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[450px] bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55265.1118671691!2d47.78104723046029!3d30.511394553229672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc497918a280d0d%3A0x6283b3842364c18c!2sBasra%2C%20Iraq!5e0!3m2!1sen!2sus!4v1715420000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          title="Jannat Al-Fayhaa Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
