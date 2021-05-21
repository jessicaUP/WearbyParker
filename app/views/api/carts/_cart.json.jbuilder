json.cart do
json.extract! @cart, :id
  json.cartItems do
    json.array! @cart_items do |item|
      json.extract! item, :product_id, :quantity, :prescription_type, :prescription_method, :lense_type, :lense_material
      json.extract! item.product, :name
      json.extract! item.products_color, :color_name
      json.photo0Url url_for(color.photo0)
      json.extract! item.products_frame_width.frame_width, :frame_width, :description
    end
  end
  json.cartTryonItems do
    json.array! @tryon_items do |item|
      json.extract! item, :product_id, :products_color_id
      json.extract! item.product, :name
      json.extract! item.products_color, :color_name, :id
      json.extract! color, :color_name, :id
      json.photo0Url url_for(color.photo0)
      json.extract! item.products_frame_width.frame_width, :frame_width, :description, :id
    end
  end
end
  