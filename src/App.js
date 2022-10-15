import './css/App.css';
import Cat from "./components/Cat"
import CatList from './components/CatList';
import { Component } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Sassy from "./images/Sassy.jpg"
import Cati from "./images/Cati.jpg"
import Muffin from "./images/Muffin.jpg"
import NavBar from './components/NavBar';

class App extends Component {

  static defaultProps = {
    AppCats: [
      {
        name: "Sassy",
        age: 5,
        src: Sassy,
        facts: [
          "Sassy loves eating popcorn.",
          "Sassy is a terrible guard cat.",
          "Sassy wants to cuddle with you!"
        ]
      },
      {
        name: "Cati",
        age: 3,
        src: Cati,
        facts: [
          "cati has soooo much energy!",
          "cati is highly intelligent.",
          "cati loves people more than cats."
        ]
      },
      {
        name: "Muffin",
        age: 4,
        src: Muffin,
        facts: [
          "Muffin is not the brightest cat",
          "Muffin does not like walks or exercise.",
          "Muffin loves eating food."
        ]
      }
    ]
  }

  render() {

    
    const getCat = (prop) => {
      let name = prop.match.params.catName
      let currentCat = this.props.AppCats.find(
        f => f.name.toLowerCase() === name.toLowerCase()
      )
      console.log(name, currentCat)
      return <Cat {...prop} cat = {currentCat}/>
    }

    return (
      <div className='App'>
        <NavBar cats={this.props.AppCats}/>
        <Switch>
          <Route exact path='/cats' render={()=> <CatList cats = {this.props.AppCats} /> }/>
          <Route exact path='/cats/:catName' render={getCat} />
          <Redirect to="/cats"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
