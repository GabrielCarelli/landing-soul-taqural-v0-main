import { useState } from "react";
import { MapPin } from "lucide-react";

const HUBSPOT_PREFIX = "";
const FIXED_CITY = "Campinas";
const portalId = import.meta.env.VITE_PUBLIC_HUBSPOT_PORTAL_ID!;
const formId = import.meta.env.VITE_PUBLIC_HUBSPOT_FORM_ID_MONETIZE_RENT!;

function getHubspotUtk() {
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

async function submitToHubspot(payload: any) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || `Erro HubSpot: ${res.status}`);
  }
}

function toHubspotVisitFields(phone: string) {
  const fixedName = "LeadSoulTaquaral";
  const fixedEmail = `${fixedName}@gmail.com`;

  if (HUBSPOT_PREFIX) {
    return [
      { name: `${HUBSPOT_PREFIX}_nome`, value: fixedName },
      { name: `${HUBSPOT_PREFIX}_email`, value: fixedEmail },
      { name: `${HUBSPOT_PREFIX}_telefone`, value: phone },
      { name: `${HUBSPOT_PREFIX}_city`, value: FIXED_CITY },
      { name: `${HUBSPOT_PREFIX}_origem_form`, value: "Agendar Visita - Soul Taquaral" },
    ];
  }
  return [
    { name: "firstname", value: fixedName },
    { name: "email", value: fixedEmail },
    { name: "phone", value: phone },
    { name: "city", value: FIXED_CITY },
    { name: "origem_form", value: "Agendar Visita - Soul Taquaral" }, // opcional
  ];
}

const Decorated = () => {
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);

  const handleVisitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = phone.replace(/\D/g, "");
    if (clean.length < 10) {
      alert("Digite um telefone válido.");
      return;
    }
    try {
      setSending(true);
      const fields = toHubspotVisitFields(phone);
      const payload = {
        fields,
        context: {
          hutk: getHubspotUtk(),
          pageUri: window.location.href,
          pageName: "Soul Taquaral - Decorado",
        },
      };
      await submitToHubspot(payload);
      setPhone("");
      alert("Recebemos seu telefone! Em breve entraremos em contato. 🙌");
    } catch (err) {
      console.error(err);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-6 sm:px-6 md:px-10 lg:px-20 py-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center bg-soul-bg-gray rounded-2xl px-6 py-8 gap-8 w-full">

        {/* Título + Endereço */}
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-soul-dark text-2xl font-black">
            Conheça o decorado de perto
          </h3>
          <div className="flex items-start gap-2">
            <MapPin className="w-6 h-6 text-soul-gray mt-0.5" />
            <span className="text-soul-gray text-base leading-tight">
              Rua Embiruçu, 82 – Taquaral – Campinas/SP.
            </span>
          </div>
        </div>

        {/* Descrição (central/à direita em telas maiores) */}
        <div className="hidden md:flex lg:flex-1 justify-center px-4 text-center">
          <p className="text-soul-gray text-xl font-normal">
            Visite a unidade decorada e veja de perto cada detalhe dos ambientes.
          </p>
        </div>

        {/* Form (input + botão sobreposto, responsivo) */}
        <form
          onSubmit={handleVisitSubmit}
          className="flex flex-row items-center gap-2 w-full lg:w-auto min-w-0"
        >
          <input
            type="tel"
            placeholder="(11) 99999-1111"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              flex-1 min-w-0
              px-3 py-2
              sm:px-4 sm:py-3
              rounded-full bg-white
              border border-soul-light-gray
              text-soul-dark
              text-sm sm:text-base
              focus:outline-none
              hover:bg-opacity-90 transition disabled:opacity-70
            "
          />
          <button
            type="submit"
            disabled={sending}
            className="
              shrink-0
              px-4 py-2
              ml-[-5rem]
              sm:px-6 sm:py-3
              rounded-full bg-soul-dark text-white
              text-sm sm:text-base
              whitespace-nowrap
              hover:bg-opacity-90 transition disabled:opacity-70
            "
          >
            {sending ? "Enviando..." : "Agendar Visita"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Decorated;
