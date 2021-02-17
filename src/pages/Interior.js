import React from 'react';
import '@google/model-viewer';
import '../App.css'
import { Button } from '@material-ui/core';
import { Helmet } from "react-helmet";
import InteriorGlt from '../assets/apto.glb'
import InteriorUsdz from '../assets/apto.usdz'
import btnAR from '../assets/arIcon.svg'

export default function Interior() {
    return (
        <div>
            <Helmet>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
            </Helmet>

            <model-viewer src={InteriorGlt} camera-controls autoplay ar ar-modes="scene-viewer webxr quick-look"  ios-src={InteriorUsdz} >
                <h3>Planta P1 - 54m²</h3>
                <Button slot="ar-button" id="ar-button">
                    Visualize em seu ambiente
                </Button>
            </model-viewer>


        </div>
    )
}