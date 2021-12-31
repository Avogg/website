import Script from 'next/script'
import useSWR from 'swr';

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

const About = () => {

  console.log("Oh hello there! Funny you're here!");
  console.log("Look, we're making calls to the github api but we only use it in the profile pictures.");
  console.log("This was mainly to show that we can work with apis so no big deal");

  console.log("Anyways, if you see this message you should give us a call! It means you're interested ;)");

  const { data } = useSWR('/api/github', fetcher);

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
        <div className="px-4"><a onClick={() => showDescription(0)} id="slot1" className="grid grid-rows-3 transition transition-all duration-700 hover:duration-300 bg-white text-avogg  hover:bg-green-600 text-green-600 hover:text-white w-full h-screen flex">
          <img className="w-60 h-60 mt-24 mx-auto rounded-full row-end-1 border border-avogg border-4 bg-white" src={data ? data.vasco.img : "logo.png"} />
          <div className="row-start-1 row-end-2 mx-auto flex-col justify-center">
            <div className="text-lg mt-2">Vasco</div>
            <div className="-mt-2 text-4xl font-bold">O Vegan (CTO)</div>
          </div>
          <div className="text-xs text-center -mt-2 px-10">{data ? data.vasco.bio : "a carregar.."}</div>
        </a></div>

        <div className="px-4"><a onClick={() => showDescription(1)} id="slot2" className="grid grid-rows-3 transition transition-all duration-700 hover:duration-300 bg-white hover:bg-indigo-500 text-indigo-500 hover:text-white w-full h-screen flex">
          <img className="w-60 h-60 mt-24 mx-auto rounded-full row-end-1 border border-avogg border-4 bg-white" src={data ? data.miguel.img : "logo.png"} />
          <div className="row-start-1 row-end-2 mx-auto flex-col justify-center">
            <div className="text-lg mt-2">Miguel</div>
            <div className="-mt-2 text-4xl font-bold">Don Avogg (CEO)</div>
          </div>
          <div className="text-xs text-center -mt-2 px-10">{data ? data.miguel.bio : "a carregar.."}</div>

        </a></div>

        <div className="px-4"><a onClick={() => showDescription(2)} id="slot3" className="grid grid-rows-3 transition transition-all duration-700 hover:duration-300 bg-white text-avogg  hover:bg-yellow-600 text-yellow-600 hover:text-white w-full h-screen flex">
          <img className="w-60 h-60 mt-24 mx-auto rounded-full row-end-1 border border-avogg border-4 bg-white" src={data ? data.rodrigo.img : "logo.png"} />
          <div className="row-start-1 row-end-2 mx-auto flex-col justify-center">
            <div className="text-lg mt-2">Rodrigo</div>
            <div className="-mt-2 text-4xl font-bold">Rodrigo (o estagiário)</div>
          </div>
          <div className="text-xs text-center -mt-2 px-10">{data ? data.rodrigo.bio : "a carregar.."}</div>
        </a> </div>
      </div>
    </>
  )
}

export default About
