import Image from 'next/image'

const Projects = () => {
    return (
      <div>
        <main className="">
          <section className="h-screen flex justify-center items-center">

              <div className="grid grid-cols-1 justify-items-center content-center">
                <div className="relative">
                  <div className="z-0 mix-blend-screen text-avogg -mb-2 text-3xl font-semibold"> Our golden boy</div> 
                </div>
                <div className="shadow-2xl p-10 bg-avogg rounded">
                    <a href="http://vygado.pt"><img src="/vygado.png" className="rounded" /></a>
                  </div>
              </div>

          </section>
        </main>
      </div>
    )
  }
  
  export default Projects
  