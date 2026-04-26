import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quadra de Aula</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-900 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* HERO */}
          <section className="mb-24">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Educação real.
              <br />
              Clareza prática.
              <br />
              Soluções inteligentes.
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Para professores, gestores e famílias que querem evoluir — mesmo
              quando o sistema não ajuda.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/andreiammoraes_/"
                target="_blank"
                className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-80"
              >
                Acompanhar
              </a>

              <a
                href="https://www.linkedin.com/in/andreia-mdm-/"
                target="_blank"
                className="px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </section>

          {/* SOBRE */}
          <section className="mb-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Quem sou eu</h2>
              <p className="text-gray-700 leading-relaxed">
                Sou supervisora pedagógica e atuo diretamente com professores e
                gestão escolar. Minha especialidade é transformar situações
                complexas em soluções simples, práticas e aplicáveis.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-600">
                “Transformo complexidade em clareza prática.”
              </p>
            </div>
          </section>

          {/* PROJETOS */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Projetos</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-2">
                  Automação de e-mails
                </h3>
                <p className="text-gray-600">
                  Automatização do envio para mais de 1.500 alunos, reduzindo
                  erros e tempo operacional.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md opacity-70">
                <h3 className="text-xl font-semibold mb-2">
                  Sistema de conselhos (em desenvolvimento)
                </h3>
                <p className="text-gray-600">
                  Síntese automática de avaliações por turma.
                </p>
              </div>
            </div>
          </section>

          {/* SERVIÇOS */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Como posso ajudar</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">Palestras</h3>
                <p className="text-gray-600 text-sm">
                  Para profissionais da educação
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">Mentoria</h3>
                <p className="text-gray-600 text-sm">Para pais</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">Soluções</h3>
                <p className="text-gray-600 text-sm">Organização escolar</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
