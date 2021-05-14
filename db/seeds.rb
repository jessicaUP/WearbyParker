# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#DB CLEAR
User.destroy_all
Product.destroy_all
Gender.destroy_all
FrameWidth.destroy_all
ProductsFrameWidth.destroy_all
Shape.destroy_all
ProductsShape.destroy_all
Color.destroy_all
ProductsColor.destroy_all
Material.destroy_all
ProductsMaterial.destroy_all
NoseBridge.destroy_all
ProductsNoseBridge.destroy_all

#USERS --> address:first users:last
jessica = User.create!(name: 'Jessica Uphoff', password: 'killercat', email: 'jessica@uphoff.com')
nick = User.create!(name: 'Nick Missel', password: 'killercat', email: 'nick@missel.com')
morgan = User.create!(name: 'Morgan Fritz', password: 'killercat', email: 'morgan@fritz.com')
gabby = User.create!(name: 'Gabby West', password: 'killercat', email: 'gabby@west.com')
karl = User.create!(name: 'Karl Smith', password: 'killercat', email: 'karl@smith.com')
brad = User.create!(name: 'Brad Pitt', password: 'killercat', email: 'brad@pitt.com')
bill = User.create!(name: 'Bill Skarsgard', password: 'killercat', email: 'bill@skarsgard.com')
sam = User.create!(name: 'Samantha Frank', password: 'killercat', email: 'samantha@frank.com')
claire = User.create!(name: 'Claire Rose', password: 'killercat', email: 'claire@rose.com')
billy = User.create!(name: 'Billy Bob', password: 'killercat', email: 'billy@bob.com')














#PRODUCTS --> products:last

w1_ainsley = Product.create!(gender_id: 1, name: 'Ainsley', color_name: 'Jet Black', details: ainsley, price: 95)
m1_ainsley = Product.create!(gender_id: 2, name: 'Ainsley', color_name: 'Jet Black', details: ainsley, price: 95)
w2_ainsley = Product.create!(gender_id: 1, name: 'Ainsley', color_name: 'Striped Cypress', details: ainsley, price: 95)
m2_ainsley = Product.create!(gender_id: 2, name: 'Ainsley', color_name: 'Striped Cypress', details: ainsley, price: 95)

w1_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Teal Tortoise', details: butler, price: 95)
m1_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Teal Tortoise', details: butler, price: 95)
w2_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Butterscotch Tortoise', details: butler, price: 95)
m2_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Butterscotch Tortoise', details: butler, price: 95)
w3_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Shoreline Fade', details: butler, price: 95)
m3_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Shoreline Fade', details: butler, price: 95)
w4_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Jet Black', details: butler, price: 95)
m4_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Jet Black', details: butler, price: 95)

w1_elina = Product.create!(gender_id: 1, name: 'Elina', color_name: 'Truffle Tortoise with Polished Gold', details: elina, price: 145)
w2_elina = Product.create!(gender_id: 1, name: 'Elina', color_name: 'Blue Agave with Polished Gold', details: elina, price: 145)

w1_esme = Product.create!(gender_id: 1, name: 'Esme', color_name: 'Sesame Tortoise', details: esme, price: )
m1_esme = Product.create!(gender_id: 2, name: 'Esme', color_name: 'Sesame Tortoise', details: esme, price: )
w2_esme = Product.create!(gender_id: 1, name: 'Esme', color_name: 'Blue Thistle', details: esme, price: )
m2_esme = Product.create!(gender_id: 2, name: 'Esme', color_name: 'Blue Thistle', details: esme, price: )
w3_esme = Product.create!(gender_id: 1, name: 'Esme', color_name: 'Oxblood', details: esme, price: )
m3_esme = Product.create!(gender_id: 2, name: 'Esme', color_name: 'Oxblood', details: esme, price: )

