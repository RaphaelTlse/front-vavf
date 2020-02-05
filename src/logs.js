// in src/logs.js
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, TextField, EditButton, Edit, TextInput, SelectInput, Create, SimpleForm, Filter, SimpleList } from 'react-admin';
import MyUrlField from './MyUrlField';

const LogsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn resettable clearAlwaysVisible />
	   <SelectInput label="Machine" source="q" 
		choices={[
                { id: 'machine numero 1', name: 'Machine 1' },
                { id: 'machine numero 2', name: 'Machine 2' },
                { id: 'machine numero 3', name: 'Machine 3' },
		]}
	   />
    </Filter>
);

const LogsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const LogsList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<LogsFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="Date" />
                    <TextField source="Label" />
                    <TextField source="Description" />
                    <MyUrlField source="Coordonnees" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const LogsEdit = props => (
    <Edit title={<LogsTitle />} {...props}>
        <SimpleForm>
              <TextInput source="Date" />
              <TextInput source="Label" />
              <TextInput source="Description" />
              <TextInput source="Coordonnees" />
        </SimpleForm>
    </Edit>
);

export const LogsCreate = props => (
    <Create {...props}>
        <SimpleForm>
              <TextInput source="Machine id" />
              <TextInput source="Date" />
              <TextInput source="Label" />
              <TextInput source="Description" />
              <TextInput source="Coordonnees" />
        </SimpleForm>
    </Create>
);
