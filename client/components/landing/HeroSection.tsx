import { MoveUpRight, Home, BedSingle } from "lucide-react";

const HeroSection = () => {

    return(
        <section className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9230a1952bf33314dd16653f2b1913a001bbde00?width=2880"
            alt="Casa do Soul Taquaral"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        {/* Delivery Tag */}
        <div className="absolute top-6 right-[80px] bg-soul-yellow px-4 py-2 rounded shadow-lg flex items-center gap-1">
          <span className="text-soul-secondary text-base font-normal">
            Previsão de entrega em:
          </span>
          <span className="text-soul-secondary text-xl font-black">
            00/00/0000
          </span>
        </div>

        {/* Hero Content */}
        <div className="absolute left-[60px] top-[95px] max-w-[560px] text-white">
          <div className="space-y-6">
            <h1 className="text-5xl font-black leading-[1.4]">
              More com exclusividade no Soul Taquaral
            </h1>
            <p className="text-xl font-normal">
              Casas com varanda social, jardim privativo e lazer completo no
              bairro mais desejado de Campinas.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MoveUpRight className="w-6 h-6" />
                <span className="text-xl">97m²</span>
              </div>
              <div className="flex items-center gap-4">
                <Home className="w-6 h-6" />
                <span className="text-xl">12 unidades</span>
              </div>
              <div className="flex items-center gap-4">
                <BedSingle className="w-6 h-6" />
                <span className="text-xl">3 dormitórios</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-0">
              <button className="bg-white text-soul-dark px-8 py-4 rounded-full text-base font-light w-[240px] -mr-10 z-10">
                (11) 99999-1111
              </button>
              <button className="bg-soul-secondary text-white px-8 py-4 rounded-full text-base font-normal w-[173px]">
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSection;