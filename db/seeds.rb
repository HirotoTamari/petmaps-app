# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

routes = ["飲食店", "病院", "ホテル", "トリミング"]
routes.each do |route|
    Route.create(name: route)
end

User.create(name: "first", email: "aa", image_name: "/default_user.jpg", password: "12345678", route1_id: 1, route2_id: 2, route3_id: 3)