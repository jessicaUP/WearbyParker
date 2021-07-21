json.extract! @cart, :id
  json.cartItems do
    json.array! @cart_items do |item|
      json.extract! item, :product_id, :price, :prescription_type, :lense_type, :lense_material
      json.extract! item.product, :name
      json.extract! item.products_color, :color_name
      json.extract! item.products_frame_width.frame_width, :frame_width, :description
      json.photo0Url url_for(item.products_color.photo0)
    end
  end
  json.cartTryonItems do
    json.array! @tryon_items do |item|
      json.extract! item, :product_id, :products_color_id
      json.extract! item.product, :name
      json.extract! item.products_color, :color_name, :id
      json.extract! item.products_color, :color_name, :id
      json.extract! item.products_frame_width.frame_width, :frame_width, :description, :id
    end
  end

  