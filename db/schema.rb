# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_23_053937) do

  create_table "posts", force: :cascade do |t|
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "routes", force: :cascade do |t|
    t.string "route_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_name"
    t.string "function_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "image_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.integer "route1_id"
    t.integer "route2_id"
    t.integer "route3_id"
    t.string "password_digest"
    t.string "uid"
    t.string "provider"
    t.string "owner_name"
    t.string "address"
    t.string "open_time"
    t.string "close_time"
    t.string "url"
    t.string "feature"
    t.string "owner_images"
    t.string "phone_number"
    t.string "marker_type"
  end

end
