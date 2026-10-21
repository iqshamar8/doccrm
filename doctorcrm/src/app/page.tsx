export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-700 to-emerald-900 text-white p-8 flex flex-col items-center justify-center" dir="rtl">
      <h1 className="text-5xl font-extrabold mb-4">MediFlow CRM</h1>
      <p className="text-lg mb-2">نظام إدارة العيادات الطبية — جاهز للتشغيل</p>
      <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
        <a href="/dashboard" className="bg-white/10 hover:bg-white/20 p-4 rounded text-center">لوحة التحكم</a>
        <a href="/patients" className="bg-white/10 hover:bg-white/20 p-4 rounded text-center">المرضى</a>
        <a href="/appointments" className="bg-white/10 hover:bg-white/20 p-4 rounded text-center">المواعيد</a>
        <a href="/payments" className="bg-white/10 hover:bg-white/20 p-4 rounded text-center">المدفوعات</a>
        <a href="/whatsapp" className="bg-white/10 hover:bg-white/20 p-4 rounded text-center">واتساب</a>
        <a href="/bot" className="bg-white/10 hover:bg-white/20 p-4 rounded text-center">البوت</a>
      </div>
    </main>
  );
}