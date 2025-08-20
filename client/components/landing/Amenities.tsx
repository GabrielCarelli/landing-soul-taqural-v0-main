import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Amenities = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const { clientWidth } = el;
    const offset = direction === "left" ? -clientWidth : clientWidth;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  const items = [
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
        "Portaria com acesso controlado e sistema de segurança",
    },
  ];

  return (
    <section
      id="comodidades"
      className="max-w-[1440px] mx-auto px-6 sm:px-6 md:px-10 lg:px-20 py-20"
    >
      {/* Título + Setas */}
      <div className="flex justify-between items-center mb-6">
        <div className="max-w-4xl">
          <h2 className="text-soul-dark text-[32px] font-black">
            Mais do que uma casa — um jeito de viver
          </h2>
          <p className="text-soul-dark text-lg mt-2">
            Do lazer ao conforto e tranquilidade, o Soul Taquaral reúne
            diferenciais que fazem a diferença no dia a dia.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="p-2 rounded hover:bg-black/5"
          >
            <ArrowLeft className="w-6 h-6 text-soul-dark hover:text-soul-secondary" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="p-2 rounded hover:bg-black/5"
          >
            <ArrowRight className="w-6 h-6 text-soul-dark hover:text-soul-secondary" />
          </button>
        </div>
      </div>

      {/* Carrossel com snap e scrollbar oculta */}
      <div className="relative">
        <div
          ref={carouselRef}
          className={[
            "flex gap-8 overflow-x-hidden snap-x snap-mandatory",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {items.map((amenity, index) => (
            <div
              key={index}
              className="relative snap-start w-[350px] flex-shrink-0 flex flex-col items-center pb-12"
            >
              <img
                src={amenity.image}
                alt={amenity.title}
                className="w-full h-[450px] rounded-lg object-cover z-0"
              />
              {/* Card flutuante padronizado (sem overflow) */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[300px] min-h-[110px] rounded-lg bg-white shadow p-4 z-20 flex flex-col gap-1 overflow-hidden">
                <h3 className="text-soul-dark text-base font-bold leading-snug line-clamp-2">
                  {amenity.title}
                </h3>
                <p className="text-soul-dark text-sm leading-snug line-clamp-2">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
