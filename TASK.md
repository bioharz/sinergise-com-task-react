# Instructions

This repository is created for your use. Your goal is to create a series of commits (or branches) which will solve the task below.

NOTE: these instructions assume you will be using React. If you feel more confident using raw JavaScript or a different framework, feel free to start a new project and implement the same steps there.

This repository was initialized using a standard [create-react-app](https://github.com/facebook/create-react-app) with these changes:
- `App.js` was simplified,
- `node-sass` package was installed and
- original README.md was removed to avoid confusion.

The task requires use of Sentinel Hub service, but we have tried providing all appropriate parameters that you need to use it. There should be no need for prior knowledge of EO (Earth Observation).

-----

## Task

### Step 1:

Using [sentinelhub-js](https://github.com/sentinel-hub/sentinelhub-js) library, adapt the existing code so that it will display a 512 x 512 pixel image of satellite data inside the `<Content />` component. The image should be centered (vertically and horizontally) on the browser viewport. The satellite data should show Mount Etna (Sicily, Italy) in true color, using Sentinel-2 L2A data (as already set in the preconfigured layer).

One of the parameters you will need is the bounding box of the area (Mount Etna) that will be shown on image. It can be initialized like this:
```
  import { BBox, CRS_EPSG4326 } from '@sentinel-hub/sentinelhub-js';

  const bbox = new BBox(CRS_EPSG4326, 14.95, 37.7, 15.05, 37.8);
```

To achieve the goal you will also need these two parameters:

- Instance id: 7a595734-1c6c-4329-ac93-0e24dcb840dd
- Layer id: TRUECOLOR

### Step 2:

Adapt the previous step so that users can select among 3 different layers.

- Instance id: 7a595734-1c6c-4329-ac93-0e24dcb840dd
- Layer1 id: TRUECOLOR
- Layer2 id: NDVI
- Layer3 id: FALSECOLOR

### Step 3:

Adapt the previous step so that users can select a minimum and a maximum date of the satellite imagery used.

-----

(c) 2020 Sinergise, all rights reserved.