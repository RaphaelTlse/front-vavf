// in src/App.js
import React from 'react';
import {Admin, Resource} from 'react-admin';
import {LogsCreate, LogsEdit, LogsList} from './logs';
import {MachinesCreate, MachinesEdit, MachinesList} from './machines';
import {Map} from './Map';
import {Stats} from './Stats';
import {AdminPage} from './AdminPage';
import {Home} from './Home';
import MachinesIcon from '@material-ui/icons/DirectionsRailway';
import LogsIcon from '@material-ui/icons/MenuBook';
import MapIcon from '@material-ui/icons/Map';
import StatsIcon from '@material-ui/icons/TrendingUp';
import AdminPageIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import i18nProvider from './i18n/i18nProvider';

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
        <Resource name="home" list={Home} icon={HomeIcon}/>
        <Resource name="trains" list={MachinesList} edit={MachinesEdit} create={MachinesCreate}
                  icon={MachinesIcon}/>
        <Resource name="Logs" list={LogsList} edit={LogsEdit} create={LogsCreate} icon={LogsIcon}/>
        <Resource name="Carte" list={Map} icon={MapIcon}/>
        <Resource name="Statistiques" list={Stats} icon={StatsIcon}/>
        <Resource name="Page Admin" list={AdminPage} icon={AdminPageIcon}/>
    </Admin>
);

export default App;