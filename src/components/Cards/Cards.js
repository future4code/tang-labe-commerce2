import React from 'react';
import styled from 'styled-components';




class Cards extends React.Component {
    render () {


        return (
           
            <div className={'post-container'}>
                
                <img className={'product-photo'} src={this.props.imageUrl} alt={'Imagem do usuario'}/>
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <button onClick={() => console.log("oi")}>Adicionar Carrinho</button>
            </div>

        )
    }
}

export default Cards;