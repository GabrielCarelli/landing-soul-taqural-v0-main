"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Instagram } from "lucide-react";

const HUBSPOT_PREFIX = ""; 
const FIXED_CITY = "Campinas";

const portalId = import.meta.env.VITE_PUBLIC_HUBSPOT_PORTAL_ID!;
const formId = import.meta.env.VITE_PUBLIC_HUBSPOT_FORM_ID_MONETIZE_RENT!;

type FormValues = {
  nome: string;
  email: string;
  telefone?: string;
  mensagem?: string;
  city: string;
};

if (!portalId || !formId) {
  console.log("HubSpot não configurado corretamente");
}

function toHubspotFields(data: FormValues) {
  if (HUBSPOT_PREFIX) {
    return [
      { name: `${HUBSPOT_PREFIX}_nome`, value: data.nome },
      { name: `${HUBSPOT_PREFIX}_email`, value: data.email },
      data.telefone ? { name: `${HUBSPOT_PREFIX}_telefone`, value: data.telefone } : null,
      data.mensagem ? { name: `${HUBSPOT_PREFIX}_mensagem`, value: data.mensagem } : null,
      { name: `${HUBSPOT_PREFIX}_origem_form`, value: "Contato - Studio Universidades" },
      { name: `${HUBSPOT_PREFIX}_city`, value: FIXED_CITY },
    ].filter(Boolean) as { name: string; value: string }[];
  }

  return [
    { name: "firstname", value: data.nome },
    { name: "email", value: data.email },
    data.telefone ? { name: "phone", value: data.telefone } : null,
    data.mensagem ? { name: "message", value: data.mensagem } : null,
    { name: "city", value: FIXED_CITY },
  ].filter(Boolean) as { name: string; value: string }[];
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

const Contact = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: { nome: "", email: "", telefone: "", mensagem: "" },
  });
  const { isSubmitting } = formState;
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      const fields = toHubspotFields(data);
      await submitToHubspot({ fields });
      setSent(true);
      reset();
    } catch (e) {
      console.error(e);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Texto + Form */}
        <div className="w-full lg:w-[580px]">
          <div className="mb-6">
            <h2 className="text-soul-dark font-fagun text-2xl font-black mb-6">
              Quero morar aqui
            </h2>
            <p className="text-soul-gray font-fagun text-xl font-normal mb-6">
              Incentive o contato com um tom amigável. Quanto mais simples o formulário, maior a chance de conversão.
            </p>
            <a
              href="https://www.instagram.com/housebitapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 text-soul-dark hover:text-soul-blue transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Maria da Silva"
                  {...register("nome", { required: true, minLength: 2 })}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray font-fagun"
                />
              </div>

              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray font-fagun"
                />
              </div>

              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  Telefone <span className="text-soul-dark">(opcional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-1111"
                  {...register("telefone")}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray font-fagun"
                />
              </div>

              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  Mensagem <span className="text-soul-dark">(opcional)</span>
                </label>
                <textarea
                  placeholder="Conte um pouco sobre o que você procura…"
                  rows={3}
                  {...register("mensagem")}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-2xl text-base placeholder-soul-light-gray resize-none font-fagun"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-soul-dark text-white py-4 px-8 rounded-full text-xl font-fagun font-normal hover:bg-opacity-90 transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Receber proposta personalizada"}
              </button>
            </form>
          ) : (
            <div className="w-full rounded-2xl border border-soul-light-gray bg-white p-6 text-soul-dark">
              <p className="font-fagun text-xl font-bold mb-1">Tudo certo com seu envio.</p>
              <p className="font-fagun">
                Seus dados foram enviados. Você receberá uma simulação personalizada em breve.
              </p>
              <button
                className="mt-4 inline-flex h-10 px-5 items-center justify-center rounded-full bg-soul-dark text-white hover:bg-opacity-90"
                onClick={() => setSent(false)}
              >
                Preencher novo formulário
              </button>
            </div>
          )}
        </div>

        {/* Imagem */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0484e0ab5bfcfe3a9893d70f576911772b44ee28?width=1240"
          alt="Imagem de contato"
          className="w-full lg:flex-1 lg:h-[605px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
