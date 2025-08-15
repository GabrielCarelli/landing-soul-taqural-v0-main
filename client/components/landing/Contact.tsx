import { Instagram } from "lucide-react";

const Contact = () => {
    return(
        <section className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="flex items-center gap-20">
          <div className="w-[580px]">
            <div className="mb-6">
              <h2 className="text-soul-dark text-2xl font-black mb-6">
                Quero morar aqui
              </h2>
              <p className="text-soul-gray text-xl font-normal mb-6">
                Incentive o contato com um tom amigável. Lembre-se: quanto mais
                simples o formulário, maior a chance de conversão.
              </p>
              <Instagram className="w-6 h-6 text-soul-dark" />
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-soul-dark text-sm font-normal mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Maria da Silva"
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray"
                />
              </div>

              <div>
                <label className="block text-soul-dark text-sm font-normal mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Campinas"
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray"
                />
              </div>

              <div>
                <label className="block text-soul-dark text-sm font-normal mb-1">
                  Telefone <span className="text-soul-dark">(opcional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-1111"
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray"
                />
              </div>

              <div>
                <label className="block text-soul-dark text-sm font-normal mb-1">
                  Mensagem <span className="text-soul-dark">(opcional)</span>
                </label>
                <textarea
                  placeholder="(11) 99999-1111"
                  rows={3}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-2xl text-base placeholder-soul-light-gray resize-none"
                />
              </div>

              <button className="w-full bg-soul-dark text-white py-4 px-8 rounded-full text-xl font-normal">
                Receber proposta personalizada
              </button>
            </form>
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0484e0ab5bfcfe3a9893d70f576911772b44ee28?width=1240"
            alt="Imagem de contato"
            className="flex-1 h-[605px] object-cover rounded-lg"
          />
        </div>
      </section>
    )
}

export default Contact;