import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* Cabeçalho fixo */}
      <header className="p-4 shadow sticky top-0 bg-white z-10">
        <h1 className="text-xl font-bold text-center">Meu App Mobile</h1>
      </header>

      {/* Conteúdo com rolagem vertical longa */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-16">
        {/* Seção de boas-vindas */}
        <section className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            className="dark:invert"
          />
          <h2 className="text-lg font-semibold">Bem-vindo ao seu app!</h2>
          <p className="text-sm text-gray-600">
            Comece a editar <code className="font-mono">src/app/page.tsx</code> para personalizar.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="bg-gray-100 rounded-xl p-6 text-center">
          <h3 className="text-base font-medium mb-2">Dicas Rápidas</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>📱 Interface pensada para mobile</li>
            <li>⚡ Resposta rápida</li>
            <li>🎨 Fácil de personalizar</li>
          </ul>
        </section>

        {/* Seção 3 - Destaques */}
        <section className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">📌 Destaques</h3>
          <p className="text-sm text-gray-700">
            Explore recursos como rotas, carregamento de imagens, API routes e mais.
          </p>
          <Image
            src="/vercel.svg"
            alt="Logo Vercel"
            width={100}
            height={30}
            className="dark:invert"
          />
        </section>

        {/* Seção 4 - Lista de tarefas */}
        <section>
          <h3 className="text-lg font-semibold mb-2">📋 Lista de tarefas</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
            <li>Conectar com banco de dados</li>
            <li>Adicionar autenticação</li>
            <li>Publicar no Vercel</li>
          </ul>
        </section>

        {/* Seção 5 - Chamada para ação */}
        <section className="flex flex-col gap-4">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-3 rounded-full text-center text-sm font-medium hover:bg-gray-800 transition"
          >
            🚀 Deploy com Vercel
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 py-3 rounded-full text-center text-sm font-medium hover:bg-gray-100 transition"
          >
            📚 Ver Documentação
          </a>
        </section>

        {/* Seção 6 - Espaço extra para rolagem */}
        <section className="h-[500px] flex items-center justify-center bg-gray-50 rounded-xl">
          <p className="text-gray-400 text-sm">Rolou até aqui? 👋</p>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="p-4 text-xs text-gray-500 text-center">
        Feito com ❤️ usando Next.js
      </footer>
    </div>
  );
}
