

const frameWidthOptions = [
  {
    type: 'narrow',
    name: 'Narrow' 
  },
  {
    type: 'medium',
    name: 'Medium' 
  },
  {
    type: 'wide',
    name: 'Wide' 
  },
  {
    type: 'extra-wide',
    name: 'Extra wide' 
  }
]

const shapeOptions = [
  {
    type: 'rectangle',
    name: 'Rectange',
    image: true
  },
  {
    type: 'square',
    name: 'Square',
    image: true
  },
  {
    type: 'round',
    name: 'Round',
    image: true
  },
  {
    type: 'cateye',
    name: 'Cat-eye',
    image: true
  },
  {
    type: 'aviator',
    name: 'Aviator',
    image: true
  }
]
const colorOptions = [
  { 
    type: 'black',
    name: 'Black',
    color: 'rgb(0, 0, 0)'
  },
  {
    type: 'tortoise',
    name: 'Tortoise',
    color: 'rgb(88, 59, 21)'
  },
  {
    type: 'two-tone',
    name: 'Two-tone',
    color: 'rgb(0, 0, 0)'
  },
  {
    type: 'crystal',
    name: 'Crystal',
    color: 'rgb(205, 226, 243)'
  },
  {
    type: 'grey',
    name: 'Grey',
    color: 'rgb(98, 108, 116)'
  },
  {
    type: 'brown',
    name: 'Brown',
    color: 'rgb(75, 55, 30)'
  },
  {
    type: 'silver',
    name: 'Silver',
    color: 'rgb(160, 160, 158)'
  },
  {
    type: 'gold',
    name: 'Gold',
    color: 'rgb(160, 142, 64)'
  },
  {
    type: 'blue',
    name: 'Blue',
    color: 'rgb(39, 117, 189)'
  },
  {
    type: 'pink',
    name: 'Pink',
    color: 'rgb(207, 125, 150)'
  },
  {
    type: 'green',
    name: 'Green',
    color: 'rgb(83, 143, 96)'
  },
  {
    type: 'red',
    name: 'Red',
    color: 'rgb(143, 25, 25)'
  }
]

const materialOptions = [
  {
    type: 'acetate',
    name: 'Acetate',
    image: true
  },
  {
    type: 'metal',
    name: 'Metal',
    image: true
  },
  {
    type: 'mixed',
    name: 'Mixed',
    image: true
  }
]

const noseBridgeOptions = [
  {
    type: 'standard',
    name: 'Standard',
    desc: 'Typically best for those with narrow or averaged size face and cheekbones'
  },
  {
    type: 'low-bridge-fit',
    name: 'Low bridge fit',
    desc: 'Larger nose pads, slightly curved temples, ultra-roomy fit, and an adjusted lens tilt provide more comfort for those with low bridges, wide faces, and/or high cheekbones.'
  }
]

 export const FILTERS = [
    { type: 'frameWidth', name: 'Frame width', options: frameWidthOptions },
    { type: 'shape', name: 'Shape', options: shapeOptions },
    { type: 'color', name: 'Color', options: colorOptions },
    { type: 'material', name: 'Material', options: materialOptions },
    { type: 'noseBridge', name: 'Nose bridge', options: noseBridgeOptions }
  ];
