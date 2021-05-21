json.set! @gender.id do
  json.array! @products do |product|  
      json.extract! product, :id, :name
      json.colors do 
        json.array! product.products_colors do |color|
            json.extract! color, :color_id, :color_name, :id
            json.photo0Url url_for(color.photo0)
        end
      end
  end
end