import { useState, useCallback, KeyboardEvent, memo } from "react";
import { GalleryModal } from "../GalleryModal";

/** Imagens originais da sua gallery */
const GALLERY_IMAGES: string[] = [
  "https://api.builder.io/api/v1/image/assets/TEMP/e6bbc647fdd164eb4cbb35b2bbc3023eb6b27c6c?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/76288cb184c6e8fe93e3e1ef494fb327eb231c43?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/0951d0e0522945a86bddaeedd0f48a724103a727?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/25174d14f09e04a51e61eb8d77f52b06142dcb13?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/c5bf8de6e275a530c8ac58f7c7b984006903a891?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/96223770387889d1e77352744ab0955f14ae3ecc?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/4cf70a1030e46141c5fec9261f0bd57d49ec18a2?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/d9d4689397a4d085fdf3313b63f9c5b58153c7e0?width=580",
];

const CARD_CLASSES =
  "w-[290px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0 hover:opacity-90 focus-visible:opacity-90 transition-opacity outline-none";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function buildAlt(index: number) {
  return `Foto do interior — imagem ${index + 1}`;
}

/** ========= Thumbnail ========= */
type ImageThumbProps = {
  src: string;
  index: number;
  onOpen: (index: number) => void;
};

const ImageThumb = memo(({ src, index, onOpen }: ImageThumbProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(index);
    }
  };
  return (
    <button
      type="button"
      aria-label={`Abrir imagem ${index + 1} da galeria em tela cheia`}
      title="Ver imagem em tela cheia"
      className={CARD_CLASSES}
      onClick={() => onOpen(index)}
      onKeyDown={handleKeyDown}
    >
      <img
        src={src}
        alt={buildAlt(index)}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </button>
  );
});
ImageThumb.displayName = "ImageThumb";

/** ========= Gallery ========= */
const Gallery = () => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalAt = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsGalleryModalOpen(false);
  }, []);

  // 2 linhas de 4, com scroll horizontal e scrollbar oculta (cross-browser)
  const rows = chunkArray(GALLERY_IMAGES, 4);

  return (
    <section id="galeria" className="max-w-[1440px] mx-auto py-20 px-20">
      {/* Header original preservado */}
      <div className="text-center mb-10">
        <p className="text-soul-dark text-xl font-normal mb-1">
          Um novo estilo de viver bem
        </p>
        <h2 className="text-soul-dark text-3xl font-black mb-4 max-w-4xl mx-auto">
          Explore o interior das casas, os jardins e os espaços de lazer com
          acabamento moderno e arquitetura autoral.
        </h2>
        <p className="text-soul-dark text-xl font-normal max-w-4xl mx-auto">
          O Soul Taquaral une conforto, privacidade e áreas comuns que
          valorizam a convivência. Conheça cada detalhe.
        </p>
      </div>

      {/* Grid horizontal scroll com scrollbar oculta */}
      <div className="relative w-full">
        <div className="flex flex-col gap-10 w-full">
          {rows.map((row, rowIdx) => (
            <div
              key={`row-${rowIdx}`}
              className={[
                "flex justify-center items-center gap-10 px-0", // espaçamento como no seu layout
                "overflow-x-auto overflow-y-hidden", // scroll apenas horizontal
                "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", // esconder scrollbar
              ].join(" ")}
            >
              {row.map((src, i) => {
                const index = rowIdx * 4 + i;
                return (
                  <ImageThumb
                    key={`${src}-${index}`}
                    src={src}
                    index={index}
                    onOpen={openModalAt}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Gradientes laterais preservados */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent"
        />
      </div>

      {/* Modal */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={closeModal}
        images={GALLERY_IMAGES}
        currentIndex={currentImageIndex}
        onNavigate={(index: number) => {
          // navegação segura (caso o seu modal use wrap-around ou índices diretos)
          const clamped = Math.max(0, Math.min(GALLERY_IMAGES.length - 1, index));
          setCurrentImageIndex(clamped);
        }}
      />
    </section>
  );
};

export default Gallery;
