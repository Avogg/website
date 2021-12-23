import Link from 'next/link'

const AppBar = ({ children }) => {

    function setToWhite() {

        let colors = ["bg-green-600", "bg-indigo-500", "bg-yellow-600"];
        document.body.classList.remove("duration-300");
        colors.forEach(function (color) {
            document.body.classList.remove(color);
        });

        document.body.classList.add("duration-300");

    }

    return (
        <div className="grid grid-rows-2">
            <div className="row-end-1 bg-avogg h-12 z-40">
                <ul className="flex space-x-4 py-3 ml-4">
                    <li className="">
                        <Link href="/"><a onClick={() => setToWhite()} className="text-white hover:text-black">Home</a></Link>
                    </li>
                    <li className="">
                        <Link href="/about"><a className="text-white hover:text-black">Somos nós</a></Link>
                    </li>
                    <li className="">
                        <Link href="/projects"><a onClick={() => setToWhite()} className="text-white hover:text-black">Projetos</a></Link>
                    </li>
                    <li className="">
                        <Link href="/contacts"><a onClick={() => setToWhite()} className="text-white hover:text-black">Contactos</a></Link>
                    </li>
                </ul>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default AppBar
