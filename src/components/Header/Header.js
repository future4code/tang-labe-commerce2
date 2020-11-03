import React from 'react';
import styled from 'styled-components';
import imgCart from '../../img/imgcart.svg';

const Container = styled.div`
    width: 100vw;
    height: 100%;
    border: 1px solid red;
`

const ContainerInf = styled.div`
    width: 100%;
    height: 5vh;
    border: 1px solid blue;
`

const ContainerHeader = styled.div`
    width: 100%100vh;
    height: 10vh;
    border: 1px solid red;
`


class Header extends React.Component {
    render () {


        return (
            <Container>
                <ContainerInf>
                    <p>Informações Covid-19</p>
                </ContainerInf>
                <ContainerHeader>
                    <img src="" alt="" />
                    <input type="text" />
                    <a><img src={imgCart} alt="" /></a>
                </ContainerHeader>
            
            </Container>
        )
    }
}

export default Header