import { CircleCheck } from "lucide-react";

const Financing = () => {
  return (
    <section id="financiamento" className="bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Imagem */}
          <div className="w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/71f0e10f35b11ace7dc319ef132076dc151e859e?width=988"
              alt="Financiamento"
              loading="lazy"
              className="w-full h-auto max-w-full rounded-2xl object-cover"
            />
          </div>

          {/* Texto */}
          <div className="min-w-0">
            <h2 className="text-soul-secondary text-2xl sm:text-3xl font-black mb-4 sm:mb-6 leading-tight">
              Facilidades no financiamento
            </h2>

            <p className="text-soul-gray text-base sm:text-xl font-normal mb-5 sm:mb-6 leading-relaxed">
              Fale sobre as condições comerciais, tipos de financiamento,
              entrada facilitada e simulação sem compromisso.
            </p>

            <ul className="space-y-4 sm:space-y-6 mb-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-soul-secondary mt-0.5 shrink-0" />
                <span className="text-soul-dark text-base sm:text-xl font-medium">
                  Financiamento direto com o banco
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-soul-secondary mt-0.5 shrink-0" />
                <span className="text-soul-dark text-base sm:text-xl font-medium">
                  Entrada facilitada
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-soul-secondary mt-0.5 shrink-0" />
                <span className="text-soul-dark text-base sm:text-xl font-medium">
                  Simulação sem compromisso
                </span>
              </li>
            </ul>

            <button
              onClick={() =>
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-soul-blue text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-[22px] font-medium"
            >
              Quero saber mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
