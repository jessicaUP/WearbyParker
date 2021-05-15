# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ainsley = "Ainsley makes a statement through ample acetate, a pronounced 
  keyhole bridge, and our signature Graduated Rivet design\nMade from 
  hand-polished cellulose acetate\nAkulon-coated screws for durability\n\n
  Demonstrated frame widths\nAinsley is available in a medium width\nIf your 
  face is average in size, which is most common, this frame should fit you well. 
  Unsure of your size? Select a few different options in a free Home Try-On."

butler = "Butler is a studious shape that would look right at home in a private
 library with lots of leather-bound tomes. Looks great in the outside world
 too, though.\nMade from hand-polished cellulose acetate\nAkulon-coated screws
 for durability\n\nDemonstrated frame widths\nButler is available in narrow 
 and medium\nChoose a width that corresponds with your face width. If you’re
 still unsure, select a few different sizes in a free Home Try-On."

elina = "Elina has way more to offer than its rounded, easy-to-wear cat-eye
 shape. We elevated the frame with Art Deco-inspired metal temples, sleek 
 temple tips, and a Graduated Rivet design.\nMade from hand-polished cellulose 
 acetate and stainless steel\nAkulon-coated screws for durability\nDemonstrated
 frame widths\nElina is available in a medium width\nIf your face is average 
 in size, which is most common, this frame should fit you well. Unsure of your 
 size? Select a few different options in a free Home Try-On."

esme = "A head turn here. A double take there. Esme commands just this sort of 
  attention with its squarish cat-eyed lenses and overall impression of 
  understated confidence.\nMade from hand-polished cellulose acetate\n
  Akulon-coated screws for durability\n\nDemonstrated frame widths\nEsme is 
  available in narrow and medium\nChoose a width that corresponds with your 
  face width. If you’re still unsure, select a few different sizes in a 
  free Home Try-On."

gillian = "With Gillian, grand proportions (oversized round lenses, anyone?) 
  meet thinner acetate for an airier, softer look. Balance is key, after all.\n
  Made from hand-polished cellulose acetate\nAkulon-coated screws for durability\n
  Demonstrated frame widths\nGillian is available in a medium width\nIf your face 
  is average in size, which is most common, this frame should fit you well. 
  Unsure of your size? Select a few different options in a free Home Try-On."

halton = "Halton's quiet confidence comes from its distinguished features: 
  a mid-century acetate silhouette (with an angular bottom!), Art Deco-inspired 
  metal temples, sleek temple tips, and a Graduated Rivet design.\nMade from 
  hand-polished cellulose acetate and stainless steel\nAkulon-coated screws for 
  durability\n\nDemonstrated frame widths\nHalton is available in a medium width\n
  If your face is average in size, which is most common, this frame should fit 
  you well. Unsure of your size? Select a few different options in a free Home Try-On."

irving = "Meticulously sculptured acetate surrounds Irving’s statement round 
  lenses, and adds an element of depth and dimension to its smart-looking 
  silhouette.\nMade from hand-polished cellulose acetate\nAkulon-coated screws 
  for durability\n\nDemonstrated frame widths\nIrving is available in a wide width\n
  If you have a wide or broad face, this frame should fit you well. Unsure of 
  your size? Select a few different options in a free Home Try-On."

jayla = "Jayla draws inspiration from a few of our favorite design eras, with 
  its roomy mid-century acetate silhouette, Art Deco-inspired metal temples, 
  sleek temple tips, and Graduated Rivet design.\nMade from hand-polished 
  cellulose acetate and stainless steel\nAkulon-coated screws for durability\n
  Demonstrated frame widths\n\nJayla is available in a wide width\nIf you have a 
  wide or broad face, this frame should fit you well. Unsure of your size? Select 
  a few different options in a free Home Try-On."

