export default function Navbar(){
    return(
        <nav className="navbar">
            <h1>Oshan's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="/create" style = {{
                    color:'white',
                    borderRadius:'8px',
                    backgroundColor:'#6735f1'
                }}>Create New</a>
            </div>
        </nav>
    );
} 