import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import PostIndex from './components/post_index';
import PostsNew from './components/posts_new'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} exact={true} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
