import { useEffect } from "react";

type SelectedPlan = {
  title: string;
  description?: string;
  imageSrc: string;
};

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Dados do tipo selecionado */
  plan: SelectedPlan | null;
}

export function FloorPlanModal({ isOpen, onClose, plan }: FloorPlanModalProps) {
  // Fechar com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose} // fecha ao clicar no backdrop
      role="dialog"
      aria-modal="true"
      aria-labelledby="floorplan-title"
    >
      {/* Modal Content */}
      <div
        className="w-full max-w-[1120px] bg-white rounded-lg shadow-2xl max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
      >
        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="flex justify-between items-start gap-6 mb-6">
            <div className="flex flex-col gap-2 flex-1">
              <h2
                id="floorplan-title"
                className="text-studio-dark font-fagun text-2xl md:text-[32px] font-bold leading-[120%]"
              >
                {plan.title || "Detalhe da planta"}
              </h2>
              {plan.description ? (
                <p className="text-studio-dark font-fagun text-lg md:text-2xl font-normal leading-[120%] max-w-[712px]">
                  {plan.description}
                </p>
              ) : null}
            </div>

            <button
              onClick={onClose}
              className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors flex-shrink-0"
              aria-label="Fechar modal de planta"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Floor Plan Image (diminuída e sem scroll) */}
          <div className="flex justify-center">
            <img
              src={plan.imageSrc}
              alt={`Planta selecionada: ${plan.title}`}
              className="w-full max-w-[560px] md:max-w-[620px] lg:max-w-[670px] max-h-[60vh] object-contain rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
