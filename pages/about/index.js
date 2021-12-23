import Script from 'next/script'


const About = () => {

  const showDescription = (index) => {
    let slots = ["slot1", "slot2", "slot3"];
    let colors = ["bg-green-600", "bg-indigo-500", "bg-yellow-600"];

    colors.forEach(function (color) {
      document.body.classList.remove(color);
    });
    document.body.classList.add(colors[index]);

    document.getElementById(slots[index]).style.transition = ".75s"
    document.getElementById(slots[index]).style.marginTop = "0px";

    slots.splice(index, 1);
    slots.forEach(function (slot) {
      slot == "slot2" ? document.getElementById(slot).style.marginTop = window.innerHeight - 90 + "px" : document.getElementById(slot).style.marginTop = "-" + window.innerHeight / 1.1 + "px";
    });
  }

  return (
    <>
      <div className="grid grid-cols-3 z-10">
        <div className="px-4"><a onClick={() => showDescription(0)} id="slot1" className="grid grid-rows-2 transition transition-all duration-700 hover:duration-300 bg-white hover:bg-green-600 text-green-600 hover:text-white w-full h-screen flex">
          <img className="w-60 h-60 mt-24 mx-auto rounded-full row-end-1 border border-avogg border-4" src="https://picsum.photos/200" />
          <div className="row-start-1 mx-auto flex-col justify-center">
            <div className="justify-self-center text-avogg text-lg mt-4">Vasco</div>
            <div className="-mt-2 text-4xl font-bold">O Vegan</div>
          </div>
        </a></div>

        <div className="px-4"><a onClick={() => showDescription(1)} id="slot2" className="grid grid-rows-2 transition transition-all duration-700 hover:duration-300 bg-white hover:bg-indigo-500 text-indigo-500 hover:text-white w-full h-screen flex">
          <img className="w-60 h-60 mt-24 mx-auto rounded-full row-end-1 border border-avogg border-4" src="https://picsum.photos/200" />
          <div className="row-start-1 mx-auto flex-col justify-center">
            <div className="justify-self-center text-lg mt-4">Miguel</div>
            <div className="-mt-2 text-4xl font-bold">Our CEO</div>
          </div>
        </a></div>

        <div className="px-4"><a onClick={() => showDescription(2)} id="slot3" className="grid grid-rows-2 transition transition-all duration-700 hover:duration-300 bg-white hover:bg-yellow-600 text-yellow-600 hover:text-white w-full h-screen flex">
          <img className="w-60 h-60 mt-24 mx-auto rounded-full row-end-1 border border-avogg border-4" src="https://picsum.photos/200" />
          <div className="row-start-1 mx-auto flex-col justify-center">
            <div className="justify-self-center text-avogg text-lg mt-4">Rodrigo</div>
            <div className="-mt-2 text-4xl font-bold">Rodrigo</div>
          </div>
        </a> </div>
      </div>
    </>
  )
}

export default About
