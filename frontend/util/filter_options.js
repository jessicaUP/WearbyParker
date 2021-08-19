

const frameWidthOptions = [
  {
    optionId: 1,
    type: 'extra-narrow',
    name: 'Extra narrow'
  },
  {
    optionId: 2,
    type: 'narrow',
    name: 'Narrow' 
  },
  {
    optionId: 3,
    type: 'medium',
    name: 'Medium' 
  },
  {
    optionId: 4,
    type: 'wide',
    name: 'Wide' 
  },
  {
    optionId: 5,
    type: 'extra-wide',
    name: 'Extra wide' 
  }
]

const shapeOptions = [
  {
    optionId: 1,
    type: 'rectangle',
    name: 'Rectange',
    image: true
  },
  {
    optionId: 2,
    type: 'square',
    name: 'Square',
    image: true
  },
  {
    optionId: 3,
    type: 'round',
    name: 'Round',
    image: true
  },
  {
    optionId: 4,
    type: 'cateye',
    name: 'Cat-eye',
    image: true
  },
  {
    optionId: 5,
    type: 'aviator',
    name: 'Aviator',
    image: true
  }
]

const colorOptions = [
  { 
    optionId: 1,
    type: 'black',
    name: 'Black',
    color: 'rgb(0, 0, 0)'
  },
  {
    optionId: 13,
    type: 'yellow',
    name: 'Yellow',
    color: 'rgb(255, 235, 56)'
  },
  {
    optionId: 2,
    type: 'tortoise',
    name: 'Tortoise',
    color: 'rgb(88, 59, 21)'
  },
  {
    optionId: 3,
    type: 'two-tone',
    name: 'Two-tone',
    color: 'rgb(0, 0, 0)'
  },
  {
    optionId: 4,
    type: 'crystal',
    name: 'Crystal',
    color: 'rgb(252, 243, 229)'
  },
  {
    optionId: 5,
    type: 'grey',
    name: 'Grey',
    color: 'rgb(98, 108, 116)'
  },
  {
    optionId: 6,
    type: 'brown',
    name: 'Brown',
    color: 'rgb(75, 55, 30)'
  },
  {
    optionId: 7,
    type: 'silver',
    name: 'Silver',
    color: 'rgb(160, 160, 158)'
  },
  {
    optionId: 8,
    type: 'gold',
    name: 'Gold',
    color: 'rgb(160, 142, 64)'
  },
  {
    optionId: 9,
    type: 'blue',
    name: 'Blue',
    color: 'rgb(39, 117, 189)'
  },
  {
    optionId: 10,
    type: 'pink',
    name: 'Pink',
    color: 'rgb(207, 125, 150)'
  },
  {
    optionId: 11,
    type: 'green',
    name: 'Green',
    color: 'rgb(83, 143, 96)'
  },
  {
    optionId: 12,
    type: 'red',
    name: 'Red',
    color: 'rgb(143, 25, 25)'
  }

]

export const colorCode = (colorId) => {
  let code;
  colorOptions.forEach(obj => {
   if (obj.optionId === colorId) {
     code = obj.color;
   }
  })
  return code
}

const materialOptions = [
  {
    optionId: 1,
    type: 'acetate',
    name: 'Acetate',
    image: true
  },
  {
    optionId: 2,
    type: 'metal',
    name: 'Metal',
    image: true
  },
  {
    optionId: 3,
    type: 'mixed',
    name: 'Mixed',
    image: true
  }
]

const noseBridgeOptions = [
  {
    optionId: 1,
    type: 'standard',
    name: 'Standard',
    desc: 'Typically best for those with narrow or averaged size face and cheekbones'
  },
  {
    optionId: 2,
    type: 'low-bridge-fit',
    name: 'Low bridge fit',
    desc: 'Larger nose pads, slightly curved temples, ultra-roomy fit, and an adjusted lens tilt provide more comfort for those with low bridges, wide faces, and/or high cheekbones.'
  }
]

 export const FILTERS = [
    { type: 'frame_width', name: 'Frame width', options: frameWidthOptions },
    { type: 'shape', name: 'Shape', options: shapeOptions },
    { type: 'color', name: 'Color', options: colorOptions },
    { type: 'material', name: 'Material', options: materialOptions },
    { type: 'nose_bridge', name: 'Nose bridge', options: noseBridgeOptions }
  ];