newcomb = "A featherlight titanium style, Newcomb combines rounded lenses, a 
  sleek brow bar, and custom tortoise patterns painted by hand and with heat.\n
  Made from the strongest, lightest ion-plated titanium\nAkulon-coated screws 
  for durability\nTitanium temple tips\n\nPVC nose pads prevent slipping and 
  pressure\nDemonstrated frame widths\nNewcomb is available in a narrow width\n
  If you have a slender or narrow face, this frame should fit you well. 
  Unsure of your size? Select a few different options in a free Home Try-On."

percey = "With round lenses and a keyhole bridge, Percey is a bookish modern 
  classic.\nMade from hand-polished cellulose acetate\nAkulon-coated screws for 
  durability\n\nDemonstrated frame widths\nFrom top to bottom: extra wide, wide, 
  medium, extra narrow\nPercey is available in extra narrow, narrow, medium, 
  wide, and extra wide\nChoose a width that corresponds with your own face width, 
  e.g., pick a narrow frame if you have a narrow face (and so on). If you’re 
  still unsure of your size, select a few different options in a free Home Try-On."

thorpe = "Inspired by classic circular frames from various eras, Thorpe
  features Art Deco-inspired metal temples, sleek temple tips, and a Graduated 
  Rivet design. If you're a fan of round lenses, look no further.\nMade from 
  hand-polished cellulose acetate and stainless steel\nAkulon-coated screws for 
  durability\n\nDemonstrated frame widths\nThorpe is available in a medium width\n
  If your face is average in size, which is most common, this frame should fit 
  you well. Unsure of your size? Select a few different options in a free Home Try-On."

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

#USERS --> last in user group
jessica = User.create!(name: 'Jessica Uphoff', password: 'killercat', email: 'jessica@uphoff.com')
nick = User.create!(name: 'Nick Missel', password: 'killercat', email: 'nick@missel.com')
morgan = User.create!(name: 'Morgan Fritz', password: 'killercat', email: 'morgan@fritz.com')
gabby = User.create!(name: 'Gabby West', password: 'killercat', email: 'gabby@west.com')
karl = User.create!(name: 'Karl Brown', password: 'killercat', email: 'karl@brown.com')
brad = User.create!(name: 'Brad Pitt', password: 'killercat', email: 'brad@pitt.com')
bill = User.create!(name: 'Bill Skarsgard', password: 'killercat', email: 'bill@skarsgard.com')
sam = User.create!(name: 'Samantha Frank', password: 'killercat', email: 'samantha@frank.com')
claire = User.create!(name: 'Claire Rose', password: 'killercat', email: 'claire@rose.com')
billy = User.create!(name: 'Billy Bob', password: 'killercat', email: 'billy@bob.com')


#FILTERS --> first in product group

Gender.create!(gender: 'Women')
Gender.create!(gender: 'Men')

FrameWidth.create!(frame_width: 'Extra narrow') #1
FrameWidth.create!(frame_width: 'Narrow') #2
FrameWidth.create!(frame_width: 'Medium') #3
FrameWidth.create!(frame_width: 'Wide') #4
FrameWidth.create!(frame_width: 'Extra wide') #5

Shape.create!(shape: 'Rectangle') #1
Shape.create!(shape: 'Square') #2
Shape.create!(shape: 'Round') #3
Shape.create!(shape: 'Cat-eye') #4
Shape.create!(shape: 'Aviator') #5

Color.create!(color: 'Black') #1
Color.create!(color: 'Tortoise') #2
Color.create!(color: 'Two-tone') #3
Color.create!(color: 'Crystal') #4
Color.create!(color: 'Grey') #5
Color.create!(color: 'Brown') #6
Color.create!(color: 'Silver') #7
Color.create!(color: 'Gold') #8
Color.create!(color: 'Blue') #9
Color.create!(color: 'Pink') #10
Color.create!(color: 'Green') #11
Color.create!(color: 'Red') #12

Material.create!(material: 'Metal') #1
Material.create!(material: 'Acetate') #2
Material.create!(material: 'Mixed') #3

NoseBridge.create!(nose_bridge: 'Standard') #1
NoseBridge.create!(nose_bridge: 'Low bridge fit') #2


#PRODUCTS --> 2nd product group

