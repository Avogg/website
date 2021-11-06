import Link from 'next/link'

const AppBar = ({children}) => {
    return (
        <div>
            <nav className="bg-avogg h-12">
                {children}
            </nav> 
        </div>
    )
}

export default AppBar
