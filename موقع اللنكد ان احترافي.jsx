import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DataAnalyticsSite() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "966501490923";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">

      {/* Hero */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          أخصائي تحليل مالي | تحليل بيانات | Power BI Dashboards
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          أحوّل بيانات مشروعك إلى قرارات ذكية تساعدك على زيادة الأرباح وفهم الأداء المالي بدقة
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <a href={whatsappLink} target="_blank">
            <Button>تواصل واتساب</Button>
          </a>
          <Button variant="outline">عرض الخدمات</Button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">من أنا</h2>
            <p className="text-gray-600">
              أخصائي تحليل مالي وتحليل بيانات أساعد أصحاب المشاريع على فهم الأرقام
              وتحويلها إلى قرارات عملية باستخدام التحليل المالي ولوحات Power BI التفاعلية.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-4">
        <Card><CardContent className="p-4">
          <h3 className="font-bold">📊 تحليل البيانات</h3>
          <p className="text-sm text-gray-600">تحليل المبيعات واكتشاف الأنماط</p>
        </CardContent></Card>

        <Card><CardContent className="p-4">
          <h3 className="font-bold">💰 التحليل المالي</h3>
          <p className="text-sm text-gray-600">الأرباح، التكاليف، التدفقات النقدية</p>
        </CardContent></Card>

        <Card><CardContent className="p-4">
          <h3 className="font-bold">📈 Power BI Dashboards</h3>
          <p className="text-sm text-gray-600">لوحات تفاعلية لعرض الأداء بشكل بصري</p>
        </CardContent></Card>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold">الباقات</h2>
        <p className="text-gray-600 mb-6">خدمات تحليل احترافية تناسب احتياج مشروعك</p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card><CardContent className="p-6">
            <h3 className="font-bold">🥉 أساسية</h3>
            <p className="text-sm text-gray-600">تحليل بيانات بسيط + تقرير</p>
            <p className="mt-2 font-bold">150 - 300 ريال</p>
          </CardContent></Card>

          <Card><CardContent className="p-6 border-2 border-black">
            <h3 className="font-bold">🥈 متقدمة</h3>
            <p className="text-sm text-gray-600">تحليل مالي شامل + توصيات</p>
            <p className="mt-2 font-bold">300 - 800 ريال</p>
          </CardContent></Card>

          <Card><CardContent className="p-6">
            <h3 className="font-bold">🥇 احترافية</h3>
            <p className="text-sm text-gray-600">Power BI Dashboard كامل</p>
            <p className="mt-2 font-bold">800 - 2000+ ريال</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto mt-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">تواصل معي</h2>

            <div className="grid gap-3">
              <Input name="name" placeholder="اسمك" onChange={handleChange} />
              <Input name="message" placeholder="رسالتك" onChange={handleChange} />

              <a href={whatsappLink} target="_blank">
                <Button className="w-full">إرسال عبر واتساب</Button>
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              أخصائي تحليل مالي وتحليل بيانات | عمل شخصي داخل السعودية
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500 text-sm">
        © أخصائي تحليل مالي وتحليل بيانات | جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