w1_ainsley = Product.create!(gender_id: 1, name: 'Ainsley', color_name: 'Jet Black', details: ainsley, price: 95)
m2_ainsley = Product.create!(gender_id: 2, name: 'Ainsley', color_name: 'Jet Black', details: ainsley, price: 95)
w3_ainsley = Product.create!(gender_id: 1, name: 'Ainsley', color_name: 'Striped Cypress', details: ainsley, price: 95)
m4_ainsley = Product.create!(gender_id: 2, name: 'Ainsley', color_name: 'Striped Cypress', details: ainsley, price: 95)

w5_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Teal Tortoise', details: butler, price: 95)
m6_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Teal Tortoise', details: butler, price: 95)
w7_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Butterscotch Tortoise', details: butler, price: 95)
m8_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Butterscotch Tortoise', details: butler, price: 95)
w9_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Shoreline Fade', details: butler, price: 95)
m10_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Shoreline Fade', details: butler, price: 95)
w11_butler = Product.create!(gender_id: 1, name: 'Butler', color_name: 'Jet Black', details: butler, price: 95)
m12_butler = Product.create!(gender_id: 2, name: 'Butler', color_name: 'Jet Black', details: butler, price: 95)

w13_elina = Product.create!(gender_id: 1, name: 'Elina', color_name: 'Truffle Tortoise with Polished Gold', details: elina, price: 145)
w14_elina = Product.create!(gender_id: 1, name: 'Elina', color_name: 'Blue Agave with Polished Gold', details: elina, price: 145)

w15_esme = Product.create!(gender_id: 1, name: 'Esme', color_name: 'Sesame Tortoise', details: esme, price: 95)
m16_esme = Product.create!(gender_id: 2, name: 'Esme', color_name: 'Sesame Tortoise', details: esme, price: 95)
w17_esme = Product.create!(gender_id: 1, name: 'Esme', color_name: 'Blue Thistle', details: esme, price: 95)
m18_esme = Product.create!(gender_id: 2, name: 'Esme', color_name: 'Blue Thistle', details: esme, price: 95)
w19_esme = Product.create!(gender_id: 1, name: 'Esme', color_name: 'Oxblood', details: esme, price: 95)
m20_esme = Product.create!(gender_id: 2, name: 'Esme', color_name: 'Oxblood', details: esme, price: 95)

w21_gillian = Product.create!(gender_id: 1, name: 'Gillian', color_name: 'Teal Tortoise', details: gillian, price: 95)
m22_gillian = Product.create!(gender_id: 2, name: 'Gillian', color_name: 'Teal Tortoise', details: gillian, price: 95)
w23_gillian = Product.create!(gender_id: 1, name: 'Gillian', color_name: 'Jet Black', details: gillian, price: 95)
m24_gillian = Product.create!(gender_id: 2, name: 'Gillian', color_name: 'Jet Black', details: gillian, price: 95)
w25_gillian = Product.create!(gender_id: 1, name: 'Gillian', color_name: 'Nutmeg Crystal', details: gillian, price: 95)
m26_gillian = Product.create!(gender_id: 2, name: 'Gillian', color_name: 'Nutmeg Crystal', details: gillian, price: 95)

w27_halton = Product.create!(gender_id: 1, name: 'Halton', color_name: 'Jet Black with Polished Gold', details: halton, price: 145)
m28_halton = Product.create!(gender_id: 2, name: 'Halton', color_name: 'Jet Black with Polished Gold', details: halton, price: 145)
w29_halton = Product.create!(gender_id: 1, name: 'Halton', color_name: 'Nutmeg Crystal with Riesling', details: halton, price: 145)
m30_halton = Product.create!(gender_id: 2, name: 'Halton', color_name: 'Nutmeg Crystal with Riesling', details: halton, price: 145)

