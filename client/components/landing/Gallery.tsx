const Gallery = () => {

    return(
        <section id="galeria" className="max-w-[1440px] mx-auto py-20 px-20">
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

        <div className="relative">
          {/* First Row */}
          <div className="flex justify-center gap-10 mb-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e6bbc647fdd164eb4cbb35b2bbc3023eb6b27c6c?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/76288cb184c6e8fe93e3e1ef494fb327eb231c43?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0951d0e0522945a86bddaeedd0f48a724103a727?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/25174d14f09e04a51e61eb8d77f52b06142dcb13?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
          </div>

          {/* Second Row */}
          <div className="flex justify-center gap-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c5bf8de6e275a530c8ac58f7c7b984006903a891?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/96223770387889d1e77352744ab0955f14ae3ecc?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4cf70a1030e46141c5fec9261f0bd57d49ec18a2?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d9d4689397a4d085fdf3313b63f9c5b58153c7e0?width=580"
              alt="Interior"
              className="w-[290px] h-[200px] rounded-2xl object-cover"
            />
          </div>

          {/* Gradient overlays */}
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        </div>
      </section>
    )
}

export default Gallery;