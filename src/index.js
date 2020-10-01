import React from 'react';
import ReactDOM from 'react-dom';
//import Card from './Card';
import './index.css';
//import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import { robots } from './robots';
import App from './containers/App';

ReactDOM.render(
      <App />
  ,document.getElementById('root')
);
serviceWorker.unregister();

/*on envoie dans la class cardList
  	 <div>
  	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
	</div>
	*/