w31_irving = Product.create!(gender_id: 1, name: 'Irving', color_name: 'Black Oak Tortoise', details: irving, price: 95)
m32_irving = Product.create!(gender_id: 2, name: 'Irving', color_name: 'Black Oak Tortoise', details: irving, price: 95)
w33_irving = Product.create!(gender_id: 1, name: 'Irving', color_name: 'Pacific Crystal', details: irving, price: 95)
m34_irving = Product.create!(gender_id: 2, name: 'Irving', color_name: 'Pacific Crystal', details: irving, price: 95)

w35_jayla = Product.create!(gender_id: 1, name: 'Jayla', color_name: 'Russet Red with Riesling', details: jayla, price: 145)
m36_jayla = Product.create!(gender_id: 2, name: 'Jayla', color_name: 'Russet Red with Riesling', details: jayla, price: 145)
w37_jayla = Product.create!(gender_id: 1, name: 'Jayla', color_name: 'Cognac Tortoise with Polished Gold', details: jayla, price: 145)
m38_jayla = Product.create!(gender_id: 2, name: 'Jayla', color_name: 'Cognac Tortoise with Polished Gold', details: jayla, price: 145)

w39_newcomb = Product.create!(gender_id: 1, name: 'Newcomb', color_name: 'Polished Gold with Savanna Tortoise', details: newcomb, price: 195)
m40_newcomb = Product.create!(gender_id: 2, name: 'Newcomb', color_name: 'Polished Gold with Savanna Tortoise', details: newcomb, price: 195)

w41_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Crystal', details: percey, price: 95)
m42_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Crystal', details: percey, price: 95)
w43_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Petal Tortoise', details: percey, price: 95)
m44_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Petal Tortoise', details: percey, price: 95)
w45_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Tidal Blue', details: percey, price: 95)
m46_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Tidal Blue', details: percey, price: 95)
w47_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Striped Sassafras', details: percey, price: 95)
m48_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Striped Sassafras', details: percey, price: 95)
w49_percey = Product.create!(gender_id: 1, name: 'Percey', color_name: 'Crystal with Oak Barrel and Blue Bay', details: percey, price: 95)
m50_percey = Product.create!(gender_id: 2, name: 'Percey', color_name: 'Crystal with Oak Barrel and Blue Bay', details: percey, price: 95)

w51_thorpe = Product.create!(gender_id: 1, name: 'Thorpe', color_name: 'Poblano with Polished Silver', details: thorpe, price: 95)
m52_thorpe = Product.create!(gender_id: 2, name: 'Thorpe', color_name: 'Poblano with Polished Silver', details: thorpe, price: 95)
w53_thorpe = Product.create!(gender_id: 1, name: 'Thorpe', color_name: 'Acorn Tortoise with Riesling', details: thorpe, price: 95)
m54_thorpe = Product.create!(gender_id: 2, name: 'Thorpe', color_name: 'Acorn Tortoise with Riesling', details: thorpe, price: 95)


#JOINS
#FRAMEWIDTH
ProductsFrameWidth.create!(product_id: 1, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 1, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 2, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 2, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 3, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 3, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 4, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 4, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 4, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 5, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 5, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 6, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 6, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 6, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 7, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 7, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 8, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 8, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 8, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 9, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 9, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 10, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 10, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 10, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 11, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 11, frame_width_id: 5)

