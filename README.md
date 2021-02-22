# Kodeeksempel på brug af WMTS skærmkortet fra Datafordeleren

Kodeeksemplet er baseret på kortbiblioteket [OpenLayers](https://openlayers.org/)

## Installation

* Installer npm/node fra [Node.js](https://nodejs.org/en/)
* Klon dafkort repositoriet
* Installer dafkort's afhængigheder: npm ci
* Din tjenestebrugers username og password indsættes som queryparameter i WMTS tjenestens URL. Linje 31 i index.js.

Test lokalt: npm start

Build: npm run build