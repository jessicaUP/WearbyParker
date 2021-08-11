class Api::GendersController < ApplicationController

  def show
    @gender = Gender.find(params[:id])
    @products = @gender.products
    
    render :show
  end

  def index
    
    @gender = Gender.find(search_params[:genderId].to_i)
    @products = @gender.products
        if search_params[:filters]

      selectedFilters = search_params[:filters]
      # @products = @products.joins(:frame_widths, :shapes, :colors, :materials, :nose_bridges)
      filters = ['frame_width', 'shape', 'color', 'material', 'nose_bridge']

      collected_products = []
      filters.each do |filter_name| 
        filter = selectedFilters[filter_name] 
        case filter_name 
          when 'frame_width'
            if filter
              next_step = filter.map do |id|
                FrameWidth.find(id.to_i).products
              end
              collected_products << next_step
            end
          when 'shape'
            if filter
              next_step = filter.map do |id|
                Shape.find(id.to_i).products
              end
              collected_products << next_step
            end
          when 'color'
            if filter
              next_step = filter.map do |id|
                Color.find(id.to_i).products
              end
              collected_products << next_step
            end
          when 'material'
            if filter
              next_step = filter.map do |id|
                Material.find(id.to_i).products
              end
              collected_products << next_step
            end
          when 'nose_bridge'
            if filter
              next_step = filter.map do |id|
                NoseBridge.find(id.to_i).products
              end
              collected_products << next_step
            end
        end

        
      end

      filter_combine = []
      collected_products.each do |type_arr| 
        array = type_arr
        first = array.pop.to_a
        while array.length > 0 do 
          next_step = array.pop.to_a
          first = (first | next_step)
        end
        filter_combine << first
      end

      total = []
      
      first = filter_combine.pop.to_a
      while filter_combine.length > 0 do 
        next_step = filter_combine.pop.to_a
        first = (first | next_step)
      end
      total << first
      
      # combined = final.map do |type_arr| 
      #   array = type_arr.to_a
      #   first = array.pop.to_a
      #   while array.length > 0 do 
      #     next_step = array.pop.to_a
      #     first = (first & next_step)
      #   end
      #   first
      # end
      
      @products = (@products.to_a & total[0])
      
    #   # FIRST TRY 

    #   selectedFilters = params[:filters]
    #   # @products = @products.joins(:frame_widths, :shapes, :colors, :materials, :nose_bridges)
    #   filters = ['frame_widths', 'shapes', 'colors', 'materials', 'nose_bridges']
    #   filters.map do |filter_name|
    #     if selectedFilters[filter_name] 
    #       options = selectedFilters[filter_name] 
    #       debugger
    #       options.map do |option|
    #         Products[option]
    #         # type = filter_name[0..-2]
    #         # return @products.where([filter_name] => { [type]: option })
    #       end

    #       final = options.pop
    #       while options.length > 0 do 
    #         next_step = options.pop
    #         final = final || next_step
    #       end
    #       return final
    #     end

    #   end 

    #   final = filters.pop
    #   while filters.length > 0 do
    #     next_step = filters.pop
    #     final = final && next_step
    #   end
    #   # filter_arr.map do |filter|
    #   #   debugger
    #   #   @products.where(:frame_widths => {frame_width: 'Wide'})
    #   # end

    #   @products = final
    end


    render :show
  end
  
  # def index
  #   product_params = gender_params
  #   gender = Gender.find(params[:id]);
  #   gender.filter_products(product_params[:filters])
    
  #   render :show
  # end

  private 

  def search_params
    params.permit(:genderId, filters: {
      frame_width: [],
      shape: [],
      color: [],
      material: [],
      nose_bridge: []

    })
  end


end