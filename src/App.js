import logo from './logo.svg';
import './App.css';
import Character from "./Components/Characters";

function App() {

    let x = `hello`;
  return (
    <div>
        <Character name = {`Bart`}
                   dcr={`sdfghjkfghj fghjk hgj`}
                   pict={`https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png`}/>
        <Character name={`Homer`}
                   dcr={`fghjkl hjkl hjkl hjkl ghjkl`}
                   pict={`https://static.wikia.nocookie.net/simpsons/images/5/5d/Homer_Simpson.jpg`}/>
        <Character name={`Lisa`}
                   dcr={`gfhjkl hjkl  nm cvb nm, m, jk fghjkl bnm,. vbnm,`}
                   pict={`https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png`}


        />


        {/*{x}*/}
        {/*<div>*/}
        {/*    <h2>Bart</h2>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus nostrum officiis repudiandae voluptates voluptatibus.</p>*/}
        {/*    <img src="https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png" alt="Bart"/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <h2>Homer</h2>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus hic iusto minima nam. Dolores eius harum laudantium neque obcaecati odit quam sunt temporibus vero.</p>*/}
        {/*    <img src="https://static.wikia.nocookie.net/simpsons/images/5/5d/Homer_Simpson.jpg" alt="Homer"/>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
