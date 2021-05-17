json.array! products do |product|  
json.pr  
    json.extract! :name
    json.photoTileUrl url_for(product.photo)
    product.products_colors.each do |color|
      json.extract! color.color
    end
end 
