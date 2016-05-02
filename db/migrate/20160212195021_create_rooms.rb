class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :number
      t.string :years_available
      t.string :room_type
      t.string :gender
      t.decimal :price, :precision =>6, :scale =>2
      t.float :area
      t.string :dimensions
      t.integer :floor
      t.integer :rough_housing_num
      t.integer :building_id
      t.string :x_coordinate
      t.string :y_coordinate

      t.float :cleanliness
      t.float :noisiness
      t.float :light
      t.float :social
      t.float :location
      t.float :issues
      t.float :general_rating

      t.boolean :kitchen
      t.boolean :laundry
      t.boolean :ac

      t.timestamps null: false
    end
  end
end
