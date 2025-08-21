import { useEffect } from "react";

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FloorPlanModal({ isOpen, onClose }: FloorPlanModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex items-center justify-center p-4">
      {/* Modal Content */}
      <div className="w-full max-w-[1120px] bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Content */}
        <div className="p-10">
          {/* Header */}
          <div className="flex justify-between items-start gap-6 mb-6">
            <div className="flex flex-col gap-2 flex-1">
              <h2 className="text-studio-dark font-fagun text-2xl md:text-[32px] font-bold leading-[120%]">
                Planta
              </h2>
              <p className="text-studio-dark font-fagun text-lg md:text-2xl font-normal leading-[120%] max-w-[712px]">    Ambientes integrados e varanda social com vista para o jardim.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors flex-shrink-0"
              aria-label="Close floor plan"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Floor Plan Image */}
          <div className="flex justify-center">
            <img
              src="https://github.com/GabrielCarelli/images-studio/blob/main/planta.jpg?raw=true"
              alt="Studio floor plan layouts"
              className="w-full max-w-[670px] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
