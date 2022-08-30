import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import './routes/navigation/navigation.styles.scss'
import Authentication from './routes/authentication/authentication.component.jsx';
import Home from './routes/home/home.component';

const Shop =()=>{
  return <h1>i am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route  index element={<Home />} />
        <Route path='Shop' element={<Shop />} />
        <Route path='signin' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;