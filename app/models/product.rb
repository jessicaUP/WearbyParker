class Product < ApplicationRecord

  validates :gender_id, :name, :details, :price, presence: true
  validates :gender_id, inclusion: { in: [1, 2] }

#AWS
   

#GENDER
  belongs_to :gender, optional: true,
    foreign_key: :gender_id,
    primary_key: :id,
    class_name: :Gender
    
#FRAME WIDTH
  has_many :products_frame_widths,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :ProductsFrameWidth
  has_many :frame_widths,
    through: :products_frame_widths,
    source: :frame_width
    
#SHAPE
  has_many :products_shapes,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :ProductsShape
  has_many :shapes,
    through: :products_shapes,
    source: :shape
    
#COLOR
  has_many :products_colors,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :ProductsColor
  has_many :colors,
    through: :products_colors,
    source: :color
    
#MATERIAL
  has_many :products_materials,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :ProductsMaterial
  has_many :materials,
    through: :products_materials,
    source: :material
    
#NOSE BRIDGE
  has_many :products_nose_bridges,
    foreign_key: :nose_bridge_id,
    primary_key: :id,
    class_name: :ProductsNoseBridge
  has_many :nose_bridges,
    through: :products_nose_bridges,
    source: :nose_bridge
 

end