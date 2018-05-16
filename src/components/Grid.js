import React from 'react';
// import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// import PT from 'prop-types';
import { Page, Card } from "react-onsenui";
import bootstrap from "bootstrap";

class Grid extends React.Component {

    state = {
        cards: [
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            },
            {
                title: 'Card', 
                frontside: 'This is card', 
                backside: 'This is the back of card', 
                displayFront: true
            }
        ]
    }

    render () {
        const { cards } = this.state; 
        return (
            <div className="test-page learn-page" >
                <Page className="grid-container">
                    {cards.map((card, index) => {
                    return <Card className="grid-item" key={index} onClick={() => this.handleClick(index)}>{card.displayFront ? `${card.frontside} ${index}!` : `${card.backside} ${index}.`}</Card>
                    })}

                    <div class="react-card"></div>
                </Page>
            </div>
        );
    }

    handleClick = (index) => {
        const newCards = this.state.map((card, i) => {
            if (i === index) card.displayFront = !this.state.displayFront;
            return card;
        });
        this.setState({
          cards: newCards
        })
      } 

    static propTypes = {
    
    }
}

export default Grid;