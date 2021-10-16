import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Battlefioeld1 from './views/battlefioeld1'
import Cyberpunk2077 from './views/cyberpunk2077'
import Alanwake from './views/alanwake'
import Visage from './views/visage'
import FarCRy5 from './views/far-c-ry5'
import Metroexdus from './views/metroexdus'
import RedDeadREdemption2 from './views/red-dead-r-edemption2'
import LittleNightmaresII from './views/little-nightmares-i-i'
import ResidentEvillVillage from './views/resident-evill-village'
import Adventure from './views/adventure'
import NFSHEat from './views/n-f-s-h-eat'
import Worldwarzaftermath from './views/worldwarzaftermath'
import Battlefioeldv from './views/battlefioeldv'
import MicrosoftFlightsimulator from './views/microsoft-flightsimulator'
import CitiesSkylines from './views/cities-skylines'
import LandingPage from './views/landing-page'
import PCBuildingSimulatore from './views/p-c-building-simulatore'
import Forrza4 from './views/forrza4'
import Racing from './views/racing'
import NeverAlone from './views/never-alone'
import RanchSimulatoor from './views/ranch-simulatoor'
import Action from './views/action'
import LifeISStrangeTrueColors from './views/life-i-s-strange-true-colors'
import Outlast2 from './views/outlast2'
import Assassinscreedvalhalla from './views/assassinscreedvalhalla'
import AporiaBeyondTheValley from './views/aporia-beyond-the-valley'
import EuroTruckSimulator2 from './views/euro-truck-simulator2'
import Simulation from './views/simulation'
import NFSMostwanted from './views/n-f-s-mostwanted'
import GtaV from './views/gta-v'
import KenaBridgeofSpirits from './views/kena-bridgeof-spirits'
import Blur from './views/blur'
import Home from './views/home'
import TheLightRemake from './views/the-light-remake'
import HotWheelsUnleashed from './views/hot-wheels-unleashed'
import Openworld from './views/openworld'
import Callofdutyww2 from './views/callofdutyww2'
import Horror from './views/horror'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Battlefioeld1} path="/battlefioeld1" />
        <Route exact component={Cyberpunk2077} path="/cyberpunk2077" />
        <Route exact component={Alanwake} path="/alanwake" />
        <Route exact component={Visage} path="/visage" />
        <Route exact component={FarCRy5} path="/far-c-ry5" />
        <Route exact component={Metroexdus} path="/metroexdus" />
        <Route
          exact
          component={RedDeadREdemption2}
          path="/red-dead-r-edemption2"
        />
        <Route
          exact
          component={LittleNightmaresII}
          path="/little-nightmares-i-i"
        />
        <Route
          exact
          component={ResidentEvillVillage}
          path="/resident-evill-village"
        />
        <Route exact component={Adventure} path="/adventure" />
        <Route exact component={NFSHEat} path="/n-f-s-h-eat" />
        <Route
          exact
          component={Worldwarzaftermath}
          path="/worldwarzaftermath"
        />
        <Route exact component={Battlefioeldv} path="/battlefioeldv" />
        <Route
          exact
          component={MicrosoftFlightsimulator}
          path="/microsoft-flightsimulator"
        />
        <Route exact component={CitiesSkylines} path="/cities-skylines" />
        <Route exact component={LandingPage} path="/landing-page" />
        <Route
          exact
          component={PCBuildingSimulatore}
          path="/p-c-building-simulatore"
        />
        <Route exact component={Forrza4} path="/forrza4" />
        <Route exact component={Racing} path="/racing" />
        <Route exact component={NeverAlone} path="/never-alone" />
        <Route exact component={RanchSimulatoor} path="/ranch-simulatoor" />
        <Route exact component={Action} path="/action" />
        <Route
          exact
          component={LifeISStrangeTrueColors}
          path="/life-i-s-strange-true-colors"
        />
        <Route exact component={Outlast2} path="/outlast2" />
        <Route
          exact
          component={Assassinscreedvalhalla}
          path="/assassinscreedvalhalla"
        />
        <Route
          exact
          component={AporiaBeyondTheValley}
          path="/aporia-beyond-the-valley"
        />
        <Route
          exact
          component={EuroTruckSimulator2}
          path="/euro-truck-simulator2"
        />
        <Route exact component={Simulation} path="/simulation" />
        <Route exact component={NFSMostwanted} path="/n-f-s-mostwanted" />
        <Route exact component={GtaV} path="/gta-v" />
        <Route
          exact
          component={KenaBridgeofSpirits}
          path="/kena-bridgeof-spirits"
        />
        <Route exact component={Blur} path="/blur" />
        <Route exact component={Home} path="/" />
        <Route exact component={TheLightRemake} path="/the-light-remake" />
        <Route
          exact
          component={HotWheelsUnleashed}
          path="/hot-wheels-unleashed"
        />
        <Route exact component={Openworld} path="/openworld" />
        <Route exact component={Callofdutyww2} path="/callofdutyww2" />
        <Route exact component={Horror} path="/horror" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
