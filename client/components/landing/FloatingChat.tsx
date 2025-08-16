"use client";

const FloatingChat = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5519996031818";

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="max-content-wrapper mx-auto h-full relative">
        <button
          onClick={() => window.open(WHATSAPP_URL, "_blank")}
          className="pointer-events-auto absolute bottom-8 right-8 sm:bottom-6 sm:right-6 flex w-16 h-16 justify-center items-center rounded-full bg-[#25D366] shadow-[0_4px_16px_rgba(0,0,0,0.16)] hover:scale-105 transition-all"
          aria-label="Fale conosco no WhatsApp"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.648.873 5.09 2.345 7.057L4 29l7.14-2.302A11.94 11.94 0 0 0 16.003 27c6.63 0 12.003-5.373 12.003-11.997C28.006 8.373 22.633 3 16.003 3Zm0 21.907a9.897 9.897 0 0 1-5.047-1.39l-.36-.215-4.233 1.362 1.378-4.121-.236-.377A9.869 9.869 0 0 1 6.1 15.003c0-5.46 4.443-9.9 9.903-9.9 5.459 0 9.903 4.44 9.903 9.9 0 5.46-4.444 9.904-9.903 9.904Zm5.43-7.414c-.297-.148-1.758-.867-2.03-.964-.273-.099-.473-.148-.673.148-.198.297-.77.964-.943 1.162-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.605.134-.133.297-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.371-.025-.52-.074-.148-.673-1.62-.923-2.217-.243-.58-.49-.501-.673-.51l-.572-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.072.148.198 2.09 3.188 5.064 4.469.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.693.248-1.287.173-1.41-.074-.123-.272-.198-.57-.347Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingChat;
