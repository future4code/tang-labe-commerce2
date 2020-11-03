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

    listCards = [

        {
          id: 1,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=1",
        },
        {
          id: 2,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=2",
        },
        {
          id: 3,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=3",
        },
        {
          id: 4,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=4",
        },
        {
          id: 5,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=5",
        },
        {
          id: 6,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=6",
        },
        {
          id: 7,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=7",
        },
        {
          id: 8,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200?a=8",
        }
  
    ]


    render () {
        
        const listadePosts = this.listCards.map((post) => {
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
                    <input type="number" />
                    <br/>
                    <label>Valor Máximo:</label>
                    <input type="number" />
                </MainMenu>
                <MainCards>
                    {listadePosts}
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