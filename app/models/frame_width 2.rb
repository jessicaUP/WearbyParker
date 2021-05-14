class FrameWidth < ApplicationRecord

  validates :frame_width, presence: true
  validates :frame_width, inclusion: { in: ['Extra narrow', 'Narrow', 'Medium', 'Wide', 'Extra wide'] }

  has_many :joins,
    foreign_key: :frame_width_id,
    primary_key: :id,
    class_name: :ProductsFrameWidth

  has_many :products,
    through: :joins,
    source: :joins

end