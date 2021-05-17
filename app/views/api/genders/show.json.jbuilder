json.array! @products do |product|    
    json.extract! :name
    json.photoTileUrl url_for(product.photo)
    json.colors do 
      json.array! product.colors.each do |color|
      debugger
        json.extract! color :id, :name
      end
    end
end 
