import { useState, useEffect, useCallback } from "react";

interface GalleryModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryModalProps) {
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

  // Sincroniza índice vindo de fora
  useEffect(() => {
    setDisplayIndex(currentIndex);
  }, [currentIndex]);

  // Bloqueia scroll do body quando o modal abre
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const goTo = useCallback(
    (nextIndex: number) => {
      const bounded =
        (nextIndex + images.length) % images.length; // wrap-around
      setDisplayIndex(bounded);
      onNavigate(bounded);
    },
    [images.length, onNavigate]
  );

  const handlePrevious = () => goTo(displayIndex - 1);
  const handleNext = () => goTo(displayIndex + 1);

  const handleThumbnailClick = (index: number) => goTo(index);

  // Teclado
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, displayIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/30 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
    >
      <div className="relative w-full max-w-[980px] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar galeria"
          className="absolute right-3 top-3 grid place-items-center w-8 h-8 rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-dark"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-studio-dark"
            aria-hidden="true"
          >
            <path
              d="M6.4 18.9924L5 17.5924L10.6 11.9924L5 6.39243L6.4 4.99243L12 10.5924L17.6 4.99243L19 6.39243L13.4 11.9924L19 17.5924L17.6 18.9924L12 13.3924L6.4 18.9924Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Texto de topo */}
        <div className="px-6 pt-8 pb-4 text-center">
          <p className="text-studio-gray font-fagun text-xs sm:text-sm">
            Explore os ambientes antes de visitar pessoalmente
          </p>
          <h2 className="text-studio-dark font-fagun text-lg sm:text-2xl font-black mt-1">
            Veja cada detalhe do seu futuro lar
          </h2>
          <p className="text-studio-gray font-fagun text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto mt-3">
            Conheça os detalhes do empreendimento em imagens que destacam o conforto, a praticidade e o estilo de vida que o Soul Taquaral oferece. Cada ambiente foi pensado para atender às necessidades da sua família, com plantas inteligentes, acabamentos modernos e espaços otimizados para o dia a dia
          </p>
        </div>

        {/* Área principal da imagem */}
        <div className="relative px-4 sm:px-8 pb-6">
          <div className="relative mx-auto max-w-[720px]">
            {/* Imagem */}
            <img
              src={images[displayIndex]?.replace("width=580", "width=1200")}
              alt={`Foto ${displayIndex + 1} do interior do studio`}
              className="w-full h-auto max-h-[420px] object-cover rounded-lg"
              loading="eager"
              decoding="async"
            />

            {/* Setas laterais (ghost) */}
            <button
              onClick={handlePrevious}
              aria-label="Imagem anterior"
              className="absolute left-[-42px] top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-dark"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M17.8848 20.2224L16.1148 21.9924L6.11477 11.9924L16.1148 1.99243L17.8848 3.76243L9.65477 11.9924L17.8848 20.2224Z"
                  fill="#161F2E"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Próxima imagem"
              className="absolute right-[-42px] top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-dark"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.11523 20.2224L7.88523 21.9924L17.8852 11.9924L7.88523 1.99243L6.11523 3.76243L14.3452 11.9924L6.11523 20.2224Z"
                  fill="#161F2E"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="px-4 sm:px-8 pb-8">
          <div className="flex items-center justify-center gap-3 overflow-x-auto">
            {images.map((src, index) => {
              const isActive = index === displayIndex;
              return (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`Selecionar miniatura ${index + 1}`}
                  className={[
                    "flex-shrink-0 rounded-lg overflow-hidden transition-all",
                    "border",
                    isActive
                      ? "border-studio-dark shadow-sm"
                      : "border-gray-200 hover:border-studio-gray",
                  ].join(" ")}
                >
                  <img
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    className="w-[92px] h-[64px] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