#SHAPE
#AINSLEY (1..4)
ProductsShape.create!(product_id: 1, shape_id: 3)
ProductsShape.create!(product_id: 2, shape_id: 3)
ProductsShape.create!(product_id: 3, shape_id: 3)
ProductsShape.create!(product_id: 4, shape_id: 3)
#BUTLER (5..12)
ProductsShape.create!(product_id: 5, shape_id: 3)
ProductsShape.create!(product_id: 6, shape_id: 3)
ProductsShape.create!(product_id: 7, shape_id: 3)
ProductsShape.create!(product_id: 8, shape_id: 3)
ProductsShape.create!(product_id: 9, shape_id: 3)
ProductsShape.create!(product_id: 10, shape_id: 3)
ProductsShape.create!(product_id: 11, shape_id: 3)
ProductsShape.create!(product_id: 12, shape_id: 3)
#ELINA (13..14)
ProductsShape.create!(product_id: 13, shape_id: 3)
ProductsShape.create!(product_id: 14, shape_id: 3)
#ESME (15..20)
ProductsShape.create!(product_id: 15, shape_id: 1)
ProductsShape.create!(product_id: 16, shape_id: 1)
ProductsShape.create!(product_id: 17, shape_id: 1)
ProductsShape.create!(product_id: 18, shape_id: 1)
ProductsShape.create!(product_id: 19, shape_id: 1)
ProductsShape.create!(product_id: 20, shape_id: 1)
#GILLIAN (21..26)
ProductsShape.create!(product_id: 21, shape_id: 3)
ProductsShape.create!(product_id: 22, shape_id: 3)
ProductsShape.create!(product_id: 23, shape_id: 3)
ProductsShape.create!(product_id: 24, shape_id: 3)
ProductsShape.create!(product_id: 25, shape_id: 3)
ProductsShape.create!(product_id: 26, shape_id: 3)
#HALTON (27..30)
ProductsShape.create!(product_id: 27, shape_id: 2)
ProductsShape.create!(product_id: 28, shape_id: 2)
ProductsShape.create!(product_id: 29, shape_id: 2)
ProductsShape.create!(product_id: 30, shape_id: 2)
#HALTON (27..30) --> duplicate, need rectangle
ProductsShape.create!(product_id: 27, shape_id: 1)
ProductsShape.create!(product_id: 28, shape_id: 1)
ProductsShape.create!(product_id: 29, shape_id: 1)
ProductsShape.create!(product_id: 30, shape_id: 1)
#IRVING (31..34)
ProductsShape.create!(product_id: 31, shape_id: 4)
ProductsShape.create!(product_id: 32, shape_id: 4)
ProductsShape.create!(product_id: 33, shape_id: 4)
ProductsShape.create!(product_id: 34, shape_id: 4)
#JAYLA (35..38)
ProductsShape.create!(product_id: 35, shape_id: 4)
ProductsShape.create!(product_id: 37, shape_id: 4)
ProductsShape.create!(product_id: 38, shape_id: 4)
#NEWCOMB (39..40)
ProductsShape.create!(product_id: 39, shape_id: 2)
ProductsShape.create!(product_id: 40, shape_id: 2)
#PERCEY (41..50)
ProductsShape.create!(product_id: 41, shape_id: 2)
ProductsShape.create!(product_id: 42, shape_id: 2)
ProductsShape.create!(product_id: 43, shape_id: 2)
ProductsShape.create!(product_id: 44, shape_id: 2)
ProductsShape.create!(product_id: 45, shape_id: 2)
ProductsShape.create!(product_id: 46, shape_id: 2)
ProductsShape.create!(product_id: 47, shape_id: 2)
ProductsShape.create!(product_id: 48, shape_id: 2)
ProductsShape.create!(product_id: 49, shape_id: 2)
ProductsShape.create!(product_id: 50, shape_id: 2)
#PERCEY (41..50) --> duplicate, need rectangle
ProductsShape.create!(product_id: 41, shape_id: 1)
ProductsShape.create!(product_id: 42, shape_id: 1)
ProductsShape.create!(product_id: 43, shape_id: 1)
ProductsShape.create!(product_id: 44, shape_id: 1)
ProductsShape.create!(product_id: 45, shape_id: 1)
ProductsShape.create!(product_id: 46, shape_id: 1)
ProductsShape.create!(product_id: 47, shape_id: 1)
ProductsShape.create!(product_id: 48, shape_id: 1)
ProductsShape.create!(product_id: 49, shape_id: 1)
ProductsShape.create!(product_id: 50, shape_id: 1)
#THROPE (51..54)
ProductsShape.create!(product_id: 51, shape_id: 3)
ProductsShape.create!(product_id: 52, shape_id: 3)
ProductsShape.create!(product_id: 53, shape_id: 3)
ProductsShape.create!(product_id: 54, shape_id: 3)


