import NavBar from '../components/NavBar'
import Search from '../components/home/Search'
import History from '../components/home/History'

const Home = () => {

  document.querySelector("body").removeAttribute('class')

  return (
    <>
      <NavBar />
      <main className="home">
        <h2 className="home__title">Search your town and look the weather</h2>
        <Search />
        <History />
      </main>
    </>
  )
}

export default Home