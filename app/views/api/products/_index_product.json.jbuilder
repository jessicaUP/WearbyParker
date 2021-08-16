json.array! products do |product|  
    json.extract! product, :name
    product.products_colors.each do |color|
      json.extract! color, :color, :color_name, :id
        #   json.extract! color, :color_name, :id
          json.photo0Url url_for(color.photo0)
          json.colorCode do 
            json.extract! color.color, :id
          end
    end
    product.products_frame_widths.each do |frameWidth|
        json.extract! frameWidth, :frame_width, :description
    end
end 
