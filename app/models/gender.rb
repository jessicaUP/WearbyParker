class Gender < ApplicationRecord

  validates :gender, presence: true
  validates :gender, inclusion: { in: ['Women', 'Men'] }

  has_many :products,
    foreign_key: :gender_id,
    primary_key: :id,
    class_name: :Product

end