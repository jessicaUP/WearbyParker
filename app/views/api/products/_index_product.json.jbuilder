json.products do 
  products.each do |product|
    json.set! product.id do
      json.extract! :name
      json.colors do 
        product.products_colors.each do |color|
          json.extract! :color_name
        end
      end
    end
  end 
end

