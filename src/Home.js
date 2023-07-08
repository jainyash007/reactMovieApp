import React, { useContext } from 'react'
import Movies from './Movies';
import Search from './Search';
//import { AppContext } from './context'
//import {useGlobalContext} from './context'

export const Home = () => {
  //const name = useContext(AppContext);

  return (
  <>
    <Search />
    <Movies />
  </>
  );
};

export default Home;
