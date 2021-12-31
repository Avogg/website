
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <section className="w-screen h-screen">
          <div className="grid grid-cols-2 md:grid-flow-row h-full">
            <div className="flex md:flex-col md:col-span-1 items-left justify-center md:px-16">
              <img src="/logo.png" className="md:w-1/5 md:mb-10" />
              <p className="md:text-5xl md:leading-snug font-bold">'Cause it's good to be different!</p>
              <p className="md:text-xl md:leading-wide md:mt-5">Se a sua empresa precisa de um software, nós temos a solução!</p>
              <div className="grid md:grid-cols-3 space-between items-center justify-center md:space-x-5 md:mt-20">
                <Link href="/about">
                  <p className="bg-avogg hover:bg-avogg-heavy text-white font-semibold md:px-5 md:py-4 text-center cursor-pointer rounded-md">Sobre nós</p>
                </Link>
                <Link href="/projects">
                  <p className="bg-avogg hover:bg-avogg-heavy text-white font-semibold md:px-5 md:py-4 text-center cursor-pointer rounded-md">Projetos</p>
                </Link>
                <Link href="/about">
                  <p className="bg-avogg hover:bg-avogg-heavy text-white font-semibold md:px-5 md:py-4 text-center cursor-pointer rounded-md">Contactos</p>
                </Link>
              </div>
            </div>
            <div className="flex md:flex-col md:col-span-1 bg-avogg items-center justify-center">
              <img src="/home-vector.svg" className="md:w-1/2" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


