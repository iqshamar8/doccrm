export default function WhatsAppPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">WhatsApp Cloud API</h1>
      <p className="text-slate-600 mt-2">Real provider: requires WHATSAPP_ACCESS_TOKEN + PHONE_NUMBER_ID in .env. Local mock provider available for testing.</p>
    </main>
  );
}
