class Product < ApplicationRecord

  validates :gender_id, :name, :color_name, :details, :price, presence: true
  validates :gender_id, inclusion: { in: [1, 2] }

#AWS
  has_one_attached :photo 

#GENDER
  belongs_to :gender,
    foreign_key: :gender_id,
    primary_key: :id,
    class_name: :Gender

#FRAME WIDTH
  has_many :joins,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :ProductsFrameWidth
  has_one :frame_width,
    through: :joins,
    source: :joins

#COLOR
  has_many :joins,
    foreign_key: :color_id,
    primary_key: :id,
    class_name: :ProductsColor
  has_one :color,
    through: :joins,
    source: :joins

#MATERIAL
  has_many :joins,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :ProductsMaterial
  has_one :material,
    through: :joins,
    source: :joins

#NOSE BRIDGE
  has_many :joins,
    foreign_key: :nose_bridge_id,
    primary_key: :id,
    class_name: :ProductsNoseBridge
  has_one :nose_bridge,
    through: :joins,
    source: :joins

end