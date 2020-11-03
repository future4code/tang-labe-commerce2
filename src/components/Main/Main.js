import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards/Cards';
import App from '../../App'


const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 85vh;
`

const MainMenu = styled.div`
    width: 20%;
    height: 100%;
    border: 1px solid green;
`
const MainCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    height: 85vh;
    border: 1px solid black;
`

const MainCart = styled.div`
    width: 20%;
    height: 85vh;
    border: 1px solid yellow;
`


class Main extends React.Component {
  state = {
    minValue: "",
    maxValue: ""
  };

  onChangeMinValue = (event) => {
    this.setState({ minValue: event.target.value })    
  }

  onChangeMaxValue = (event) => {
    this.setState({ maxValue: event.target.value })    
  }



  listCards = [

    {
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 100,
      imageUrl: "https://picsum.photos/200/200?a=1",
    },
    {
      id: 2,
      name: "Missão Apollo 11",
      value: 10.5,
      imageUrl: "https://picsum.photos/200/200?a=2",
    },
    {
      id: 3,
      name: "Apollo 11",
      value: 1000,
      imageUrl: "https://picsum.photos/200/200?a=3",
    },
    {
      id: 4,
      name: "Missão Apollo 13",
      value: 450,
      imageUrl: "https://picsum.photos/200/200?a=4",
    },
    {
      id: 5,
      name: " Missão Bananinha",
      value: 650,
      imageUrl: "https://picsum.photos/200/200?a=5",
    },
    {
      id: 6,
      name: "Foguete da Missão Apollo 12",
      value: 50,
      imageUrl: "https://picsum.photos/200/200?a=6",
    },
    {
      id: 7,
      name: "Foguete da Missão Apollo 01",
      value: 105,
      imageUrl: "https://picsum.photos/200/200?a=7",
    },
    {
      id: 8,
      name: "Foguete da Missão Apollo 110",
      value: 1.99,
      imageUrl: "https://picsum.photos/200/200?a=8",
    }

  ]


  render() {

    // const listCards = this.listCards.map((post) => {
    //   return (
    //     <Cards
    //       imageUrl={post.imageUrl}
    //       name={post.name}
    //       value={post.value}
    //     />
    //   )
    // })

    
      let newListCards = this.listCards.filter((card) => {
        // let minValue = this.onChangeMinValue
        // let maxValue = this.onChangeMaxValue
        let minValue = this.minValue ? this.minValue : 0
        let maxValue = this.maxValue ? this.maxValue : 1000
        let isValid = card.value >= minValue  && card.value <= maxValue
        return isValid
      })
      
      newListCards = newListCards.map((post) => {
        return (
          <Cards
            imageUrl={post.imageUrl}
            name={post.name}
            value={post.value}
          />
        )
      })      
 
  

    return (
      <MainContainer>
        <MainMenu>
          <h1>Filtros:</h1>
          <label>Valor Mínimo:</label>
          <input
            value={this.state.minValue}
            type="number"
            onChange={this.onChangeMinValue}
          />
          <br />
          <label>Valor Máximo:</label>
          <input
            value={this.state.maxValue}
            type="number"
            onChange={this.onChangeMaxValue}
          />
        </MainMenu>
        <MainCards>
          {newListCards}
        </MainCards>
        <MainCart>
          <h1>Carrinho:</h1>
          <div>

          </div>

          <div>
            <h2>Total:</h2>
          </div>

        </MainCart>
      </MainContainer>
    )
  }
}

export default Main