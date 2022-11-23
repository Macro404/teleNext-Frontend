import Link from "next/link";
import '../styles/layout.css'

export default function RootLayout({ children}) {


    return (
      <html lang="en">
        <head>
        <meta name="google-site-verification" content="VrGFXZsaLLIQTgGyxIUQ6qWYbfIYZPfVsCXZDCny4OU" />
        </head>
        <body>
            <nav className="nav-bar">
            <Link href='/' className="home-link link">
            <h1>teleNext</h1>
            </Link>
            <Link href='/phones' className="phones-link link">
            <h1>Phones</h1>
            </Link>
            <Link href='/about_us' className="about-us-link link">
            <h1>About us</h1>
            </Link>
            <Link href='/faq' className="faq-link link">
            <h1>FAQ</h1>
            </Link>
            </nav>
            
            <main className="main-container">
                {children}
            </main>
            <footer className="footer">
                <a className="github-link" href="https://github.com/Macro404/">Marcus Westlund@github</a>
                <a className="github-link" href="https://github.com/michaelvedestig/">Michael Vedestig@github</a>
            </footer>
            </body>
      </html>
    );
  }
