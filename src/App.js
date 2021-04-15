import { Component } from 'react'
import './App.css';
import {Container, Grid} from '@material-ui/core'


export default class App extends Component {

  constructor(props) {

    super(props)

    this.state ={
      body: false,
      probs: [0, 0, 0, 0]
  }

    this.handleScroll = this.handleScroll.bind(this)
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

      var value = event.target.value.split(",")

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

      console.log(this.state.probs)
      console.log(this.state.probs.indexOf(Math.max(...this.state.probs)))


    }

    this.setState({body: !this.state.body})


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

    var casa = [

      {

        value: 'Casa na Alemanha',
        probs: [.8, .2, .1, 0]
      },
      {

        value: 'Casa na França',
        probs: [.2, .8, .2, .6]
      },
      {
        
        value: 'Casa em Portugal',
        probs: [.05, .1, .9, .4]
      },
      {
        value: 'Casa na Itália',
        probs: [.2, .4, .4, .9]
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
         <Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex',
    textAlign: 'center'}} >
         {

           clima.map((item, index) =>
           
           <Grid item xs={6} lg={6} md={6}>
            <button className='button' key={index} data-buttonHeader={false} data-initial={true} value={item.probs} onClick={this.handleScroll}>{item.value}</button>
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
          <Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex',
    textAlign: 'center'}} >
         {

           casa.map((item, index) =>
           
            <Grid item xs={6} lg={6} md={6}>
              <button className='button' key={index} data-buttonHeader={false} value={item.probs} onClick={this.handleScroll}>{item.value}</button>
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
          
            { 

            (this.state.probs.indexOf(Math.max(...this.state.probs)) === 0) && <p style={{color: 'red'}}>Alemanha</p>
            || (this.state.probs.indexOf(Math.max(...this.state.probs)) === 1) && <p style={{color: 'blue'}}>França</p>
            || (this.state.probs.indexOf(Math.max(...this.state.probs)) === 2) && <p style={{color: 'red'}}>Portugal</p>
            || (this.state.probs.indexOf(Math.max(...this.state.probs)) === 3) && <p style={{color: 'green'}}>Itália</p>
              
            }
          
          </div>
          
        </header>
      </div>
  
      </>
    );
  }
  
  
}
