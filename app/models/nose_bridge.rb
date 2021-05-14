class NoseBridge < ApplicationRecord

  validates :nose_bridge, presence: true
  validates :nose_bridge, inclusion: { in: ['Standard', 'Low-bridge', 'Fit'] }

  has_many :joins,
    foreign_key: :nose_bridge_id,
    primary_key: :id,
    class_name: :ProductsNoseBridge

  has_many :products,
    through: :joins,
    source: :joins

end