#COLOR CATEGORY - black, tortoise, two-tone, crystal, grey, brown, silver, gold, blue , pink, green, red
#AINSLEY (1..4)
ProductsColor.create!(product_id: 1, color_id: 1)
ProductsColor.create!(product_id: 2, color_id: 1)
ProductsColor.create!(product_id: 3, color_id: 11)
ProductsColor.create!(product_id: 4, color_id: 11)
ProductsColor.create!(product_id: 5, color_id: 2)
ProductsColor.create!(product_id: 6, color_id: 2)
ProductsColor.create!(product_id: 7, color_id: 2)
ProductsColor.create!(product_id: 8, color_id: 2)
ProductsColor.create!(product_id: 9, color_id: 9)
ProductsColor.create!(product_id: 10, color_id: 9)
ProductsColor.create!(product_id: 11, color_id: 1)
ProductsColor.create!(product_id: 12, color_id: 1)
ProductsColor.create!(product_id: 13, color_id: 2)
ProductsColor.create!(product_id: 14, color_id: 9)
ProductsColor.create!(product_id: 15, color_id: 2)
ProductsColor.create!(product_id: 16, color_id: 2)
ProductsColor.create!(product_id: 17, color_id: 9)
ProductsColor.create!(product_id: 18, color_id: 9)
ProductsColor.create!(product_id: 19, color_id: 12)
ProductsColor.create!(product_id: 20, color_id: 12)
ProductsColor.create!(product_id: 21, color_id: 2)
ProductsColor.create!(product_id: 22, color_id: 2)
ProductsColor.create!(product_id: 23, color_id: 1)
ProductsColor.create!(product_id: 24, color_id: 1)
ProductsColor.create!(product_id: 25, color_id: 4)
ProductsColor.create!(product_id: 26, color_id: 4)
ProductsColor.create!(product_id: 27, color_id: 1)
ProductsColor.create!(product_id: 28, color_id: 1)
ProductsColor.create!(product_id: 29, color_id: 4)
ProductsColor.create!(product_id: 30, color_id: 4)
ProductsColor.create!(product_id: 31, color_id: 1)
ProductsColor.create!(product_id: 32, color_id: 1)
ProductsColor.create!(product_id: 33, color_id: 4)
ProductsColor.create!(product_id: 34, color_id: 4)
ProductsColor.create!(product_id: 35, color_id: 12)
ProductsColor.create!(product_id: 36, color_id: 12)
ProductsColor.create!(product_id: 37, color_id: 2)
ProductsColor.create!(product_id: 38, color_id: 2)
ProductsColor.create!(product_id: 39, color_id: 2)
ProductsColor.create!(product_id: 40, color_id: 2)
ProductsColor.create!(product_id: 41, color_id: 4)
ProductsColor.create!(product_id: 42, color_id: 4)
ProductsColor.create!(product_id: 43, color_id: 2)
ProductsColor.create!(product_id: 44, color_id: 2)
ProductsColor.create!(product_id: 45, color_id: 9)
ProductsColor.create!(product_id: 46, color_id: 9)
ProductsColor.create!(product_id: 47, color_id: 3)
ProductsColor.create!(product_id: 48, color_id: 3)
ProductsColor.create!(product_id: 49, color_id: 4)
ProductsColor.create!(product_id: 50, color_id: 4)
ProductsColor.create!(product_id: 51, color_id: 7)
ProductsColor.create!(product_id: 52, color_id: 7)
ProductsColor.create!(product_id: 53, color_id: 2) 
ProductsColor.create!(product_id: 53, color_id: 2) 

