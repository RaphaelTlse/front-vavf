// in src/AdminPage.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export const AdminPage = props => (
    <div>
        <Card>
            <CardHeader title="Menu d'administration" />
            <CardContent><iframe width="1120" height="730" src="https://www.youtube.com/embed/q2j1MAT80f8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></CardContent>
        </Card>
    </div>
);
