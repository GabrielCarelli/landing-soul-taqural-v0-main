import { useState, useCallback, useEffect } from "react";
import { FloorPlanModal } from "../FloorPlanModal";

/** Hook do modal (reutilizável) */
function useFloorPlanModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  return { isOpen, openModal, closeModal };
}

const FLOORPLAN = {
  title: "Studio funcional com 24m²",
  description:
    "Ambientes integrados e varanda social com vista para o jardim.",
  image:
    "https://github.com/GabrielCarelli/images-studio/blob/main/planta.jpg?raw=true",
};

const FloorPlan = () => {
  const modal = useFloorPlanModal();

  useEffect(() => {
    if (!modal.isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [modal.isOpen]);

  return (
    <>
      <section
        id="planta"
        className="w-full max-w-full px-6 sm:px-6 md:px-10 lg:px-20 py-12"
      >
        <div className="mx-auto flex w-full items-start justify-between gap-8 lg:gap-12">
          <div className="w-full lg:max-w-[560px]">
            <h2 className="text-studio-dark font-fagun text-3xl sm:text-4xl lg:text-[40px] leading-tight font-black">
              Layouts pensados para sua rotina
            </h2>
            <p className="mt-4 text-studio-gray font-fagun text-base sm:text-lg lg:text-xl max-w-[520px]">
              Casas em dois pavimentos, com área privativa de 97m², integrando varanda, sala, cozinha e área de serviço. Ideal para famílias que buscam bem-estar e funcionalidade.
            </p>
          </div>

          <article
            className="
              hidden md:block w-full max-w-[720px]
              rounded-[24px] bg-studio-gray-bg
              shadow-sm
              px-6 lg:px-8 py-6
            "
            aria-label="Planta destaque"
          >
            <div className="flex items-center gap-5 lg:gap-6">
              <div className="shrink-0">
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src={FLOORPLAN.image}
                    alt="Planta baixa do studio funcional"
                    className="w-[84px] h-[84px] object-cover rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-studio-dark font-fagun text-lg sm:text-xl font-extrabold leading-tight">
                  Planta 97m<sup className="align-super text-xs">2</sup>
                </h3>
                <p className="mt-1 text-studio-dark/80 font-fagun text-sm sm:text-base leading-snug">
                  {FLOORPLAN.description}
                </p>

                <button
                  type="button"
                  onClick={modal.openModal}
                  className="
                    mt-4 inline-flex items-center gap-2
                    text-studio-dark font-fagun text-sm sm:text-base
                    hover:opacity-90 transition
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-dark/40 rounded-md
                  "
                  aria-label="Ver detalhes da planta"
                >
                  Ver detalhes
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 21"
                    fill="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-0 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M13.4788 11.667H3.33301V10.0003H13.4788L8.81217 5.33366L9.99967 4.16699L16.6663 10.8337L9.99967 17.5003L8.81217 16.3337L13.4788 11.667Z"
                      fill="#161F2E"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        <article
          className="
            md:hidden mt-6 w-full rounded-[24px] bg-studio-gray-bg shadow-sm
            px-5 py-6
          "
          aria-label="Planta destaque"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white p-2 shadow-sm shrink-0">
              <img
                src={FLOORPLAN.image}
                alt="Planta baixa do studio funcional"
                className="w-[76px] h-[76px] object-cover rounded-md"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-studio-dark font-fagun text-lg font-extrabold leading-tight">
                Studio funcional com 24m<sup className="align-super text-[10px]">2</sup>
              </h3>
              <p className="mt-1 text-studio-dark/80 font-fagun text-sm leading-snug">
                {FLOORPLAN.description}
              </p>

              <button
                type="button"
                onClick={modal.openModal}
                className="mt-4 inline-flex items-center gap-1.5 text-studio-dark font-fagun text-sm hover:opacity-90 transition"
                aria-label="Ver detalhes da planta"
              >
                Ver detalhes
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 21"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4788 11.667H3.33301V10.0003H13.4788L8.81217 5.33366L9.99967 4.16699L16.6663 10.8337L9.99967 17.5003L8.81217 16.3337L13.4788 11.667Z"
                    fill="#161F2E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </section>

      <FloorPlanModal isOpen={modal.isOpen} onClose={modal.closeModal} />
    </>
  );
};

export default FloorPlan;
