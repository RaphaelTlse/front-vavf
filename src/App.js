// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { LogsList, LogsEdit, LogsCreate } from './logs';
import { MachinesList } from './machines';
import { Map } from './Map';
import { Stats } from './Stats';
import { AdminPage } from './AdminPage';
import { Home } from './Home';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import MachinesIcon from '@material-ui/icons/DirectionsRailway';
import LogsIcon from '@material-ui/icons/MenuBook';
import MapIcon from '@material-ui/icons/Map';
import StatsIcon from '@material-ui/icons/TrendingUp';
import AdminPageIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';


const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/loljambe/testeip');

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="Accueil" list={Home} icon={HomeIcon} />
        <Resource name="Machines" list={MachinesList} icon={MachinesIcon} />
        <Resource name="Logs" list={LogsList} edit={LogsEdit} create={LogsCreate} icon={LogsIcon} />
        <Resource name="Carte" list={Map} icon={MapIcon} />
        <Resource name="Statistiques" list={Stats} icon={StatsIcon} />
        <Resource name="Page Admin" list={AdminPage} icon={AdminPageIcon} />
    </Admin>
);

export default App;