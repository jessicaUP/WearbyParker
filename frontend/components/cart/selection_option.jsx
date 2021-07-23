import React from 'react';


class SelectionOption extends React.Component {
  constructor(props) {

    super(props);
  };


  selectionPages(pageNum) {

    


  render() {
    let { genderId } = this.props
    if (!genderId) return null;


      let nextPage = pageNum++;
      let title, options;

      switch (pageNum) {
        case 1:
          // FRAME WIDTHÍ
          title = 'Select a frame width'
          options = product.frameWidths.map((frameWidth) => {
            return (
              {
                type: 'frame_width',
                name: frameWidth.frame_width,
                priceName: '',
                desc: frameWidth.description
              }
            )
          });

        case 2:
          // PRESCRIPTION
          title = 'Select a prescription type'
          options = prescriptionOptions;
          break;
        case 3:
          // LENSE TYPE
          title = 'Select a lens type'
          options = lenseOptions;
          break;
        case 4:
          // LENSE MATERIAL
          title = 'Select a lens material'
          options = materialOptions;
          break;
      }

    }

    let productArray = Object.values(genderId)[0]

    return (
      <div className='product-index'>
        {
          productArray.map(product => <ProductTile key={product.id} product={product} />)
        }
      </div>
    )
  }
};


export default SelectionOption;