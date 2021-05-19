json.array! products do |product|  
    json.extract! product, :name
    product.products_colors.each do |color|
      json.extract! color, :color, :id
    end
end 
