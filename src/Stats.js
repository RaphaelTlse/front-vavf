// in src/Stats.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FakeGraph from './513.png'

export const Stats = props => (
    <div>
        <Card>
            <CardHeader title="Statistiques" />
            <CardContent><img src={FakeGraph} alt="Stats" /></CardContent>
        </Card>
    </div>
);