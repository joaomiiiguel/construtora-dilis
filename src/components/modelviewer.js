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

            <model-viewer src={ModelGlt} camera-controls autoplay animation-name="ORBITA" ar ar-modes="scene-viewer webxr quick-look" ios-src={ModelUsdz}>

                <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                </div>
                <Button slot="ar-button" id="ar-button">
                    <img src={btnAR} className="btnAR"/>
                </Button>
            </model-viewer>


        </div>
    )
}
            /**
            <model-viewer
                src={ModelGlt}
                ios-src={ModelUsdz}
                alt='Building Dilis'
                ar
                ar-scale="auto"
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                autoplay
                auto-rotate>
                <Button slot="ar-button" id="ar-button">
                    <img src={btnAR} className="btnAR"/>
                </Button>
            </model-viewer> */