import { ArrowLeft, ArrowRight } from "lucide-react";

const Amenities = () => {
    
    return(
        <section id="comodidades" className="max-w-[1440px] mx-auto px-20 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div className="max-w-4xl">
            <h2 className="text-soul-dark text-3xl font-black mb-6">
              Mais do que uma casa — um jeito de viver
            </h2>
            <p className="text-soul-dark text-xl font-normal">
              Do lazer ao conforto e tranquilidade, o Soul Taquaral reúne
              diferenciais que fazem a diferença no dia a dia.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <ArrowLeft className="w-6 h-6 text-soul-dark cursor-pointer" />
            <ArrowRight className="w-6 h-6 text-soul-dark cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4">
          {/* Amenity Cards */}
          {[
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/5ebdb8299e4c514277e6587fbc0d20b3dc58f160?width=700",
              title: "Jardim privativo",
              description:
                "Um refúgio verde exclusivo para você relaxar, cultivar ou reunir os amigos.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/5be748cf170b0ae258f7e49ae4bcfd870e026dbb?width=700",
              title: "Espaço pet place",
              description:
                "Área para o bem-estar dos pets, com ambiente seguro para lazer e socialização.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/486bfd27c2b2360115e04cc48ab01c7a1d4df9d1?width=700",
              title: "Painéis Solares",
              description:
                "Solução sustentável para economia de energia e menor impacto ambiental.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/489c2d30f30f909aaa25cbcd7f77769fbf1ab2af?width=700",
              title: "Roof top com vista livre",
              description:
                "Espaço coletivo no topo do empreendimento com visual privilegiado.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/e93243ea292c172b53281f09bd0fad308c8e2fa6?width=700",
              title: "Salão de festas",
              description:
                "Ambiente mobiliado para confraternizações com família e amigos.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/7251045f7539214b327d2ac14e0c24c55cff01d1?width=700",
              title: "Garagem privativa",
              description:
                "Vagas privativas e protegidas para mais comodidade e segurança no dia a dia.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/5b85c265a9eb3ee238a494b4c5573d8a4d17a976?width=700",
              title: "Guarita e segurança",
              description:
                "Portaria com acesso controlado e sistema de segurança para sua tranquilidade.",
            },
          ].map((amenity, index) => (
            <div
              key={index}
              className="relative w-[350px] h-[490px] flex-shrink-0"
            >
              <img
                src={amenity.image}
                alt={amenity.title}
                className="w-full h-[450px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-4 right-4 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-soul-dark text-base font-bold mb-2">
                  {amenity.title}
                </h3>
                <p className="text-soul-dark text-sm leading-tight">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Amenities;