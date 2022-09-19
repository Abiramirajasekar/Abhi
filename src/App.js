import './App.css';
import RestaurantCard from "./components/RestaurantCard"
import { useEffect, useState } from 'react';
// http://localhost:3000/posts

export default function App() {
  //   async function handleFetch() {
  //     let Data = await fetch(`http://localhost:3000/posts`)
  //     Data = await Data.json();
  //     console.log(Data)
  //   }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [fliterRating, setFliterRating] = useState(0)
  const [page, setPage] = useState(1)

  function getRestaurants({ fliterRating, page }) {

    setLoading(true)
    setError(false)
    return fetch(
      "http://localhost:3000/posts"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setLoading(false)
        setData(res)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }
  useEffect(() => {
    getRestaurants({ fliterRating })
  }, [fliterRating])
  return (
    <div className="App">
      <button onClick={(() => setFliterRating(4))}>Greater than 4</button>
      <button onClick={(() => setFliterRating(3))}>Greater than 3</button>
      <button onClick={(() => setFliterRating(2.5))}>Greater than 2</button>
      <button onClick={(() => setFliterRating(1))}>Greater than 1</button>
      <button onClick={(() => setFliterRating())}>Show All</button>

      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>

      </div>

      {/* <img alt="pic" src='https://i.imgur.com/lMeVwr7.png' /> */}
      {/* <RestaurantCard /> */}
      {
        data?.map(res =>
          <RestaurantCard key={res.id} data={res} />
        )
      }
    </div >
  );
}


