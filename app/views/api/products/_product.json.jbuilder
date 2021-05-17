json.extract! product, :id, :name, :details, :price
json.photoUrl url_for(product.photo)
json.colors do 
  product.products_colors.each do |color|
    json.extract! :color
  end
end