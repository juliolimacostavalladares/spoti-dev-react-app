import React from 'react';

import LeftBar from './components/LeftBar'
import GlobalStyles from './styles/GlobalStyles'
import RigthArea from './components/RightArea';
import PlayerBar from './components/PlayerBar';




function App() {
  return (
    <>
    <LeftBar/>
    <RigthArea/>
    <PlayerBar/>
    <GlobalStyles/>
    </>
  );
}

export default App;
