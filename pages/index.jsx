import Head from 'next/head';

export default function Home() {
  const whatsappLink =
    'https://wa.me/5551983328343?text=Olá%2C%20vim%20pelo%20site%20QuadradeAula.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar.';

  return (
    <>
      <Head>
        <title>Quadra de Aula</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-900 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <section className="mb-24">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Tomada de decisão mais clara, rápida e segura dentro da escola.
            </h1>

            <p className="text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
              Ajudo escolas, professores e famílias a resolver problemas reais
              com soluções simples, práticas e aplicáveis.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition"
              >
                Falar no WhatsApp
              </a>

              <a
                href="#projetos"
                className="px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition"
              >
                Ver projetos
              </a>
            </div>
          </section>

          <section className="mb-28 flex flex-col md:flex-row items-center gap-12">
            <img
              src="/eu.png"
              alt="Andréia Moraes"
              className="w-64 h-80 rounded-2xl object-cover object-top shadow-xl"
            />

            <div>
              <h2 className="text-3xl font-bold mb-2">Andréia Moraes</h2>

              <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                Ajudo escolas, professores e famílias a resolver problemas com
                clareza e tomar decisões que realmente funcionam.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Atuação direta na rede pública, com foco em soluções aplicáveis
                no dia a dia escolar.
              </p>

              <p className="text-lg italic text-gray-500 mt-3">
                Clareza prática para quem precisa decidir.
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Mais de 1.500 alunos impactados com soluções aplicadas na
                prática escolar.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Quem sou eu</h2>

            <p className="text-gray-700 leading-relaxed max-w-2xl">
              Sou supervisora pedagógica e atuo diretamente com professores e
              gestão escolar. Minha especialidade é transformar situações
              complexas em soluções simples, práticas e aplicáveis.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Como posso ajudar</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Palestras</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Formações práticas sobre aprendizagem, comportamento e
                  organização pedagógica.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">
                  Mentoria para pais
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Orientação prática para desenvolvimento, rotina e dificuldades
                  escolares.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">
                  Soluções escolares
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Organização de processos, automação simples e melhoria da
                  rotina pedagógica.
                </p>
              </div>
            </div>
          </section>

          <section id="projetos" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Projetos</h2>

            <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">
                Automação de envio de e-mails para alunos
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Antes</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Processo manual para mais de 1.500 alunos, com alto risco de
                    erro, retrabalho e perda de tempo da equipe.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Depois</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Processo automatizado, padronizado e com grande economia de
                    tempo na rotina escolar.
                  </p>
                  <p className="mt-2 text-green-600 font-semibold">
                    Redução significativa de tempo operacional da equipe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center bg-white/80 backdrop-blur p-10 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">
              Você não precisa resolver isso sozinho.
            </h2>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vamos entender o teu cenário e encontrar uma solução prática.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-black text-white rounded-xl hover:opacity-80 transition"
            >
              Falar no WhatsApp
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
