import { useEffect, useState } from 'react'
import './App.css'

//const CAT_ENDPOINT_IMAGE_URL = '`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)

      //const firstWord = fact.split(' ')[0]
      //const threeWords = fact.split(' ').slice(0,3).join(' ')
      const threeWords = fact.split(' ',4).join(' ')
      console.log(threeWords)

      fetch(`https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(`https://cataas.com${url}`)
      })

      

    })
  }, [])
  return (
    <>
     
     <h1>app de gatitos</h1>
     {fact && <p>{fact}</p>}
     {imageUrl && <img src={imageUrl} alt='a cat image' />}
    </>
  )
}

export default App
