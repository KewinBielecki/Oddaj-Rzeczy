import './FoundationList.scss';
import React, { Component } from 'react';


export class FoundationList extends React.Component {
    state = {
        active: <First />,
    };

    firstHandleClick = () => {
        this.setState({
            active: <First />
        })
    };
    secondHandleClick = () => {
        this.setState({
            active: <Second />
        })
    };
    thirdHandleClick = () => {
        this.setState({
            active: <Third />
        })
    };

    render() {
        return(
                    <section id='foundations' className="FoundationList_container">
            <div className="FoundationList_box">
                <h1>Komu pomagamy?</h1>
                <div className='page-call-decoration'></div>
            </div>
            <div className="FoundationMenu_list_container">
                <div className="FoundationMenu_list">
                    <li><a onClick={this.firstHandleClick}>Fundacjom</a></li>
                    <li><a onClick={this.secondHandleClick}>Organizacjom pozarządowym</a></li>
                    <li><a onClick={this.thirdHandleClick}>Lokalnym zbiórkom</a></li>
                </div>
            </div>
            <div className="FoundationList">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, Organizacji pozarządowych, oraz Lokalne zbiórki z którymi współpracujemy. Możesz
                    sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
                        {this.state.active}
            <div>
                        <button className="list__single_button" onClick={this.firstHandleClick}>1</button>
                        <button className="list__single_button" onClick={this.secondHandleClick}>2</button>
                        <button className="list__single_button" onClick={this.thirdHandleClick}>3</button>
            </div>
        </section>
        )
    }
}

export class First extends Component {
    render() {
        return (
            <div className="container__foundation">
                <div className="container__foundation--box1">
                    <h4 className="header__foundation--title">Fundacja "Dbam o Zdrowie"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                        życiowej.</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Fundacja "Dla Dzieci"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Fundacja "Bez Domu"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc dla osób nie posiadających miejsca
                        zamieszkania.</p>
                    <hr></hr>
                </div>
                <div className="container__foundation--box2">
                    <p className="text__foundation--items">ubrania, jedzenie, sprzęt AGD,meble, zabawki</p>
                    <hr></hr>
                    <p className="text__foundation--items">ubrania, meble, zabawki</p>
                    <hr></hr>
                    <p className="text__foundation--items">ubrania, jedzenie, ciepłe koce</p>
                    <hr></hr>
                </div>
            </div>
        )
    }
}
export class Second extends Component {
    render() {
        return (
            <div className="container__foundation">
                <div className="container__foundation--box1">
                    <h4 className="header__foundation--title">Organizacja "Zostan Mistrzem"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomaganie ludziom z brakiem srodkow rozwijac swoj talent.</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Organizacja "Retina AMD Polska"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc niepełnosprawnym dzieciom i doroslym, oraz alkoholikom i ich bliskim</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Stowarzyszenie "FUNDAMED"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc w edukacji i wychowaniu, ochrona zdrowia i uslugi socjalne.</p>
                    <hr></hr>
                </div>
                <div className="container__foundation--box2">
                    <p className="text__foundation--items">ubrania, akcesoria sportowe, opieka podczas wydarzen sportowych</p>
                    <hr></hr>
                    <p className="text__foundation--items">ubrania, jedzenie, wsparcie finansowe, akcesoria dla niepelnosprawnych</p>
                    <hr></hr>
                    <p className="text__foundation--items">ubrania, jedzenie, cieple koce, meble, wsparcie finansowe</p>
                    <hr></hr>
                </div>
            </div>

        )
    }
}
export class Third extends Component {
    render() {
        return (
            <div className="container__foundation">
                <div className="container__foundation--box1">
                    <h4 className="header__foundation--title">Dom Dziecka w Olesnicy</h4>
                    <p className="text__foundation--aim">Cel i misja: Zbiorka wspierajaca lokalny dom dziecka.</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Zbiorka dla chorego Igora</h4>
                    <p className="text__foundation--aim">Cel i misja: Ofiarowane przedmioty beda wystawiane na aukcje, zyski przekazane zostana na operacje dla Igora</p>
                    <hr></hr>
                </div>
                <div className="container__foundation--box2">
                    <p className="text__foundation--items">ubrania, jedzenie, sprzet AGD, meble, zabawki</p>
                    <hr></hr>
                    <p className="text__foundation--items">przedmioty unikalne, koszulki, plyty z podpisami, oraz pamiatki</p>
                    <hr></hr>
                </div>
            </div>
        )
    }
}


export default FoundationList;