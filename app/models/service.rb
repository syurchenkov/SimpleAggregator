class Service < ApplicationRecord
  before_save { self.name.downcase! }

  validates :name, presence: true, length: { maximum: 255 },
                                   uniqueness: { case_sensitive: false }
end
