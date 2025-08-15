import { MapPin } from "lucide-react";

const Decorated = () => {
    return(
        <section className="max-w-[1440px] mx-auto px-20 mb-20">
        <div className="bg-soul-bg-gray rounded-2xl p-6 pr-20 flex items-center gap-10">
          <div className="flex-1">
            <h3 className="text-soul-dark text-2xl font-black mb-2">
              Conheça o decorado de perto
            </h3>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-6 h-6 text-soul-gray mt-0.5" />
              <span className="text-soul-gray text-base leading-tight">
                Rua Embiruçu, 82 – Taquaral – Campinas/SP.
              </span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-soul-gray text-xl font-normal mb-6">
              Visite a unidade decorada e veja de perto cada detalhe dos
              ambientes.
            </p>
            <div className="flex items-center gap-0">
              <button className="bg-white text-soul-dark px-8 py-4 rounded-full text-base font-light border border-soul-light-gray -mr-10 z-10 w-[240px]">
                (11) 99999-1111
              </button>
              <button className="bg-soul-dark text-white px-8 py-4 rounded-full text-base font-normal w-[173px]">
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Decorated;