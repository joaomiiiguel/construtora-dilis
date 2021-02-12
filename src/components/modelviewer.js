import React from 'react';
import '@google/model-viewer';
import '../App.css'
import { Button } from '@material-ui/core';
import { Helmet } from "react-helmet";
import ModelGlt from '../assets/building.glb'
import ModelUsdz from '../assets/building.usdz'
import btnAR from '../assets/arIcon.svg'

export default function modelviewer() {
    return (
        <div>
            <Helmet>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
            </Helmet>

            <model-viewer src={ModelGlt} camera-controls autoplay ar ar-modes="scene-viewer webxr quick-look" ios-src={ModelUsdz}>
                <Button slot="ar-button" id="ar-button">
                    <img src={btnAR} className="btnAR"/>
                </Button>
            </model-viewer>


        </div>
    )
}