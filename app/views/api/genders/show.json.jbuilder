json.set! @gender.id do
  json.array! @products do |product|  
<<<<<<< HEAD
    json.extract! product, :id, :name, :gender_id
    json.colors do 
      json.array! product.products_colors do |color|
        if !@colors
          json.extract! color, :color_id, :color_name, :id
          json.photo0Url url_for(color.photo0)
        elsif @colors.include?(color.color.id)
          json.extract! color, :color_id, :color_name, :id
          json.photo0Url url_for(color.photo0)
        end
=======
    json.extract! product, :id, :name
    json.colors do 
      json.array! product.products_colors do |color|
        json.extract! color, :color_id, :color_name, :id
        json.photo0Url url_for(color.photo0)
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
      end
    end
    json.frame_widths do 
      json.array! product.frame_widths do |frame_width|
        json.extract! frame_width, :frame_width, :description, :id
      end
    end
  end
end