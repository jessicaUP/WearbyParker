json.extract! product, :id, :name, :details, :price
json.frameWidths do
  json.array! product.products_frame_widths do |frame|
    json.extract! frame, :id
    json.extract! frame.frame_width, :frame_width, :description
  end

end
json.colors do
  json.array! colors do |color|
    json.extract! color, :color_name, :id
    json.photo0Url url_for(color.photo0)
    json.photo1Url url_for(color.photo1)
    json.photo2Url url_for(color.photo2)
    json.photo3Url url_for(color.photo3)
    json.photo4Url url_for(color.photo4)
    json.colorCode do 
      json.extract! color.color, :id
    end
  end
end