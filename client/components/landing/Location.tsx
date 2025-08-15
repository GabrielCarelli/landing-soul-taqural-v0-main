import { CheckCircle, MapPin } from "lucide-react";

const Location = () => {
    return(
        <section id="localizacao" className="max-w-[1440px] mx-auto mb-20">
        <div className="text-center mb-6">
          <h2 className="text-soul-dark text-3xl font-black mb-6">
            A vida que você quer no bairro que você ama
          </h2>
          <p className="text-soul-dark text-xl font-normal max-w-5xl mx-auto">
            Localizado na charmosa Rua Fernão Lopes, o Soul Taquaral coloca você
            próximo à Lagoa, escolas, padarias, supermercados e tudo o que
            importa.
          </p>
        </div>

        <div className="relative">
          {/* Address Badge */}
          <div className="flex items-center justify-center gap-2 bg-white/40 backdrop-blur-sm px-14 py-4 rounded-full mb-0 relative z-10 mx-auto w-fit">
            <MapPin className="w-6 h-6 text-soul-dark" />
            <span className="text-soul-gray text-base">
              Rua Fernão Lopes, 91 – Taquaral – Campinas/SP
            </span>
          </div>

          {/* Map Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e563373a49c87f5bcbb34b6b423502f43d870499?width=2880"
            alt="Mapa da localização"
            className="w-full h-[560px] object-cover rounded-[32px] -mt-6"
          />

          {/* Location Points */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-sm rounded-[32px] p-6 mx-14 mb-6">
            <div className="flex justify-center gap-20">
              {[
                {
                  title: "PUC",
                  description:
                    "A apenas 2 min do campus principal da PUC-Campinas.",
                },
                {
                  title: "Hospital Madre Theodora",
                  description: "Atendimento médico a 4 min de distância.",
                },
                {
                  title: "Oxxo Puccamp",
                  description: "Conveniência 24h logo ali na esquina.",
                },
                {
                  title: "Ronaldo Academy",
                  description:
                    "Escola de futebol para crianças, bem pertinho do prédio.",
                },
              ].map((location, index) => (
                <div key={index} className="flex items-start gap-2 w-60">
                  <CheckCircle className="w-6 h-6 text-soul-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-soul-dark text-xl font-bold leading-tight">
                      {location.title}
                    </h3>
                    <p className="text-soul-dark text-base leading-tight">
                      {location.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Location;