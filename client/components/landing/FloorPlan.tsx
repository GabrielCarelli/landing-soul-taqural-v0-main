import {ArrowRight as ArrowForward} from "lucide-react" 

const FloorPlan = () => {

    return(
        <section
        id="planta"
        className="max-w-[1440px] mx-auto px-20 py-24 bg-white"
      >
        <div className="mb-24">
          <h2 className="text-soul-dark text-3xl font-black mb-6">
            Layouts projetados para você
          </h2>
          <p className="text-soul-dark text-xl font-normal max-w-5xl">
            Casas em dois pavimentos, com área privativa de 97m², integrando
            varanda, sala, cozinha e área de serviço. Ideal para famílias que
            buscam bem-estar e funcionalidade.
          </p>
        </div>

        <div className="bg-soul-bg-gray rounded-3xl p-6 md:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Planta Tipo 1 */}
            <div className="flex items-center gap-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b1d18f08b59fa74d6432571cd19450ba246ad248?width=320"
                alt="Planta Tipo 1"
                className="w-40 h-40 rounded object-cover"
              />
              <div>
                <h3 className="text-soul-blue text-xl font-bold mb-2">
                  Planta Tipo 1
                </h3>
                <p className="text-soul-blue text-base mb-6 max-w-[386px] leading-tight">
                  Ambientes integrados e varanda social com vista para o jardim.
                </p>
                <button className="flex items-center gap-1 text-gray-700 text-sm hover:text-soul-dark transition-colors">
                  <span>Ver detalhes</span>
                  <ArrowForward className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Planta Tipo 2 */}
            <div className="flex items-center gap-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6491b0a698b6f2f4172083eb76d4fbb65786b008?width=320"
                alt="Planta Tipo 2"
                className="w-40 h-40 rounded object-cover"
              />
              <div>
                <h3 className="text-gray-800 text-xl font-bold mb-2">
                  Planta Tipo 2
                </h3>
                <p className="text-soul-blue text-base mb-6 max-w-[386px] leading-tight">
                  Ambientes integrados e varanda social com vista para o jardim.
                </p>
                <button className="flex items-center gap-1 text-gray-700 text-sm hover:text-soul-dark transition-colors">
                  <span>Ver detalhes</span>
                  <ArrowForward className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FloorPlan;