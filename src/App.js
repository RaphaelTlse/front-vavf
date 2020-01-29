// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { LogsList, LogsEdit, LogsCreate } from './logs';
import { MachinesList } from './machines';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import LogsIcon from '@material-ui/icons/MenuBook';
import FollowUpIcon from '@material-ui/icons/PermIdentity';
import StatsIcon from '@material-ui/icons/TrendingUp';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/loljambe/testeip');

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
       <Resource name="machines" list={MachinesList} icon={FollowUpIcon} />
       <Resource name="logs" list={LogsList} edit={LogsEdit} create={LogsCreate} icon={LogsIcon} />
       <Resource name="Statistiques" icon={StatsIcon} />
    </Admin>
);

export default App;