// in src/Home.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import VavfLogo from './vavf.png'

export const Home = props => (
<div id="parent">
    <Card>
        <CardHeader title="Accueil"/>
        <CardContent><img src={VavfLogo} alt="VAVF" width="125" height="125"/><p></p>Bienvenue sur le site d'information et de controle des robots VAVF.<p></p>La plateforme offre un suivi en temps reel des robots actifs, un historique detaille, et met a disposition diverses statistiques.</CardContent>
    </Card>
</div>
);