#MATERIALS
ProductsMaterial.create!(product_id: 1, material_id: 2)
ProductsMaterial.create!(product_id: 2, material_id: 2)
ProductsMaterial.create!(product_id: 3, material_id: 2)
ProductsMaterial.create!(product_id: 4, material_id: 2)
ProductsMaterial.create!(product_id: 5, material_id: 2)
ProductsMaterial.create!(product_id: 6, material_id: 2)
ProductsMaterial.create!(product_id: 7, material_id: 2)
ProductsMaterial.create!(product_id: 8, material_id: 2)
ProductsMaterial.create!(product_id: 9, material_id: 2)
ProductsMaterial.create!(product_id: 10, material_id: 2)
ProductsMaterial.create!(product_id: 11, material_id: 2)
ProductsMaterial.create!(product_id: 12, material_id: 2)
ProductsMaterial.create!(product_id: 13, material_id: 3)
ProductsMaterial.create!(product_id: 14, material_id: 3)
ProductsMaterial.create!(product_id: 15, material_id: 2)
ProductsMaterial.create!(product_id: 16, material_id: 2)
ProductsMaterial.create!(product_id: 17, material_id: 2)
ProductsMaterial.create!(product_id: 18, material_id: 2)
ProductsMaterial.create!(product_id: 19, material_id: 2)
ProductsMaterial.create!(product_id: 20, material_id: 2)
ProductsMaterial.create!(product_id: 21, material_id: 2)
ProductsMaterial.create!(product_id: 22, material_id: 2)
ProductsMaterial.create!(product_id: 23, material_id: 2)
ProductsMaterial.create!(product_id: 24, material_id: 2)
ProductsMaterial.create!(product_id: 25, material_id: 2)
ProductsMaterial.create!(product_id: 26, material_id: 2)
ProductsMaterial.create!(product_id: 27, material_id: 3)
ProductsMaterial.create!(product_id: 28, material_id: 3)
ProductsMaterial.create!(product_id: 29, material_id: 3)
ProductsMaterial.create!(product_id: 30, material_id: 3)
ProductsMaterial.create!(product_id: 31, material_id: 2)
ProductsMaterial.create!(product_id: 32, material_id: 2)
ProductsMaterial.create!(product_id: 33, material_id: 2)
ProductsMaterial.create!(product_id: 34, material_id: 2)
ProductsMaterial.create!(product_id: 35, material_id: 3)
ProductsMaterial.create!(product_id: 36, material_id: 3)
ProductsMaterial.create!(product_id: 37, material_id: 3)
ProductsMaterial.create!(product_id: 38, material_id: 3)
ProductsMaterial.create!(product_id: 39, material_id: 1)
ProductsMaterial.create!(product_id: 40, material_id: 1)
ProductsMaterial.create!(product_id: 41, material_id: 2)
ProductsMaterial.create!(product_id: 42, material_id: 2)
ProductsMaterial.create!(product_id: 43, material_id: 2)
ProductsMaterial.create!(product_id: 44, material_id: 2)
ProductsMaterial.create!(product_id: 45, material_id: 2)
ProductsMaterial.create!(product_id: 46, material_id: 2)
ProductsMaterial.create!(product_id: 47, material_id: 2)
ProductsMaterial.create!(product_id: 48, material_id: 2)
ProductsMaterial.create!(product_id: 49, material_id: 2)
ProductsMaterial.create!(product_id: 50, material_id: 2)
ProductsMaterial.create!(product_id: 51, material_id: 3)
ProductsMaterial.create!(product_id: 52, material_id: 3)
ProductsMaterial.create!(product_id: 53, material_id: 3) 
ProductsMaterial.create!(product_id: 53, material_id: 3) 

#NOSE BRIDGE
ProductsNoseBridge.create!(product_id: 1, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 2, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 3, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 4, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 5, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 6, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 7, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 8, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 9, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 10, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 11, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 12, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 13, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 14, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 15, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 16, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 17, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 18, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 19, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 20, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 21, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 22, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 23, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 24, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 25, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 26, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 27, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 28, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 29, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 30, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 31, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 32, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 33, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 34, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 35, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 36, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 37, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 38, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 39, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 40, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 41, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 42, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 43, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 44, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 45, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 46, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 47, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 48, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 49, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 50, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 51, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 52, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 53, nose_bridge_id: 1) 
ProductsNoseBridge.create!(product_id: 53, nose_bridge_id: 1) 