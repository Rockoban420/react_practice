// A component
// This is a functional component
// A function that returns html

// when returning html, there must only be 1 parent element
import FavouriteThings from "./FavouriteThings";



function App() {
  return (
    <div className="App">
      <FavouriteThings 
        className='manny is cool'
        style={{ 
          backgroundColor: 'red'
        }}
        isCool={true}
        randomProp // randomProp={true}
        onClick= {()=> {console.log('clocked')}}
        favThings= {['Food', 'Music', 'Video Games', 'Movies', 'Sleep']}
        name= {'Lotrex'}
      />

      <FavouriteThings 
        style={{ 
          backgroundColor: 'red'
        }}
        onClick= {()=> {console.log('clocked')}}
        favThings= {['Teemo', 'Bacon', 'Sleep', 'Climbing', 'Coding']}
        name= {'Manny'}
      />
    </div>
  );
}

export default App;
