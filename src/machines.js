// in src/Machines.js
import React from 'react';
import {Create, Datagrid, Edit, List, SimpleForm, TextField, TextInput} from 'react-admin';
import MyUrlField from './MyUrlField';

const MachineTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

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

export const MachinesEdit = props => (
    <Edit title={<MachineTitle/>} {...props}>
        <SimpleForm rowClick="edit">
            <TextInput source="name"/>
            <TextInput source="details"/>
            <TextInput source="location"/>
        </SimpleForm>
    </Edit>
);

export const MachinesCreate = props => (
    <Create {...props}>
        <SimpleForm rowClick="edit">
            <TextInput source="name"/>
            <TextInput source="company.name"/>
            <TextInput source="location"/>
        </SimpleForm>
    </Create>
);