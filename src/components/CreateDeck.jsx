import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

const CreateDeck = () => {
  const [suits, setSuits] = useState(['Hearts', 'Diamonds', 'Spades', 'Clubs'])
  const [ranks, setRanks] = useState([
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King'
  ])
  const [values, setValues] = useState([
    11,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    10,
    10,
    10
  ])

  const [deck, setDeck] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])

  const makeDeck = () => {
    suits.map(suit => {
      ranks.map((rank, index) => {
        const worth = values[index]
        deck.push({ rank, suit, worth })
      })
    })
    shuffleDeck()
    deal(playerHand)
    deal(dealerHand)
    pHand()
    dHand()
  }

  const shuffleDeck = () => {
    for (let i = deck.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    }
  }

  const pHand = () => {
    const element = (
      <div>
        <p>Player Hand</p>
        <span>{playerHand[0].rank} of</span>
        <br />
        <span>{playerHand[0].suit}</span>
        <br />
        <span> Value= {playerHand[0].worth}</span>
      </div>
    )
    ReactDOM.render(element, document.getElementById('playerHand'))
  }

  const dHand = () => {
    const element = (
      <div>
        <p>Dealer Hand</p>
        <span>{dealerHand[0].rank} of</span>
        <br />
        <span>{dealerHand[0].suit}</span>
        <br />
        <span>Value= {dealerHand[0].worth}</span>
      </div>
    )
    ReactDOM.render(element, document.getElementById('dealerHand'))
  }

  // const dealToPlayer = () => {
  //   const dealt = deck.pop()
  //   playerHand.push(dealt)
  // }

  // const dealToDealer = () => {
  //   const dealt = deck.pop()
  //   dealerHand.push(dealt)
  // }

  const deal = key => {
    for (let i = 0; i <= 1; i++) {
      const card = deck.shift()
      key.unshift(card)
    }
  }

  useEffect(() => {
    makeDeck()
  }, [])

  return (
    <div>
      <main>
        <p id="playerHand"></p>
        <p id="dealerHand"></p>
      </main>
    </div>
  )
}

export default CreateDeck
