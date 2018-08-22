import * as path from 'path';
import {
  generateTheme,
  IColorSet
} from 'vscode-theme-generator';

import Vibrant = require('node-vibrant');

// 2001
let image = 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/63/9f/p0639ffn.jpg';
// image = 'https://studybreaks.com/wp-content/uploads/2018/02/2001-space-odyssey-120-1200-1200-675-675-crop-000000.jpg';
image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_j8p5MWEYqp7L0uLoZvnlY04VSaKRsrixwABu4OiINKlHJoe';

// Grand Budapest
// image = 'https://cdn-images-1.medium.com/max/1344/0*cUGLrTyfRA7IDc4I.jpg';

// Good, Bad, Ugly
// image = 'https://images1.dallasobserver.com/imager/u/original/7462463/the-good-the-bad-and-the-ugly-1920x1080.jpg'

// Shining
// image = 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/55893_articleimage_original.jpeg?itok=E7vksv8i&resize=1100x1100';

// Aurora
// image = 'https://img1.cgtrader.com/items/761345/9610ef1ed9/mountain-aurora-borealis-3d-model-blend.jpg';

// 28 days
// image = 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/06/28_days_later_still.jpg'

// OoT
//image = 'https://vignette.wikia.nocookie.net/zelda/images/6/69/Sacred_Forest_Meadow.png/revision/latest?cb=20100123025313'


let vibrant; 
let lightVibrant;
let darkVibrant;
let muted;
let lightMuted;
let darkMuted;


// dark vs
// light-ish blue keywords
// lighter colored variable names
// reddish quotes
// dark gray background

const defaultColor: string = '#000000';

Vibrant.from(image).getPalette((err, palette) => {
  console.log(palette);
  if (palette.Vibrant) {
    vibrant = palette.Vibrant.getHex();
    console.log(vibrant);
  }
  if (palette.LightVibrant) {
    lightVibrant = palette.LightVibrant.getHex();
    console.log(lightVibrant);
  }
  if (palette.DarkVibrant) {
    darkVibrant = palette.DarkVibrant.getHex();
    console.log(darkVibrant);
  }
  if (palette.Muted) {
    muted = palette.Muted.getHex();
    console.log(muted);
  }
  if (palette.LightMuted) {
    lightMuted = palette.LightMuted.getHex();
    console.log(lightMuted);
  }
  if (palette.DarkMuted) {
    darkMuted = palette.DarkMuted.getHex();
    console.log(darkMuted);
  }
  

  // dark vs
  // light-ish blue keywords
  // lighter colored variable names
  // reddish quotes
  // dark gray background

  darkMuted = "#1e1e1e";
  const colorSet: IColorSet = {
    base: {
      background: darkMuted || defaultColor,
      foreground: lightMuted || defaultColor,
      color1: muted || defaultColor,
      color2: vibrant || defaultColor,
      color3: darkVibrant || defaultColor,
      color4: lightVibrant || defaultColor
    }
  };

  let themeName = 'Generated';
  generateTheme(themeName, colorSet, path.join(__dirname, 'themes', 'generated.json'));

  const colorSet1: IColorSet = {
    base: {
      background: darkMuted || defaultColor,
      foreground: lightMuted || defaultColor,
      color1: muted || defaultColor,
      color2: vibrant || defaultColor,
      color3: vibrant || defaultColor,
      color4: lightVibrant || defaultColor
    }
  };

  themeName = 'Generated-1';
  generateTheme(themeName, colorSet1, path.join(__dirname, 'themes', 'generated-1.json'));
});