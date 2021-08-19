json.extract! @cart, :id
  json.cartItems do
    json.array! @cart_items do |item|
      json.extract! item, :id, :product_id, :price, :prescription_type, :lense_type, :lense_material, :products_frame_width_id
      json.extract! item.product, :name
      json.extract! item.products_color, :color_name
      json.extract! item.frame_width, :frame_width, :description
      json.photo0Url url_for(item.products_color.photo0)
    end
  end
  json.cartTryonItems do
    json.array! @tryon_items do |item|
      json.extract! item, :id, :product_id, :products_color_id, :products_frame_width_id
      json.extract! item.product, :name
      json.extract! item.products_color, :color_name
      # json.framewidths do
        json.extract! item.frame_width, :frame_width, :description
      # end
      json.photo0Url url_for(item.products_color.photo0)
    end
  end

  