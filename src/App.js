// in src/App.js
import React from 'react';
import {fetchUtils, Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {LogsList, LogsEdit, LogsCreate} from './logs';
import {MachinesList} from './machines';
import {Map} from './Map';
import {Stats} from './Stats';
import {AdminPage} from './AdminPage';
import {Home} from './Home';
import authProvider from './authProvider';
import MachinesIcon from '@material-ui/icons/DirectionsRailway';
import LogsIcon from '@material-ui/icons/MenuBook';
import MapIcon from '@material-ui/icons/Map';
import StatsIcon from '@material-ui/icons/TrendingUp';
import AdminPageIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="Accueil" list={Home} icon={HomeIcon}/>
        <Resource name="Machines" list={MachinesList} icon={MachinesIcon}/>
        <Resource name="Logs" list={LogsList} edit={LogsEdit} create={LogsCreate} icon={LogsIcon}/>
        <Resource name="Carte" list={Map} icon={MapIcon}/>
        <Resource name="Statistiques" list={Stats} icon={StatsIcon}/>
        <Resource name="Page Admin" list={AdminPage} icon={AdminPageIcon}/>
    </Admin>
);

export default App;