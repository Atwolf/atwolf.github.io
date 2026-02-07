import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Projects from './components/Projects'
import PostView from './components/PostView'
import Footer from './components/Footer'

function App() {
  const [activePost, setActivePost] = useState(null)

  return (
    <div className="app">
      <div className="layout">
        <Sidebar />
        <main className="content">
          {activePost ? (
            <PostView
              post={activePost}
              onBack={() => setActivePost(null)}
            />
          ) : (
            <>
              <Posts onSelectPost={setActivePost} />
              <Projects />
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
