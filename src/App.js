import { Component } from 'react'
import './App.css';
import {Container, Grid} from '@material-ui/core'

import casaAlemanha from './casa-alemanha.jpg'
import casaFranca from './casa-franca.jpg'
import casaPortugal from './casa-portugal.jpg'
import casaItalia from './casa-italia.jpg'

import canole from "./canole.jfif";
import alfajor from "./alfajor.jfif";
import pretzel from "./pretzel.jfif";
import bombom from "./bombom.jfif";

export default class App extends Component {

  constructor(props) {

    super(props)

    this.state ={
      body: false,
      probs: [0, 0, 0, 0]
  }

    this.handleScroll = this.handleScroll.bind(this)
    this.renderSwitch = this.renderSwitch.bind(this)
  }

  componentDidUpdate() {

    if (this.state.body === true) {

        window.scrollBy(0, document.querySelector('html').clientHeight)
        this.setState({body: !this.state.body})

    }

  }

  handleScroll = (event) => {
    


    if (event.target.dataset.initial === 'true') {

      this.setState( state => {

        const probs = state.probs.map(item => {

          return 0
        });

        return {

          probs,
        }
      })
    }

    if (event.target.dataset.buttonheader === 'false') {

      var value = event.target.dataset.value.split(",")

      for (var i = 0; i < value.length; i++) {
        value[i] = parseFloat(value[i])

      }

      // value = [.1, .2, .4, .15]


      this.setState( state => {

        const probs = state.probs.map((item, index) => {

          return item + (value[index]/4)

        });

        return {

          probs,
        }
      })


    }

    this.setState({body: !this.state.body})
    


  }

