import Link from 'next/link';

export default function PageLink({location, label}) {

    function setToWhite() {
        let colors = ["bg-green-600", "bg-indigo-500", "bg-yellow-600"];
        document.body.classList.remove("duration-300");
        colors.forEach(function (color) {
            document.body.classList.remove(color);
        });

        document.body.classList.add("duration-300");
    }
    
    return(
        <Link href={location}>
            <a onClick={() => setToWhite()} className="text-white hover:text-avogg-heavy font-semibold">{label}</a>
        </Link>
    );
}