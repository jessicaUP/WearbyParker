class Product < ApplicationRecord

  validates :gender_id, :name, :color_name, :details, :price, presence: true
  validates :gender_id, inclusion: { in: [1, 2] }

  belongs_to :gender,
    foreign_key: :gender_id,
    primary_key: :id,
    class_name: :Gender

end