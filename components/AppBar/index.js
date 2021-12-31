import PageLink from "/components/PageLink";

const AppBar = ({ children }) => {
    return (
        <div className="grid grid-rows-2">
            <div className="flex bg-avogg h-16 z-40 px-4">
                <div className="my-auto space-x-4">
                    <PageLink location="/" label="Home"/> 
                    <PageLink location="/about" label="Sobre nós"/> 
                    <PageLink location="/projects" label="Projetos"/>
                    <PageLink location="/contacts" label="Contactos"/>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AppBar;
