json.set! @gender.id do
  json.array! @products do |product|  
    json.extract! product, :id, :name
    json.colors do 
      json.array! product.products_colors do |color|
        json.extract! color, :color_id, :color_name, :id
        json.photo0Url url_for(color.photo0)
      end
    end
    json.frame_widths do 
      json.array! product.frame_widths do |frame_width|
        json.extract! frame_width, :frame_width, :description, :id
      end
    end
  end
end