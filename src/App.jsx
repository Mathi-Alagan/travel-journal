import React from "react"
import Nav from './components/Nav'
import Card from "./components/Card"
import cardData from "./data"


function App() {
  const data = cardData.map(function(cardItem, index) {
    let isLast = cardData[index+1]?'card-border':''
    return(
      <Card key={cardItem.id}
            cardItem = {cardItem}
            isLast = {isLast}
      />
    )
  })
  return (
    <div className="App">
      <Nav/>
      <main>
        {data}
      </main>
    </div>
  )
}

export default App
