import React from "react";
import { ImageChanger } from "./ImageChanger";


const images = [
    {
        src: 'https://images.freeimages.com/images/large-previews/f29/lehrter-hauptbahnhof-berlin-1220842.jpg',
        alt: 'Berliner Hauptbahnhof in Gesamtansicht im Sonnenuntergang.'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/4a5/berliner-skyline-1370359.jpg',
        alt: 'Berliner Skyline bei Nacht.'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/c75/gedaechtniskirche-1223245.jpg',
        alt: 'Berliner Gedächtniskirche.'
    }
]

export class App extends React.Component {
    render(){
        return (
            <ImageChanger images={images} interval={3000}/>
        );
    }
}