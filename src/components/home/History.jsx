import { useEffect, useState } from 'react'
import { IoMdTrash } from 'react-icons/io'
import HistoryCard from './HistoryCard'

const History = () => {

  const [history, setHistory] = useState([])

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('weatherKey'))
    if(res) {
      setHistory(res.reverse())
    }
  }, [])

  const clearHistory = () => {
    localStorage.removeItem('weatherKey')
    setHistory([])
  }

  return (
    <>
    {history.length !== 0 ? (
    <section className="history">
      <div className="history__box">
        <h3 className="history__title">Last search</h3>
        <button className="history__clear" onClick={clearHistory}>
          <IoMdTrash />
          Clear history
        </button>
      </div>
      <div className="history__cards">
        {history.map((history) => (
          <HistoryCard key={history.id} history={history} />
        ))}
      </div>
    </section>
    ) : (
      <div></div>
    )}
    </>
  )
}

export default History