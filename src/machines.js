// in src/machines.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const MachinesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Statut" />
            <MyUrlField source="Anomalies detectees" />
            <TextField source="Dernier log" />
            <MyUrlField source="Coordonnees" />
            <TextField source="Vitesse" />
        </Datagrid>
    </List>
);