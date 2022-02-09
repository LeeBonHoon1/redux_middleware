import './App.css';
import Tweet from './components/Tweet';
import {Provider} from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import PostListContainer from './container/PostListContainer';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Tweet />
        <Display />
        <PostListContainer />
      </Provider>
    </div>
  );
}

export default App;
