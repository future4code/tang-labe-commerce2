import React from 'react';
import styled from 'styled-components';
import imgCart from '../../img/imgcart.svg';
import imgQuestion from '../../img/question.svg';

const Container = styled.div`
    width: 100vw;
    height: 100%;
    border: 1px solid red;
`

const ContainerInf = styled.div`
    display: flex;
    width: 100%;
    height: 5vh;
    border: 1px solid blue;
    justify-content: center;
    
`

const ContainerHeader = styled.div`
    width: 100%100vh;
    height: 10vh;
    border: 1px solid red;
`


class Header extends React.Component {
    state = {
        valueSearch: "",
      };

    onChangeValueSearch = (event) => {
    this.setState({ valueSearch: event.target.value })
    
    }  

    render () {


        return (
            <Container>
                <ContainerInf>
                    <p>Informações Covid-19 - SAIBA MAIS</p>
                    <img src={imgQuestion}></img>
                    <p>Tire suas dúvidas - FAQ</p>
                </ContainerInf>
                {/* <ContainerHeader>
                    <img src="" alt="" />
                    <input 
                    value={this.state.valueSearch}
                    type="text"
                    onChange={this.onChangeValueSearch}
                    />
                    <a href="#"><img src={imgCart} alt="" /></a>
                </ContainerHeader>
             */}
            </Container>
        )
    }
}

export default Header