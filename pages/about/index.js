import Title from '/components/Title'
import Navbar from '/components/Navbar/'

export default function About() {
  return (
    <div className="font-montserrat">
      <Title />

      <main className="h-screen">
        <Navbar />

        <section className="w-screen h-full grid md:grid-flow-col md:grid-cols-6 items-center justify-between md:space-x-2 md:px-10">
          <div className="flex-col items-center text-center md:col-span-2">
            <img src="/miguelll.jpg" className="md:w-1/3 md:h-1/3 rounded-full mx-auto" />
            <p className="font-semibold text-lg md:mt-5">Miguel Ferreira (CEO)</p>
            <p>É o que faz as negociações da empresa e aquele que vai falar quando tem uma ideia nova. Se quer uma solução maluca para o seu problema, ele é o seu homem!</p>
          </div>
          <div className="flex-col items-center text-center md:col-span-2">
            <img src="/miguelll.jpg" className="md:w-1/3 md:h-1/3 rounded-full mx-auto" />
            <p className="font-semibold text-lg md:mt-5">Miguel Ferreira (CEO)</p>
            <p>É o que faz as negociações da empresa e aquele que vai falar quando tem uma ideia nova. Se quer uma solução maluca para o seu problema, ele é o seu homem!</p>
          </div>
          <div className="flex-col items-center text-center md:col-span-2">
            <img src="/miguelll.jpg" className="md:w-1/3 md:h-1/3 rounded-full mx-auto" />
            <p className="font-semibold text-lg md:mt-5">Miguel Ferreira (CEO)</p>
            <p>É o que faz as negociações da empresa e aquele que vai falar quando tem uma ideia nova. Se quer uma solução maluca para o seu problema, ele é o seu homem!</p>
          </div>
        </section>
      </main>
    </div>
  )
}