  renderSwitch(param) {

    switch(param) {

      case 0:
        return <p style={{color: '#b3b320'}}>Alemanha</p>
      case 1:
        return <p style={{color: 'blue'}}>França</p>
      case 2:
        return <p style={{color: 'red'}}>Portugal</p>
      case 3:
        return <p style={{color: 'green'}}>Itália</p>
      default:
        return <p style={{color: 'red'}}>Você ainda não terminou o teste</p>
    }
  }


  
  render() {

    var clima = [
      {

      value: 'Verão',
      probs: [.1, .2, .4, .15]
      },
      {
        value: 'Inverno',
        probs: [.8, .6, .5, .45]
      },
      {
        value: 'Outono',
        probs: [.8, .6, .5, .45]
      },
      {
        value: 'Primavera',
        probs: [.1, .2, .4, .15]
      }
  ]

    var image = [

      {

        value: casaAlemanha,
        probs: [.6, .2, .1, 0]
      },
      {

        value: casaFranca,
        probs: [.2, .6, .2, .3]
      },
      {
        
        value: casaPortugal,
        probs: [.05, .1, .6, .4]
      },
      {
        value: casaItalia,
        probs: [.2, .4, .4, .6]
      }
    ]

    var bebida = [

      {

        value: 'Cerveja',
        probs: [.7, .2, .1, 0]
      },
      {

        value: 'Chá',
        probs: [.1, .4, .6, .3]
      },
      {
        
        value: 'Café',
        probs: [.05, .6, .1, .4]
      },
      {
        value: 'Vinho',
        probs: [.2, .8, .4, .5]
      }
    ]

    var filme = [

      {

        value: 'Terror',
        probs: [.4, .2, .1, 0]
      },
      {

        value: 'Comédia',
        probs: [.1, .4, .4, .3]
      },
      {
        
        value: 'Romance',
        probs: [.1, .4, .1, .4]
      },
      {
        value: 'Ação',
        probs: [.2, .5, .4, .5]
      }
    ]

    var sobremesa = [

      {

        value: canole,
        probs: [.2, .2, .1, .6]
      },
      {

        value: alfajor,
        probs: [.1, .6, .1, .2]
      },
      {
        
        value: pretzel,
        probs: [.6, .2, .1, .2]
      },
      {
        value: bombom,
        probs: [.1, .1, .1, .1]
      }
    ]

    var esporte = [

      {

        value: 'Futebol',
        probs: [.4, .2, .1, 0]
      },
      {

        value: 'Volei',
        probs: [.1, .4, .4, .3]
      },
      {
        
        value: 'Escalada',
        probs: [.1, .4, .1, .4]
      },
      {
        value: 'Hipismo',
        probs: [.2, .5, .4, .5]
      }
    ]


    return (
      <>
      <div className="App">
        <header className="App-header">
          
          <p>
            BuzzFeed Test
          </p>
          <button

          className='button'
          data-button-header={true}

          type="radio"
          onClick={this.handleScroll}
          
          >Começar</button>

        </header>
      </div>
      <div className="App">
        <header className="App-header">
          
         <div>
         <p>
            Qual estação do ano você prefere?
          </p>
         </div>
         <Container className="row justify-content-space-around container-fluid d-flex container">
         {

           clima.map((item, index) =>
           
           <Grid className='grid' item xs={6} lg={6} md={6}>
            <button className='button' key={index} data-buttonHeader={false} data-initial={true} data-value={item.probs} onClick={this.handleScroll}>{item.value}</button>
            </Grid>
           )
         }
         </Container>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          
          <div>
          <p>
            Qual casa você prefere?
          </p>
          </div>
          <Container className="row justify-content-space-around container-fluid d-flex container">
         

           {
            image.map((item, index) =>
            
            <Grid item xs={6} lg={6} md={6}>
              <button className='button button-image' key={index}   onClick={this.handleScroll}><img alt={item.value} data-value={item.probs} data-buttonHeader={false} data-initial={false} style={{width: '100%', borderRadius: '8px'}} src={item.value}></img></button>
            </Grid>
            )
  }
         
         </Container>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          
         <div>
         <p>
            Qual bebida você mais gosta?
          </p>
         </div>
         <Container className="row justify-content-space-around container-fluid d-flex container">
         {

           bebida.map((item, index) =>
           
           <Grid className='grid' item xs={6} lg={6} md={6}>
            <button className='button' key={index} data-buttonHeader={false} data-initial={true} data-value={item.probs} onClick={this.handleScroll}>{item.value}</button>
            </Grid>
           )
         }
         </Container>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          
         <div>
         <p>
            Qual filme você mais curte?
          </p>
         </div>
         <Container className="row justify-content-space-around container-fluid d-flex container">
         {

           filme.map((item, index) =>
           
           <Grid className='grid' item xs={6} lg={6} md={6}>
            <button className='button' key={index} data-buttonHeader={false} data-initial={true} data-value={item.probs} onClick={this.handleScroll}>{item.value}</button>
            </Grid>
           )
         }
         </Container>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          
          <div>
          <p>
            Qual sobremesa você prefere?
          </p>
          </div>
          <Container className="row justify-content-space-around container-fluid d-flex container">
         

           {
            sobremesa.map((item, index) =>
            
            <Grid item xs={6} lg={6} md={6}>
              <button className='button button-image' key={index}   onClick={this.handleScroll}><img alt={item.value} data-value={item.probs} data-buttonHeader={false} data-initial={false} style={{width: '100%', borderRadius: '8px'}} src={item.value}></img></button>
            </Grid>
            )
  }
         
         </Container>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          
         <div>
         <p>
            Qual esporte você mais curte?
          </p>
         </div>
         <Container className="row justify-content-space-around container-fluid d-flex container">
         {

           esporte.map((item, index) =>
           
           <Grid className='grid' item xs={6} lg={6} md={6}>
            <button className='button' key={index} data-buttonHeader={false} data-initial={true} data-value={item.probs} onClick={this.handleScroll}>{item.value}</button>
            </Grid>
           )
         }
         </Container>
        </header>
      </div>


      <div className="App">
        <header className="App-header">
          
          <div>
          <p>
            Parabens, o país que mais combina com você é:
          </p>
          
            {this.renderSwitch(this.state.probs.indexOf(Math.max(...this.state.probs)))}
          
          </div>
          
        </header>
      </div>
  
      </>
    );
  }
  
  
}
