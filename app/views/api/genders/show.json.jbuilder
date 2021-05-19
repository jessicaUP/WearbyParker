json.set! @gender.id do
  json.array! @products do |product|  
      json.extract! product, :id, :name
      json.color do 
        product.colors.each do |color|
          json.set! color.id do 
            json.extract! color, :color
          end
        end
      end
  end
end