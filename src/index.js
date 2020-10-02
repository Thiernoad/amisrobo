import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {searchRobots} from './reducers';
import 'tachyons';
import App from './containers/App';

const store = createStore(searchRobots);

ReactDOM.render (
	<Provider store={store}>
      <App />
      </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();

/*on envoie dans la class cardList
  	 <div>
  	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
	</div>
	*/