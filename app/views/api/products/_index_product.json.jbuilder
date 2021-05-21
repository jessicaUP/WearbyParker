json.array! products do |product|  
    json.extract! product, :name
    product.products_colors.each do |color|
      json.extract! color, :color, :color_name, :id
          json.extract! color, :color_name, :id
          json.photo0Url url_for(color.photo0)
    end
end 
