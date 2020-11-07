import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards/Cards';



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
    maxValue: "",
    valueSearch: "",
    valueSelect: "Crescente",
    listOfProducts: []
  };

  
  onChangeMinValue = (event) => {
    this.setState({ minValue: event.target.value })    
  }

  onChangeMaxValue = (event) => {
    this.setState({ maxValue: event.target.value })    
  }

  onChangeValueSearch = (event) => {
    this.setState({ valueSearch: event.target.value })    
  }  

  onChangeValueSelect = (event) => {
    this.setState({valueSelect: event.target.value})    
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


    addProduct = (id) => {
      const copyOfState = this.listCards.filter((element) => {
        if (element.id === id) {
          return true;
        }
        return false;
      });
            
      const cart = [...copyOfState, ...this.state.listOfProducts];
      
      this.setState({listOfProducts: cart})
      
    };

    

    

  render() {

      let newListCards = this.listCards.filter((card) => {        
      let minValue = this.state.minValue ? this.state.minValue : 0
      let maxValue = this.state.maxValue ? this.state.maxValue : 100000
      let isValid = card.value >= minValue  && card.value <= maxValue
      return isValid
      }).filter((search) => {
        if (search.name.includes(this.state.valueSearch)) {
          return true
        } else {
          return false
        }
      })
      
      if (this.state.valueSelect === "Crescente") {
        newListCards.sort(function(a, b) {
          return a.value - b.value;
        });
      } else {
        newListCards.sort(function(a, b) {
          return b.value - a.value;
        });
      }
      
      newListCards = newListCards.map((cards) => {

        return (
          <Cards
            imageUrl={cards.imageUrl}
            name={cards.name}
            value={cards.value}
            minhaPropsFuncao={this.addProduct}
            parametroDaFuncao={cards.id}           
          />
        )
      }) 

      
      let i = 0
      let cartList = this.state.listOfProducts.map((products) => {
        i = products.value + i
        return (
            <p>
                {products.name} : R${products.value}
            </p>
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
          <input 
            value={this.state.valueSearch}
            type="text"
            onChange={this.onChangeValueSearch}
          />
        </MainMenu>
        <div>
          <div>
            <p>{`Quantidade de Produtos: ${newListCards.length}`}</p>
            <select value={this.state.valueSelect} onChange={this.onChangeValueSelect} name="select">
              <option value="Crescente" selected>PREÇO: Crescente</option>
              <option value="Decrescente" >PREÇO: Decrescente</option>              
            </select>           
          </div>
          <MainCards>
            {newListCards}
          </MainCards>
          
        </div>
        <MainCart>
          <h1>Carrinho:</h1>
          <div>
            {cartList}
          </div>
            
          <div>
            <h2>Total: R${i}</h2>
          </div>

        </MainCart>
      </MainContainer>
    )
  }
}

export default Main