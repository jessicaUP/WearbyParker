# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_14_132554) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "colors", force: :cascade do |t|
    t.string "color", null: false
  end

  create_table "frame_widths", force: :cascade do |t|
    t.string "frame_width", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string "gender", null: false
    t.index ["gender"], name: "index_genders_on_gender"
  end

  create_table "materials", force: :cascade do |t|
    t.string "material", null: false
  end

  create_table "nose_bridges", force: :cascade do |t|
    t.string "nose_bridge", null: false
  end

  create_table "products", force: :cascade do |t|
    t.integer "gender_id", null: false
    t.string "name", null: false
    t.string "color_name", null: false
    t.text "details", null: false
    t.float "price", null: false
    t.index ["gender_id"], name: "index_products_on_gender_id"
    t.index ["name"], name: "index_products_on_name"
    t.index ["price"], name: "index_products_on_price"
  end

  create_table "products_colors", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "color_id", null: false
  end

  create_table "products_frame_widths", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "frame_width_id", null: false
  end

  create_table "products_materials", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "material_id", null: false
  end

  create_table "products_nose_bridges", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "nose_bridge_id", null: false
  end

  create_table "products_shapes", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "shape_id", null: false
  end

  create_table "shapes", force: :cascade do |t|
    t.string "shape", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name"], name: "index_users_on_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