w1_gillian = Product.create!(gender_id: 1, name: 'Gillian', color_name: 'Teal Tortoise', details: gillian, price: 95)
m1_gillian = Product.create!(gender_id: 2, name: 'Gillian', color_name: 'Teal Tortoise', details: gillian, price: 95)
w2_gillian = Product.create!(gender_id: 1, name: 'Gillian', color_name: 'Jet Black', details: gillian, price: 95)
m2_gillian = Product.create!(gender_id: 2, name: 'Gillian', color_name: 'Jet Black', details: gillian, price: 95)
w3_gillian = Product.create!(gender_id: 1, name: 'Gillian', color_name: 'Nutmeg Crystal', details: gillian, price: 95)
m3_gillian = Product.create!(gender_id: 2, name: 'Gillian', color_name: 'Nutmeg Crystal', details: gillian, price: 95)

w_halton = Product.create!(gender_id: 1, name: 'Halton', color_name: 'Jet Black with Polished Gold', details: halton, price: 145)
m_halton = Product.create!(gender_id: 2, name: 'Halton', color_name: 'Jet Black with Polished Gold', details: halton, price: 145)
w_halton = Product.create!(gender_id: 1, name: 'Halton', color_name: 'Nutmeg Crystal with Riesling', details: halton, price: 145)
m_halton = Product.create!(gender_id: 2, name: 'Halton', color_name: 'Nutmeg Crystal with Riesling', details: halton, price: 145)

w1_ivring = Product.create!(gender_id: 1, name: 'Ivring', color_name: 'Black Oak Tortoise', details: ivring, price: 95)
m1_ivring = Product.create!(gender_id: 2, name: 'Ivring', color_name: 'Black Oak Tortoise', details: ivring, price: 95)
w2_ivring = Product.create!(gender_id: 1, name: 'Ivring', color_name: 'Pacific Crystal', details: ivring, price: 95)
m2_ivring = Product.create!(gender_id: 2, name: 'Ivring', color_name: 'Pacific Crystal', details: ivring, price: 95)

w1_jayla = Product.create!(gender_id: 1, name: 'Jayla', color_name: 'Russet Red with Riesling', details: jayla, price: 145)
m1_jayla = Product.create!(gender_id: 2, name: 'Jayla', color_name: 'Russet Red with Riesling', details: jayla, price: 145)
w2_jayla = Product.create!(gender_id: 1, name: 'Jayla', color_name: 'Cognac Tortoise with Polished Gold', details: jayla, price: 145)
m2_jayla = Product.create!(gender_id: 2, name: 'Jayla', color_name: 'Cognac Tortoise with Polished Gold', details: jayla, price: 145)

w1_newcomb = Product.create!(gender_id: 1, name: 'Newcomb', color_name: 'Polished Gold with Savanna Tortoise', details: newcomb, price: 195)
m1_newcomb = Product.create!(gender_id: 2, name: 'Newcomb', color_name: 'Polished Gold with Savanna Tortoise', details: newcomb, price: 195)

w1_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Crystal', details: percey, price: 95)
m1_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Crystal', details: percey, price: 95)
w2_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Petal Tortoise', details: percey, price: 95)
m2_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Petal Tortoise', details: percey, price: 95)
w3_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Tidal Blue', details: percey, price: 95)
m3_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Tidal Blue', details: percey, price: 95)
w4_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Striped Sassafras', details: percey, price: 95)
m4_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Striped Sassafras', details: percey, price: 95)
w5_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Crystal with Oak Barrel and Blue Bay', details: percey, price: 95)
m5_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Crystal with Oak Barrel and Blue Bay', details: percey, price: 95)

w5_thorpe = Product.create!(gender_id: 1, name: 'Thorpe', color_name: 'Poblano with Polished Silver', details: thorpe, price: 95)
m5_thorpe = Product.create!(gender_id: 2, name: 'Thorpe', color_name: 'Poblano with Polished Silver', details: thorpe, price: 95)
w5_thorpe = Product.create!(gender_id: 1, name: 'Thorpe', color_name: 'Acorn Tortoise with Riesling', details: thorpe, price: 95)
m5_thorpe = Product.create!(gender_id: 2, name: 'Thorpe', color_name: 'Acorn Tortoise with Riesling', details: thorpe, price: 95)


