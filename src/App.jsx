import Header from './components/Header'
import About from './components/About'
import Posts from './components/Posts'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Posts />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
