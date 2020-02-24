// in src/Machines.js
import React from 'react';
import {Datagrid, List, TextField} from 'react-admin';
import MyUrlField from './MyUrlField';

export const MachinesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="uuid"/>
            <TextField source="name"/>
            <TextField source="details"/>
            <MyUrlField source="incidents.size"/>
            <MyUrlField source="location"/>
            <TextField source="createdAt"/>
            <TextField source="updatedAt"/>
        </Datagrid>
    </List>
);