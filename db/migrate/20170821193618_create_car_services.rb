class CreateCarServices < ActiveRecord::Migration[5.1]
  def change
    create_table :car_services do |t|
      t.string :name
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
