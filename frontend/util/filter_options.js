

const frameWidthOptions = [
  {
<<<<<<< HEAD
    optionId: 1,
    type: 'extra-narrow',
    name: 'Extra narrow'
  },
  {
    optionId: 2,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'narrow',
    name: 'Narrow' 
  },
  {
<<<<<<< HEAD
    optionId: 3,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'medium',
    name: 'Medium' 
  },
  {
<<<<<<< HEAD
    optionId: 4,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'wide',
    name: 'Wide' 
  },
  {
<<<<<<< HEAD
    optionId: 5,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'extra-wide',
    name: 'Extra wide' 
  }
]

const shapeOptions = [
  {
<<<<<<< HEAD
    optionId: 1,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'rectangle',
    name: 'Rectange',
    image: true
  },
  {
<<<<<<< HEAD
    optionId: 2,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'square',
    name: 'Square',
    image: true
  },
  {
<<<<<<< HEAD
    optionId: 3,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'round',
    name: 'Round',
    image: true
  },
  {
<<<<<<< HEAD
    optionId: 4,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'cateye',
    name: 'Cat-eye',
    image: true
  },
  {
<<<<<<< HEAD
    optionId: 5,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'aviator',
    name: 'Aviator',
    image: true
  }
]
<<<<<<< HEAD

const colorOptions = [
  { 
    optionId: 1,
=======
const colorOptions = [
  { 
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'black',
    name: 'Black',
    color: 'rgb(0, 0, 0)'
  },
  {
<<<<<<< HEAD
    optionId: 2,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'tortoise',
    name: 'Tortoise',
    color: 'rgb(88, 59, 21)'
  },
  {
<<<<<<< HEAD
    optionId: 3,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'two-tone',
    name: 'Two-tone',
    color: 'rgb(0, 0, 0)'
  },
  {
<<<<<<< HEAD
    optionId: 4,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'crystal',
    name: 'Crystal',
    color: 'rgb(205, 226, 243)'
  },
  {
<<<<<<< HEAD
    optionId: 5,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'grey',
    name: 'Grey',
    color: 'rgb(98, 108, 116)'
  },
  {
<<<<<<< HEAD
    optionId: 6,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'brown',
    name: 'Brown',
    color: 'rgb(75, 55, 30)'
  },
  {
<<<<<<< HEAD
    optionId: 7,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'silver',
    name: 'Silver',
    color: 'rgb(160, 160, 158)'
  },
  {
<<<<<<< HEAD
    optionId: 8,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'gold',
    name: 'Gold',
    color: 'rgb(160, 142, 64)'
  },
  {
<<<<<<< HEAD
    optionId: 9,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'blue',
    name: 'Blue',
    color: 'rgb(39, 117, 189)'
  },
  {
<<<<<<< HEAD
    optionId: 10,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'pink',
    name: 'Pink',
    color: 'rgb(207, 125, 150)'
  },
  {
<<<<<<< HEAD
    optionId: 11,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'green',
    name: 'Green',
    color: 'rgb(83, 143, 96)'
  },
  {
<<<<<<< HEAD
    optionId: 12,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'red',
    name: 'Red',
    color: 'rgb(143, 25, 25)'
  }
]

<<<<<<< HEAD
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
=======
const materialOptions = [
  {
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'acetate',
    name: 'Acetate',
    image: true
  },
  {
<<<<<<< HEAD
    optionId: 2,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'metal',
    name: 'Metal',
    image: true
  },
  {
<<<<<<< HEAD
    optionId: 3,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'mixed',
    name: 'Mixed',
    image: true
  }
]

const noseBridgeOptions = [
  {
<<<<<<< HEAD
    optionId: 1,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'standard',
    name: 'Standard',
    desc: 'Typically best for those with narrow or averaged size face and cheekbones'
  },
  {
<<<<<<< HEAD
    optionId: 2,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    type: 'low-bridge-fit',
    name: 'Low bridge fit',
    desc: 'Larger nose pads, slightly curved temples, ultra-roomy fit, and an adjusted lens tilt provide more comfort for those with low bridges, wide faces, and/or high cheekbones.'
  }
]

 export const FILTERS = [
<<<<<<< HEAD
    { type: 'frame_width', name: 'Frame width', options: frameWidthOptions },
    { type: 'shape', name: 'Shape', options: shapeOptions },
    { type: 'color', name: 'Color', options: colorOptions },
    { type: 'material', name: 'Material', options: materialOptions },
    { type: 'nose_bridge', name: 'Nose bridge', options: noseBridgeOptions }
=======
    { type: 'frameWidth', name: 'Frame width', options: frameWidthOptions },
    { type: 'shape', name: 'Shape', options: shapeOptions },
    { type: 'color', name: 'Color', options: colorOptions },
    { type: 'material', name: 'Material', options: materialOptions },
    { type: 'noseBridge', name: 'Nose bridge', options: noseBridgeOptions }
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  ];
