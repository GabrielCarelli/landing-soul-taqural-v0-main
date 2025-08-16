import { useState } from "react";
import { MoveUpRight, Home, BedSingle } from "lucide-react";

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
      {
        name: `${HUBSPOT_PREFIX}_origem_form`,
        value: "Agendar Visita - Soul Taquaral",
      },
    ];
  }
  return [
    { name: "firstname", value: fixedName },
    { name: "email", value: fixedEmail },
    { name: "phone", value: phone },
    { name: "city", value: FIXED_CITY },
    { name: "origem_form", value: "Agendar Visita - Soul Taquaral" },
  ];
}

const HeroSection = () => {
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
          pageName: "Soul Taquaral - Hero",
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
    <section className="relative w-full h-[800px] md:h-[821px] sm:h-[936px] mt-20 md:mt-20 sm:mt-34">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9230a1952bf33314dd16653f2b1913a001bbde00?width=2880"
          alt="Casa do Soul Taquaral"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      {/* Tag de entrega */}
      <div className="hidden md:flex absolute top-6 right-0 px-6 lg:px-14 justify-end">
        <div className="absolute top-4 -right-0 bg-soul-yellow px-4 py-2 shadow-md">
          <p className="text-soul-secondary md:text-lg text-base font-normal whitespace-nowrap">
            Previsão de entrega em:{" "}
            <span className="font-black">00/00/0000</span>
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex w-full h-full">
        <div className="flex flex-col justify-center px-6 sm:px-6 md:px-14 lg:px-14 max-w-full sm:max-w-full md:max-w-[560px] lg:max-w-[560px] sm:mt-12 md:mt-0">
          <div className="flex flex-col gap-6 lg:gap-10">
            {/* Título e descrição */}
            <div className="flex flex-col gap-6 max-w-full sm:max-w-full md:max-w-[409px]">
              <h1 className="text-white text-5xl font-fagun sm:text-[32px] md:text-[40px] lg:text-[40px] font-black leading-[140%]">
                More com exclusividade no Soul Taquaral
              </h1>
              <p className="text-white text-lg sm:text-xl md:text-xl lg:text-xl font-normal">
                Casas com varanda social, jardim privativo e lazer completo no
                bairro mais desejado de Campinas.
              </p>

              {/* Destaques */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MoveUpRight className="w-6 h-6 text-white" />
                  <span className="text-white text-lg lg:text-xl font-normal">
                    97m²
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Home className="w-6 h-6 text-white" />
                  <span className="text-white text-lg lg:text-xl font-normal">
                    12 unidades
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <BedSingle className="w-6 h-6 text-white" />
                  <span className="text-white text-lg lg:text-xl font-normal">
                    3 dormitórios
                  </span>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form
              onSubmit={handleVisitSubmit}
              className="flex flex-row flex-nowrap items-center gap-2 w-full lg:w-auto min-w-0"
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
                  rounded-full border-soul-yellow text-soul-dark
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
                  ml-[-7rem]
                  sm:px-6 sm:py-3
                  md:ml-[-5rem]
                  rounded-full bg-soul-secondary text-white
                  text-sm sm:text-base
                  whitespace-nowrap
                  hover:bg-opacity-90 transition disabled:opacity-70
                "
              >
                {sending ? "Enviando..." : "Agendar Visita"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
