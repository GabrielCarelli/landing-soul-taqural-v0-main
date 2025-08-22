import { CircleCheck } from "lucide-react";

const Financing = () =>{
    return(
        <section
        id="financiamento"
        className="max-w-[1440px] mx-auto px-20 py-10 bg-white"
      >
        <div className="flex items-center gap-20">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/71f0e10f35b11ace7dc319ef132076dc151e859e?width=988"
            alt="Financiamento"
            className="w-[494px] flex-shrink-0 h-full object-cover"
          />
          <div className="flex-1 max-w-[684px]">
            <h2 className="text-soul-secondary text-3xl font-black mb-6 leading-[1.4]">
              Facilidades no financiamento
            </h2>
            <p className="text-soul-gray text-xl font-normal mb-6 leading-[1.4]">
              Fale sobre as condições comerciais, tipos de financiamento,
              entrada facilitada e simulação sem compromisso.
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <CircleCheck className="w-6 h-6 text-soul-secondary mt-0.5" />
                <span className="text-soul-dark text-xl font-medium">
                  Financiamento direto com o banco
                </span>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheck className="w-6 h-6 text-soul-secondary mt-0.5" />
                <span className="text-soul-dark text-xl font-medium">
                  Entrada facilitada
                </span>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheck className="w-6 h-6 text-soul-secondary mt-0.5" />
                <span className="text-soul-dark text-xl font-medium">
                  Simulação sem compromisso
                </span>
              </div>
            </div>

            <button 
            onClick={() =>
                 document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-soul-blue text-white px-8 py-4 rounded-full text-[22px] font-normal">
              Quero saber mais
            </button>
          </div>
        </div>
      </section>
    )
}

export default Financing;