require 'open-uri'


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ainsley = "Ainsley makes a statement through ample acetate, a pronounced 
  keyhole bridge, and our signature Graduated Rivet design#Made from 
  hand-polished cellulose acetate#Akulon-coated screws for durability#
  Demonstrated frame widths#Ainsley is available in a medium width#If your 
  face is average in size, which is most common, this frame should fit you well. 
  Unsure of your size? Select a few different options in a free Home Try-On."

butler = "Butler is a studious shape that would look right at home in a private
 library with lots of leather-bound tomes. Looks great in the outside world
 too, though.#Made from hand-polished cellulose acetate#Akulon-coated screws
 for durability#Demonstrated frame widths#Butler is available in narrow 
 and medium#Choose a width that corresponds with your face width. If you’re
 still unsure, select a few different sizes in a free Home Try-On."

elina = "Elina has way more to offer than its rounded, easy-to-wear cat-eye
 shape. We elevated the frame with Art Deco-inspired metal temples, sleek 
 temple tips, and a Graduated Rivet design.#Made from hand-polished cellulose 
 acetate and stainless steel#Akulon-coated screws for durability#Demonstrated
 frame widths#Elina is available in a medium width#If your face is average 
 in size, which is most common, this frame should fit you well. Unsure of your 
 size? Select a few different options in a free Home Try-On."

esme = "A head turn here. A double take there. Esme commands just this sort of 
  attention with its squarish cat-eyed lenses and overall impression of 
  understated confidence.#Made from hand-polished cellulose acetate#
  Akulon-coated screws for durability#Demonstrated frame widths#Esme is 
  available in narrow and medium#Choose a width that corresponds with your 
  face width. If you’re still unsure, select a few different sizes in a 
  free Home Try-On."

gillian = "With Gillian, grand proportions (oversized round lenses, anyone?) 
  meet thinner acetate for an airier, softer look. Balance is key, after all.#
  Made from hand-polished cellulose acetate#Akulon-coated screws for durability#
  Demonstrated frame widths#Gillian is available in a medium width#If your face 
  is average in size, which is most common, this frame should fit you well. 
  Unsure of your size? Select a few different options in a free Home Try-On."

halton = "Halton's quiet confidence comes from its distinguished features: 
  a mid-century acetate silhouette (with an angular bottom!), Art Deco-inspired 
  metal temples, sleek temple tips, and a Graduated Rivet design.#Made from 
  hand-polished cellulose acetate and stainless steel#Akulon-coated screws for 
  durability#Demonstrated frame widths#Halton is available in a medium width#
  If your face is average in size, which is most common, this frame should fit 
  you well. Unsure of your size? Select a few different options in a free Home Try-On."

irving = "Meticulously sculptured acetate surrounds Irving’s statement round 
  lenses, and adds an element of depth and dimension to its smart-looking 
  silhouette.#Made from hand-polished cellulose acetate#Akulon-coated screws 
  for durability#Demonstrated frame widths#Irving is available in a wide width#
  If you have a wide or broad face, this frame should fit you well. Unsure of 
  your size? Select a few different options in a free Home Try-On."

jayla = "Jayla draws inspiration from a few of our favorite design eras, with 
  its roomy mid-century acetate silhouette, Art Deco-inspired metal temples, 
  sleek temple tips, and Graduated Rivet design.#Made from hand-polished 
  cellulose acetate and stainless steel#Akulon-coated screws for durability#
  Demonstrated frame widths#Jayla is available in a wide width#If you have a 
  wide or broad face, this frame should fit you well. Unsure of your size? Select 
  a few different options in a free Home Try-On."

newcomb = "A featherlight titanium style, Newcomb combines rounded lenses, a 
  sleek brow bar, and custom tortoise patterns painted by hand and with heat.#
  Made from the strongest, lightest ion-plated titanium#Akulon-coated screws 
  for durability#Titanium temple tips#PVC nose pads prevent slipping and 
  pressure#Demonstrated frame widths#Newcomb is available in a narrow width#
  If you have a slender or narrow face, this frame should fit you well. 
  Unsure of your size? Select a few different options in a free Home Try-On."

percey = "With round lenses and a keyhole bridge, Percey is a bookish modern 
  classic.#Made from hand-polished cellulose acetate#Akulon-coated screws for 
  durability#Demonstrated frame widths#From top to bottom: extra wide, wide, 
  medium, extra narrow#Percey is available in extra narrow, narrow, medium, 
  wide, and extra wide#Choose a width that corresponds with your own face width, 
  e.g., pick a narrow frame if you have a narrow face (and so on). If you’re 
  still unsure of your size, select a few different options in a free Home Try-On."

thorpe = "Inspired by classic circular frames from various eras, Thorpe
  features Art Deco-inspired metal temples, sleek temple tips, and a Graduated 
  Rivet design. If you're a fan of round lenses, look no further.#Made from 
  hand-polished cellulose acetate and stainless steel#Akulon-coated screws for 
  durability#Demonstrated frame widths#Thorpe is available in a medium width#
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
jessica = User.create!(id: 1, name: 'Jessica Uphoff', password: 'killercat', email: 'jessica@uphoff.com')
nick = User.create!(id: 2, name: 'Nick Missel', password: 'killercat', email: 'nick@missel.com')
morgan = User.create!(id: 3, name: 'Morgan Fritz', password: 'killercat', email: 'morgan@fritz.com')
gabby = User.create!(id: 4, name: 'Gabby West', password: 'killercat', email: 'gabby@west.com')
karl = User.create!(id: 5, name: 'Karl Brown', password: 'killercat', email: 'karl@brown.com')
brad = User.create!(id: 6, name: 'Brad Pitt', password: 'killercat', email: 'brad@pitt.com')
bill = User.create!(id: 7, name: 'Bill Skarsgard', password: 'killercat', email: 'bill@skarsgard.com')
sam = User.create!(id: 8, name: 'Samantha Frank', password: 'killercat', email: 'samantha@frank.com')
claire = User.create!(id: 9, name: 'Claire Rose', password: 'killercat', email: 'claire@rose.com')
billy = User.create!(id: 10, name: 'Billy Bob', password: 'killercat', email: 'billy@bob.com')


#FILTERS --> first in product group

Gender.create!(id: 1, gender: 'Women')
Gender.create!(id: 2, gender: 'Men')

FrameWidth.create!(id: 1, frame_width: 'Extra narrow', description: 'If you have an especially slender or narrow face') #1
FrameWidth.create!(id: 2, frame_width: 'Narrow', description: 'if you have a slender or narrow face') #2
FrameWidth.create!(id: 3, frame_width: 'Medium', description: 'If you face is average in size (the most common option!)') #3
FrameWidth.create!(id: 4, frame_width: 'Wide', description: 'If you have a wide or broad face') #4
FrameWidth.create!(id: 5, frame_width: 'Extra wide', description: 'If you have an especially wide or broad face') #5

Shape.create!(id: 1, shape: 'Rectangle') #1
Shape.create!(id: 2, shape: 'Square') #2
Shape.create!(id: 3, shape: 'Round') #3
Shape.create!(id: 4, shape: 'Cat-eye') #4
Shape.create!(id: 5, shape: 'Aviator') #5

Color.create!(id: 1, color: 'Black') #1
Color.create!(id: 2, color: 'Tortoise') #2
Color.create!(id: 3, color: 'Two-tone') #3
Color.create!(id: 4, color: 'Crystal') #4
Color.create!(id: 5, color: 'Grey') #5
Color.create!(id: 6, color: 'Brown') #6
Color.create!(id: 7, color: 'Silver') #7
Color.create!(id: 8, color: 'Gold') #8
Color.create!(id: 9, color: 'Blue') #9
Color.create!(id: 10, color: 'Pink') #10
Color.create!(id: 11, color: 'Green') #11
Color.create!(id: 12, color: 'Red') #12
Color.create!(id: 13, color: 'Yellow') #13

Material.create!(id: 1, material: 'Metal') #1
Material.create!(id: 2, material: 'Acetate') #2
Material.create!(id: 3, material: 'Mixed') #3

NoseBridge.create!(id: 1, nose_bridge: 'Standard') #1
NoseBridge.create!(id: 2, nose_bridge: 'Low bridge fit') #2


#PRODUCTS --> 2nd product group

w1_ainsley = Product.create!(id: 1, gender_id: 1, name: 'Ainsley', details: ainsley, price: 95)
m2_ainsley = Product.create!(id: 2, gender_id: 2, name: 'Ainsley', details: ainsley, price: 95)


w5_butler = Product.create!(id: 3, gender_id: 1, name: 'Butler', details: butler, price: 95)
m6_butler = Product.create!(id: 4, gender_id: 2, name: 'Butler', details: butler, price: 95)

w13_elina = Product.create!(id: 5, gender_id: 1, name: 'Elina', details: elina, price: 145)

w15_esme = Product.create!(id: 7, gender_id: 1, name: 'Esme', details: esme, price: 95)
m16_esme = Product.create!(id: 8, gender_id: 2, name: 'Esme', details: esme, price: 95)

w21_gillian = Product.create!(id: 9, gender_id: 1, name: 'Gillian', details: gillian, price: 95)
m22_gillian = Product.create!(id: 10, gender_id: 2, name: 'Gillian', details: gillian, price: 95)

w27_halton = Product.create!(id: 11, gender_id: 1, name: 'Halton', details: halton, price: 145)
m28_halton = Product.create!(id: 12, gender_id: 2, name: 'Halton', details: halton, price: 145)

w31_irving = Product.create!(id: 13, gender_id: 1, name: 'Irving', details: irving, price: 95)
m32_irving = Product.create!(id: 14, gender_id: 2, name: 'Irving', details: irving, price: 95)

w35_jayla = Product.create!(id: 15, gender_id: 1, name: 'Jayla', details: jayla, price: 145)
m36_jayla = Product.create!(id: 16, gender_id: 2, name: 'Jayla', details: jayla, price: 145)

w39_newcomb = Product.create!(id: 17, gender_id: 1, name: 'Newcomb', details: newcomb, price: 195)
m40_newcomb = Product.create!(id: 18, gender_id: 2, name: 'Newcomb', details: newcomb, price: 195)

w41_percey = Product.create!(id: 19, gender_id: 1, name: 'Percey', details: percey, price: 95)
m42_percey = Product.create!(id: 20, gender_id: 2, name: 'Percey', details: percey, price: 95)

w51_thorpe = Product.create!(id: 21, gender_id: 1, name: 'Thorpe', details: thorpe, price: 95)
m52_thorpe = Product.create!(id: 22, gender_id: 2, name: 'Thorpe', details: thorpe, price: 95)



#JOINS
#FRAMEWIDTH
ProductsFrameWidth.create!(product_id: 1, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 1, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 2, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 2, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 3, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 3, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 4, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 4, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 5, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 5, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 7, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 7, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 7, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 8, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 8, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 8, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 9, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 9, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 10, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 10, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 11, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 11, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 11, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 12, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 12, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 12, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 13, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 13, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 14, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 14, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 15, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 15, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 15, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 16, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 16, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 16, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 17, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 17, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 18, frame_width_id: 1)
ProductsFrameWidth.create!(product_id: 18, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 19, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 19, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 20, frame_width_id: 2)
ProductsFrameWidth.create!(product_id: 20, frame_width_id: 3)
ProductsFrameWidth.create!(product_id: 21, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 21, frame_width_id: 5)
ProductsFrameWidth.create!(product_id: 22, frame_width_id: 4)
ProductsFrameWidth.create!(product_id: 22, frame_width_id: 5)

#SHAPE
#AINSLEY (1..4)
ProductsShape.create!(product_id: 1, shape_id: 3)
ProductsShape.create!(product_id: 2, shape_id: 3)
#BUTLER (5..12)
ProductsShape.create!(product_id: 3, shape_id: 3)
ProductsShape.create!(product_id: 4, shape_id: 3)
#ELINA (13..14)
ProductsShape.create!(product_id: 5, shape_id: 3)
#ESME (15..20)
ProductsShape.create!(product_id: 7, shape_id: 1)
ProductsShape.create!(product_id: 8, shape_id: 1)
#GILLIAN (21..26)
ProductsShape.create!(product_id: 9, shape_id: 3)
ProductsShape.create!(product_id: 10, shape_id: 3)
#HALTON (27..30)
ProductsShape.create!(product_id: 11, shape_id: 2)
ProductsShape.create!(product_id: 12, shape_id: 2)
#HALTON (27..30) --> duplicate, need rectangle
ProductsShape.create!(product_id: 11, shape_id: 1)
ProductsShape.create!(product_id: 12, shape_id: 1)
#IRVING (31..34)
ProductsShape.create!(product_id: 13, shape_id: 4)
ProductsShape.create!(product_id: 14, shape_id: 4)
#JAYLA (35..38)
ProductsShape.create!(product_id: 15, shape_id: 4)
ProductsShape.create!(product_id: 16, shape_id: 4)
#NEWCOMB (39..40
ProductsShape.create!(product_id: 17, shape_id: 2)
ProductsShape.create!(product_id: 18, shape_id: 2)
#PERCEY (41..50)
ProductsShape.create!(product_id: 19, shape_id: 2)
ProductsShape.create!(product_id: 20, shape_id: 2)
#PERCEY (41..50) --> duplicate, need rectangle
ProductsShape.create!(product_id: 19, shape_id: 1)
ProductsShape.create!(product_id: 20, shape_id: 1)
#THROPE (51..54)
ProductsShape.create!(product_id: 21, shape_id: 3)
ProductsShape.create!(product_id: 22, shape_id: 3)


#COLOR CATEGORY - black, tortoise, two-tone, crystal, grey, brown, silver, gold, blue , pink, green, red
#AINSLEY (1..4)
a = ProductsColor.create!(product_id: 1, color_id: 1, color_name: 'Jet Black')
    a0 = open('https://wearby-parker-seed.s3.amazonaws.com/a0.jpeg')
    a.photo0.attach(io: a0, filename: 'a0.jpeg')
    a1 = open('https://wearby-parker-seed.s3.amazonaws.com/a1.jpeg')
    a.photo1.attach(io: a1, filename: 'a1.jpeg')
    a2 = open('https://wearby-parker-seed.s3.amazonaws.com/a2.jpeg')
    a.photo2.attach(io: a2, filename: 'a2.jpeg')
    a3 = open('https://wearby-parker-seed.s3.amazonaws.com/a3.jpeg')
    a.photo3.attach(io: a3, filename: 'a3.jpeg')
    a4 = open('https://wearby-parker-seed.s3.amazonaws.com/a4.jpeg')
    a.photo4.attach(io: a4, filename: 'a4.jpeg')
b = ProductsColor.create!(product_id: 2, color_id: 1, color_name: 'Jet Black')
    b0 = open('https://wearby-parker-seed.s3.amazonaws.com/a0.jpeg')
    b.photo0.attach(io: b0, filename: 'b0.jpeg')
    b1 = open('https://wearby-parker-seed.s3.amazonaws.com/a1.jpeg')
    b.photo1.attach(io: b1, filename: 'b1.jpeg')
    b2 = open('https://wearby-parker-seed.s3.amazonaws.com/b2.jpeg')
    b.photo2.attach(io: b2, filename: 'b2.jpeg')
    b3 = open('https://wearby-parker-seed.s3.amazonaws.com/a3.jpeg')
    b.photo3.attach(io: b3, filename: 'b3.jpeg')
    b4 = open('https://wearby-parker-seed.s3.amazonaws.com/a4.jpeg')
    b.photo4.attach(io: b4, filename: 'b4.jpeg')
c = ProductsColor.create!(product_id: 1, color_id: 11, color_name: 'Striped Cypress')
    c0 = open('https://wearby-parker-seed.s3.amazonaws.com/d3.jpeg')
    c.photo0.attach(io: c0, filename: 'c0.jpeg')
    c1 = open('https://wearby-parker-seed.s3.amazonaws.com/c1.jpeg')
    c.photo1.attach(io: c1, filename: 'c1.jpeg')
    c2 = open('https://wearby-parker-seed.s3.amazonaws.com/c2.jpeg')
    c.photo2.attach(io: c2, filename: 'c2.jpeg')
    c3 = open('https://wearby-parker-seed.s3.amazonaws.com/d3.jpeg')
    c.photo3.attach(io: c3, filename: 'c3.jpeg')
    c4 = open('https://wearby-parker-seed.s3.amazonaws.com/c4.jpeg')
    c.photo4.attach(io: c4, filename: 'c4.jpeg')
d = ProductsColor.create!(product_id: 2, color_id: 11, color_name: 'Striped Cypress')
    d0 = open('https://wearby-parker-seed.s3.amazonaws.com/d3.jpeg')
    d.photo0.attach(io: d0, filename: 'd0.jpeg')
    d1 = open('https://wearby-parker-seed.s3.amazonaws.com/c1.jpeg')
    d.photo1.attach(io: d1, filename: 'd1.jpeg')
    d2 = open('https://wearby-parker-seed.s3.amazonaws.com/d2.jpeg')
    d.photo2.attach(io: d2, filename: 'd2.jpeg')
    d3 = open('https://wearby-parker-seed.s3.amazonaws.com/d3.jpeg')
    d.photo3.attach(io: d3, filename: 'd3.jpeg')
    d4 = open('https://wearby-parker-seed.s3.amazonaws.com/c4.jpeg')
    d.photo4.attach(io: d4, filename: 'd4.jpeg')
e = ProductsColor.create!(product_id: 3, color_id: 2, color_name: 'Teal Tortoise')
    e0 = open('https://wearby-parker-seed.s3.amazonaws.com/e0.jpeg')
    e.photo0.attach(io: e0, filename: 'e0.jpeg')
    e1 = open('https://wearby-parker-seed.s3.amazonaws.com/e1.jpeg')
    e.photo1.attach(io: e1, filename: 'e1.jpeg')
    e2 = open('https://wearby-parker-seed.s3.amazonaws.com/e2.jpeg')
    e.photo2.attach(io: e2, filename: 'e2.jpeg')
    e3 = open('https://wearby-parker-seed.s3.amazonaws.com/e3.jpeg')
    e.photo3.attach(io: e3, filename: 'e3.jpeg')
    e4 = open('https://wearby-parker-seed.s3.amazonaws.com/e4.jpeg')
    e.photo4.attach(io: e4, filename: 'e4.jpeg')
f = ProductsColor.create!(product_id: 4, color_id: 2, color_name: 'Teal Tortoise')
    f0 = open('https://wearby-parker-seed.s3.amazonaws.com/e0.jpeg')
    f.photo0.attach(io: f0, filename: 'f0.jpeg')
    f1 = open('https://wearby-parker-seed.s3.amazonaws.com/e1.jpeg')
    f.photo1.attach(io: f1, filename: 'f1.jpeg')
    f2 = open('https://wearby-parker-seed.s3.amazonaws.com/f2.jpeg')
    f.photo2.attach(io: f2, filename: 'f2.jpeg')
    f3 = open('https://wearby-parker-seed.s3.amazonaws.com/e3.jpeg')
    f.photo3.attach(io: f3, filename: 'f3.jpeg')
    f4 = open('https://wearby-parker-seed.s3.amazonaws.com/e4.jpeg')
    f.photo4.attach(io: f4, filename: 'f4.jpeg')
g = ProductsColor.create!(product_id: 3, color_id: 2, color_name: 'Butterscotch Tortoise')
    g0 = open('https://wearby-parker-seed.s3.amazonaws.com/g0.jpeg')
    g.photo0.attach(io: g0, filename: 'g0.jpeg')
    g1 = open('https://wearby-parker-seed.s3.amazonaws.com/g1.jpeg')
    g.photo1.attach(io: g1, filename: 'g1.jpeg')
    g2 = open('https://wearby-parker-seed.s3.amazonaws.com/g2.jpeg')
    g.photo2.attach(io: g2, filename: 'g2.jpeg')
    g3 = open('https://wearby-parker-seed.s3.amazonaws.com/g3.jpeg')
    g.photo3.attach(io: g3, filename: 'g3.jpeg')
    g4 = open('https://wearby-parker-seed.s3.amazonaws.com/g4.jpeg')
    g.photo4.attach(io: g4, filename: 'g4.jpeg')
gg = ProductsColor.create!(product_id: 4, color_id: 2, color_name: 'Butterscotch Tortoise')
    gg0 = open('https://wearby-parker-seed.s3.amazonaws.com/g0.jpeg')
    gg.photo0.attach(io: gg0, filename: 'gg0.jpeg')
    gg1 = open('https://wearby-parker-seed.s3.amazonaws.com/g1.jpeg')
    gg.photo1.attach(io: gg1, filename: 'gg1.jpeg')
    gg2 = open('https://wearby-parker-seed.s3.amazonaws.com/gg2.jpeg')
    gg.photo2.attach(io: gg2, filename: 'gg2.jpeg')
    gg3 = open('https://wearby-parker-seed.s3.amazonaws.com/g3.jpeg')
    gg.photo3.attach(io: gg3, filename: 'gg3.jpeg')
    gg4 = open('https://wearby-parker-seed.s3.amazonaws.com/g4.jpeg')
    gg.photo4.attach(io: gg4, filename: 'gg4.jpeg')
h = ProductsColor.create!(product_id: 3, color_id: 9, color_name: 'Shoreline Fade')
    h0 = open('https://wearby-parker-seed.s3.amazonaws.com/h0.jpeg')
    h.photo0.attach(io: h0, filename: 'h0.jpeg')
    h1 = open('https://wearby-parker-seed.s3.amazonaws.com/h1.jpeg')
    h.photo1.attach(io: h1, filename: 'h1.jpeg')
    h2 = open('https://wearby-parker-seed.s3.amazonaws.com/h2.jpeg')
    h.photo2.attach(io: h2, filename: 'h2.jpeg')
    h3 = open('https://wearby-parker-seed.s3.amazonaws.com/h3.jpeg')
    h.photo3.attach(io: h3, filename: 'h3.jpeg')
    h4 = open('https://wearby-parker-seed.s3.amazonaws.com/h4.jpeg')
    h.photo4.attach(io: h4, filename: 'h4.jpeg')
i = ProductsColor.create!(product_id: 4, color_id: 9, color_name: 'Shoreline Fade')
    i0 = open('https://wearby-parker-seed.s3.amazonaws.com/h0.jpeg')
    i.photo0.attach(io: i0, filename: 'i0.jpeg')
    i1 = open('https://wearby-parker-seed.s3.amazonaws.com/h1.jpeg')
    i.photo1.attach(io: i1, filename: 'i1.jpeg')
    i2 = open('https://wearby-parker-seed.s3.amazonaws.com/f2.jpeg')
    i.photo2.attach(io: i2, filename: 'i2.jpeg')
    i3 = open('https://wearby-parker-seed.s3.amazonaws.com/h3.jpeg')
    i.photo3.attach(io: i3, filename: 'i3.jpeg')
    i4 = open('https://wearby-parker-seed.s3.amazonaws.com/h4.jpeg')
    i.photo4.attach(io: i4, filename: 'i4.jpeg')
j = ProductsColor.create!(product_id: 3, color_id: 1, color_name: 'Jet Black')
    j0 = open('https://wearby-parker-seed.s3.amazonaws.com/j0.jpeg')
    j.photo0.attach(io: j0, filename: 'j0.jpeg')
    j1 = open('https://wearby-parker-seed.s3.amazonaws.com/j1.jpeg')
    j.photo1.attach(io: j1, filename: 'j1.jpeg')
    j2 = open('https://wearby-parker-seed.s3.amazonaws.com/j2.jpeg')
    j.photo2.attach(io: j2, filename: 'j2.jpeg')
    j3 = open('https://wearby-parker-seed.s3.amazonaws.com/j3.jpeg')
    j.photo3.attach(io: j3, filename: 'j3.jpeg')
    j4 = open('https://wearby-parker-seed.s3.amazonaws.com/j4.jpeg')
    j.photo4.attach(io: j4, filename: 'j4.jpeg')
k = ProductsColor.create!(product_id: 4, color_id: 1, color_name: 'Jet Black')
    k0 = open('https://wearby-parker-seed.s3.amazonaws.com/j0.jpeg')
    k.photo0.attach(io: k0, filename: 'k0.jpeg')
    k1 = open('https://wearby-parker-seed.s3.amazonaws.com/j1.jpeg')
    k.photo1.attach(io: k1, filename: 'k1.jpeg')
    k2 = open('https://wearby-parker-seed.s3.amazonaws.com/f2.jpeg')
    k.photo2.attach(io: k2, filename: 'k2.jpeg')
    k3 = open('https://wearby-parker-seed.s3.amazonaws.com/j3.jpeg')
    k.photo3.attach(io: k3, filename: 'k3.jpeg')
    k4 = open('https://wearby-parker-seed.s3.amazonaws.com/j4.jpeg')
    k.photo4.attach(io: k4, filename: 'k4.jpeg')

l = ProductsColor.create!(product_id: 5, color_id: 2, color_name: 'Truffle Tortoise with Polished Gold')
    l0 = open('https://wearby-parker-seed.s3.amazonaws.com/l0.jpeg')
    l.photo0.attach(io: l0, filename: 'l0.jpeg')
    l1 = open('https://wearby-parker-seed.s3.amazonaws.com/l1.jpeg')
    l.photo1.attach(io: l1, filename: 'l1.jpeg')
    l2 = open('https://wearby-parker-seed.s3.amazonaws.com/l2.jpeg')
    l.photo2.attach(io: l2, filename: 'l2.jpeg')
    l3 = open('https://wearby-parker-seed.s3.amazonaws.com/l3.jpeg')
    l.photo3.attach(io: l3, filename: 'l3.jpeg')
    l4 = open('https://wearby-parker-seed.s3.amazonaws.com/l4.jpeg')
    l.photo4.attach(io: l4, filename: 'l4.jpeg')
m = ProductsColor.create!(product_id: 5, color_id: 9, color_name: 'Blue Agave with Polished Gold')
    m0 = open('https://wearby-parker-seed.s3.amazonaws.com/m0.jpeg')
    m.photo0.attach(io: m0, filename: 'm0.jpeg')
    m1 = open('https://wearby-parker-seed.s3.amazonaws.com/m1.jpeg')
    m.photo1.attach(io: m1, filename: 'm1.jpeg')
    m2 = open('https://wearby-parker-seed.s3.amazonaws.com/m2.jpeg')
    m.photo2.attach(io: m2, filename: 'm2.jpeg')
    m3 = open('https://wearby-parker-seed.s3.amazonaws.com/m3.jpeg')
    m.photo3.attach(io: m3, filename: 'm3.jpeg')
    m4 = open('https://wearby-parker-seed.s3.amazonaws.com/m4.jpeg')
    m.photo4.attach(io: m4, filename: 'm4.jpeg')
n = ProductsColor.create!(product_id: 7, color_id: 2, color_name: 'Sesame Tortoise')
    n0 = open('https://wearby-parker-seed.s3.amazonaws.com/n0.jpeg')
    n.photo0.attach(io: n0, filename: 'n0.jpeg')
    n1 = open('https://wearby-parker-seed.s3.amazonaws.com/n1.jpeg')
    n.photo1.attach(io: n1, filename: 'n1.jpeg')
    n2 = open('https://wearby-parker-seed.s3.amazonaws.com/n2.jpeg')
    n.photo2.attach(io: n2, filename: 'n2.jpeg')
    n3 = open('https://wearby-parker-seed.s3.amazonaws.com/n3.jpeg')
    n.photo3.attach(io: n3, filename: 'n3.jpeg')
    n4 = open('https://wearby-parker-seed.s3.amazonaws.com/n4.jpeg')
    n.photo4.attach(io: n4, filename: 'n4.jpeg')
o = ProductsColor.create!(product_id: 8, color_id: 2, color_name: 'Sesame Tortoise')
    o0 = open('https://wearby-parker-seed.s3.amazonaws.com/n0.jpeg')
    o.photo0.attach(io: o0, filename: 'o0.jpeg')
    o1 = open('https://wearby-parker-seed.s3.amazonaws.com/n1.jpeg')
    o.photo1.attach(io: o1, filename: 'o1.jpeg')
    o2 = open('https://wearby-parker-seed.s3.amazonaws.com/o2.jpeg')
    o.photo2.attach(io: o2, filename: 'o2.jpeg')
    o3 = open('https://wearby-parker-seed.s3.amazonaws.com/n3.jpeg')
    o.photo3.attach(io: o3, filename: 'o3.jpeg')
    o4 = open('https://wearby-parker-seed.s3.amazonaws.com/n4.jpeg')
    o.photo4.attach(io: o4, filename: 'o4.jpeg')
p = ProductsColor.create!(product_id: 7, color_id: 9, color_name: 'Blue Thistle')
    p0 = open('https://wearby-parker-seed.s3.amazonaws.com/p0.jpeg')
    p.photo0.attach(io: p0, filename: 'p0.jpeg')
    p1 = open('https://wearby-parker-seed.s3.amazonaws.com/p1.jpeg')
    p.photo1.attach(io: p1, filename: 'p1.jpeg')
    p2 = open('https://wearby-parker-seed.s3.amazonaws.com/p2.jpeg')
    p.photo2.attach(io: p2, filename: 'p2.jpeg')
    p3 = open('https://wearby-parker-seed.s3.amazonaws.com/p5.jpeg')
    p.photo3.attach(io: p3, filename: 'p3.jpeg')
    p4 = open('https://wearby-parker-seed.s3.amazonaws.com/p4.jpeg')
    p.photo4.attach(io: p4, filename: 'p4.jpeg')
q = ProductsColor.create!(product_id: 8, color_id: 9, color_name: 'Blue Thistle')
    q0 = open('https://wearby-parker-seed.s3.amazonaws.com/p0.jpeg')
    q.photo0.attach(io: q0, filename: 'q0.jpeg')
    q1 = open('https://wearby-parker-seed.s3.amazonaws.com/p1.jpeg')
    q.photo1.attach(io: q1, filename: 'q1.jpeg')
    q2 = open('https://wearby-parker-seed.s3.amazonaws.com/s2.jpeg')
    q.photo2.attach(io: q2, filename: 's2.jpeg')
    q3 = open('https://wearby-parker-seed.s3.amazonaws.com/p5.jpeg')
    q.photo3.attach(io: q3, filename: 'q3.jpeg')
    q4 = open('https://wearby-parker-seed.s3.amazonaws.com/p4.jpeg')
    q.photo4.attach(io: q4, filename: 'q4.jpeg')
r = ProductsColor.create!(product_id: 7, color_id: 12, color_name: 'Oxblood')
    r0 = open('https://wearby-parker-seed.s3.amazonaws.com/r0.jpeg')
    r.photo0.attach(io: r0, filename: 'r0.jpeg')
    r1 = open('https://wearby-parker-seed.s3.amazonaws.com/r1.jpeg')
    r.photo1.attach(io: r1, filename: 'r1.jpeg')
    r2 = open('https://wearby-parker-seed.s3.amazonaws.com/r2.jpeg')
    r.photo2.attach(io: r2, filename: 'r2.jpeg')
    r3 = open('https://wearby-parker-seed.s3.amazonaws.com/r3.jpeg')
    r.photo3.attach(io: r3, filename: 'r3.jpeg')
    r4 = open('https://wearby-parker-seed.s3.amazonaws.com/r4.jpeg')
    r.photo4.attach(io: r4, filename: 'r4.jpeg')
s = ProductsColor.create!(product_id: 8, color_id: 12, color_name: 'Oxblood')
    s0 = open('https://wearby-parker-seed.s3.amazonaws.com/r0.jpeg')
    s.photo0.attach(io: s0, filename: 's0.jpeg')
    s1 = open('https://wearby-parker-seed.s3.amazonaws.com/r1.jpeg')
    s.photo1.attach(io: s1, filename: 's1.jpeg')
    s2 = open('https://wearby-parker-seed.s3.amazonaws.com/s2.jpeg')
    s.photo2.attach(io: s2, filename: 's2.jpeg')
    s3 = open('https://wearby-parker-seed.s3.amazonaws.com/r3.jpeg')
    s.photo3.attach(io: s3, filename: 's3.jpeg')
    s4 = open('https://wearby-parker-seed.s3.amazonaws.com/r4.jpeg')
    s.photo4.attach(io: s4, filename: 's4.jpeg')

t = ProductsColor.create!(product_id: 9, color_id: 2, color_name: 'Teal Tortoise')
    t0 = open('https://wearby-parker-seed.s3.amazonaws.com/t0.jpeg')
    t.photo0.attach(io: t0, filename: 't0.jpeg')
    t1 = open('https://wearby-parker-seed.s3.amazonaws.com/t1.jpeg')
    t.photo1.attach(io: t1, filename: 't1.jpeg')
    t2 = open('https://wearby-parker-seed.s3.amazonaws.com/t2.jpeg')
    t.photo2.attach(io: t2, filename: 't2.jpeg')
    t3 = open('https://wearby-parker-seed.s3.amazonaws.com/t5.jpeg')
    t.photo3.attach(io: t3, filename: 't4.jpeg')
    t4 = open('https://wearby-parker-seed.s3.amazonaws.com/t4.jpeg')
    t.photo4.attach(io: t4, filename: 't5.jpeg')
u = ProductsColor.create!(product_id: 10, color_id: 2, color_name: 'Teal Tortoise')
    u0 = open('https://wearby-parker-seed.s3.amazonaws.com/t0.jpeg')
    u.photo0.attach(io: u0, filename: 'u0.jpeg')
    u1 = open('https://wearby-parker-seed.s3.amazonaws.com/t1.jpeg')
    u.photo1.attach(io: u1, filename: 'u1.jpeg')
    u2 = open('https://wearby-parker-seed.s3.amazonaws.com/u2.jpeg')
    u.photo2.attach(io: u2, filename: 'u2.jpeg')
    u3 = open('https://wearby-parker-seed.s3.amazonaws.com/t5.jpeg')
    u.photo3.attach(io: u3, filename: 'u3.jpeg')
    u4 = open('https://wearby-parker-seed.s3.amazonaws.com/t4.jpeg')
    u.photo4.attach(io: u4, filename: 'u4.jpeg')
v = ProductsColor.create!(product_id: 9, color_id: 1, color_name: 'Jet Black')
    v0 = open('https://wearby-parker-seed.s3.amazonaws.com/v0.jpeg')
    v.photo0.attach(io: v0, filename: 'v0.jpeg')
    v1 = open('https://wearby-parker-seed.s3.amazonaws.com/v1.jpeg')
    v.photo1.attach(io: v1, filename: 'v1.jpeg')
    v2 = open('https://wearby-parker-seed.s3.amazonaws.com/v2.jpeg')
    v.photo2.attach(io: v2, filename: 'v2.jpeg')
    v3 = open('https://wearby-parker-seed.s3.amazonaws.com/v3.jpeg')
    v.photo3.attach(io: v3, filename: 'v3.jpeg')
    v4 = open('https://wearby-parker-seed.s3.amazonaws.com/v4.jpeg')
    v.photo4.attach(io: v4, filename: 'v4.jpeg')
w = ProductsColor.create!(product_id: 10, color_id: 1, color_name: 'Jet Black')
    w0 = open('https://wearby-parker-seed.s3.amazonaws.com/v0.jpeg')
    w.photo0.attach(io: w0, filename: 'w0.jpeg')
    w1 = open('https://wearby-parker-seed.s3.amazonaws.com/v1.jpeg')
    w.photo1.attach(io: w1, filename: 'w1.jpeg')
    w2 = open('https://wearby-parker-seed.s3.amazonaws.com/w2.jpeg')
    w.photo2.attach(io: w2, filename: 'w2.jpeg')
    w3 = open('https://wearby-parker-seed.s3.amazonaws.com/v3.jpeg')
    w.photo3.attach(io: w3, filename: 'w3.jpeg')
    w4 = open('https://wearby-parker-seed.s3.amazonaws.com/v4.jpeg')
    w.photo4.attach(io: w4, filename: 'w4.jpeg')
x = ProductsColor.create!(product_id: 9, color_id: 4, color_name: 'Nutmeg Crystal')
    x0 = open('https://wearby-parker-seed.s3.amazonaws.com/x0.jpeg')
    x.photo0.attach(io: x0, filename: 'x0.jpeg')
    x1 = open('https://wearby-parker-seed.s3.amazonaws.com/x1.jpeg')
    x.photo1.attach(io: x1, filename: 'x1.jpeg')
    x2 = open('https://wearby-parker-seed.s3.amazonaws.com/x2.jpeg')
    x.photo2.attach(io: x2, filename: 'x2.jpeg')
    x3 = open('https://wearby-parker-seed.s3.amazonaws.com/x3.jpeg')
    x.photo3.attach(io: x3, filename: 'x3.jpeg')
    x4 = open('https://wearby-parker-seed.s3.amazonaws.com/x4.jpeg')
    x.photo4.attach(io: x4, filename: 'x4.jpeg')
y = ProductsColor.create!(product_id: 10, color_id: 4, color_name: 'Nutmeg Crystal')
    y0 = open('https://wearby-parker-seed.s3.amazonaws.com/x0.jpeg')
    y.photo0.attach(io: y0, filename: 'y0.jpeg')
    y1 = open('https://wearby-parker-seed.s3.amazonaws.com/x1.jpeg')
    y.photo1.attach(io: y1, filename: 'y1.jpeg')
    y2 = open('https://wearby-parker-seed.s3.amazonaws.com/y2.jpeg')
    y.photo2.attach(io: y2, filename: 'y2.jpeg')
    y3 = open('https://wearby-parker-seed.s3.amazonaws.com/x3.jpeg')
    y.photo3.attach(io: y3, filename: 'y3.jpeg')
    y4 = open('https://wearby-parker-seed.s3.amazonaws.com/x4.jpeg')
    y.photo4.attach(io: y4, filename: 'y4.jpeg')

z = ProductsColor.create!(product_id: 11, color_id: 1, color_name: 'Jet Black with Polished Gold')
    z0 = open('https://wearby-parker-seed.s3.amazonaws.com/z0.jpeg')
    z.photo0.attach(io: z0, filename: 'z0.jpeg')
    z1 = open('https://wearby-parker-seed.s3.amazonaws.com/z1.jpeg')
    z.photo1.attach(io: z1, filename: 'z1.jpeg')
    z2 = open('https://wearby-parker-seed.s3.amazonaws.com/z2.jpeg')
    z.photo2.attach(io: z2, filename: 'z2.jpeg')
    z3 = open('https://wearby-parker-seed.s3.amazonaws.com/z3.jpeg')
    z.photo3.attach(io: z3, filename: 'z3.jpeg')
    z4 = open('https://wearby-parker-seed.s3.amazonaws.com/z4.jpeg')
    z.photo4.attach(io: z4, filename: 'z4.jpeg')
aa = ProductsColor.create!(product_id: 12, color_id: 1, color_name: 'Jet Black with Polished Gold')
    aa0 = open('https://wearby-parker-seed.s3.amazonaws.com/z0.jpeg')
    aa.photo0.attach(io: aa0, filename: 'aa0.jpeg')
    aa1 = open('https://wearby-parker-seed.s3.amazonaws.com/z1.jpeg')
    aa.photo1.attach(io: aa1, filename: 'aa1.jpeg')
    aa2 = open('https://wearby-parker-seed.s3.amazonaws.com/aa2.jpeg')
    aa.photo2.attach(io: aa2, filename: 'aa2.jpeg')
    aa3 = open('https://wearby-parker-seed.s3.amazonaws.com/z3.jpeg')
    aa.photo3.attach(io: aa3, filename: 'aa3.jpeg')
    aa4 = open('https://wearby-parker-seed.s3.amazonaws.com/z4.jpeg')
    aa.photo4.attach(io: aa4, filename: 'aa4.jpeg')
bb = ProductsColor.create!(product_id: 11, color_id: 4, color_name: 'Nutmeg Crystal with Riesling')
    bb0 = open('https://wearby-parker-seed.s3.amazonaws.com/bb0.jpeg')
    bb.photo0.attach(io: bb0, filename: 'bb0.jpeg')
    bb1 = open('https://wearby-parker-seed.s3.amazonaws.com/bb1.jpeg')
    bb.photo1.attach(io: bb1, filename: 'bb1.jpeg')
    bb2 = open('https://wearby-parker-seed.s3.amazonaws.com/bb2.jpeg') 
    bb.photo2.attach(io: bb2, filename: 'bb2.jpeg')
    bb3 = open('https://wearby-parker-seed.s3.amazonaws.com/bb3.jpeg')
    bb.photo3.attach(io: bb3, filename: 'bb3.jpeg')
    bb4 = open('https://wearby-parker-seed.s3.amazonaws.com/bb4.jpeg')
    bb.photo4.attach(io: bb4, filename: 'bb4.jpeg')
cc = ProductsColor.create!(product_id: 12, color_id: 4, color_name: 'Nutmeg Crystal with Riesling')
    cc0 = open('https://wearby-parker-seed.s3.amazonaws.com/bb0.jpeg')
    cc.photo0.attach(io: cc0, filename: 'cc0.jpeg')
    cc1 = open('https://wearby-parker-seed.s3.amazonaws.com/bb1.jpeg')
    cc.photo1.attach(io: cc1, filename: 'cc1.jpeg')
    cc2 = open('https://wearby-parker-seed.s3.amazonaws.com/cc2.jpeg')
    cc.photo2.attach(io: cc2, filename: 'cc2.jpeg')
    cc3 = open('https://wearby-parker-seed.s3.amazonaws.com/bb3.jpeg')
    cc.photo3.attach(io: cc3, filename: 'cc3.jpeg')
    cc4 = open('https://wearby-parker-seed.s3.amazonaws.com/bb4.jpeg')
    cc.photo4.attach(io: cc4, filename: 'cc4.jpeg')

########## STEP 2

dd = ProductsColor.create!(product_id: 13, color_id: 1, color_name: 'Black Oak Tortoise')
    dd0 = open('https://wearby-parker-seed.s3.amazonaws.com/dd0.jpeg')
    dd.photo0.attach(io: dd0, filename: 'dd0.jpeg')
    dd1 = open('https://wearby-parker-seed.s3.amazonaws.com/dd1.jpeg')
    dd.photo1.attach(io: dd1, filename: 'dd1.jpeg')
    dd2 = open('https://wearby-parker-seed.s3.amazonaws.com/dd2.jpeg')
    dd.photo2.attach(io: dd2, filename: 'dd2.jpeg')
    dd3 = open('https://wearby-parker-seed.s3.amazonaws.com/dd3.jpeg')
    dd.photo3.attach(io: dd3, filename: 'dd3.jpeg')
    dd4 = open('https://wearby-parker-seed.s3.amazonaws.com/dd4.jpeg')
    dd.photo4.attach(io: dd4, filename: 'dd4.jpeg')
ee = ProductsColor.create!(product_id: 14, color_id: 1, color_name: 'Black Oak Tortoise')
    dd0 = open('https://wearby-parker-seed.s3.amazonaws.com/dd0.jpeg')
    dd.photo0.attach(io: dd0, filename: 'ee0.jpeg')
    dd1 = open('https://wearby-parker-seed.s3.amazonaws.com/dd1.jpeg')
    dd.photo1.attach(io: dd1, filename: 'ee1.jpeg')
    dd2 = open('https://wearby-parker-seed.s3.amazonaws.com/ee2.jpeg')
    dd.photo2.attach(io: dd2, filename: 'ee2.jpeg')
    dd3 = open('https://wearby-parker-seed.s3.amazonaws.com/dd3.jpeg')
    dd.photo3.attach(io: dd3, filename: 'ee3.jpeg')
    dd4 = open('https://wearby-parker-seed.s3.amazonaws.com/dd4.jpeg')
    dd.photo4.attach(io: dd4, filename: 'ee4.jpeg')
ff = ProductsColor.create!(product_id: 13, color_id: 4, color_name: 'Pacific Crystal')
    ff0 = open('https://wearby-parker-seed.s3.amazonaws.com/ff0.jpeg')
    ff.photo0.attach(io: ff0, filename: 'ff0.jpeg')
    ff1 = open('https://wearby-parker-seed.s3.amazonaws.com/ff1.jpeg')
    ff.photo1.attach(io: ff1, filename: 'ff1.jpeg')
    ff2 = open('https://wearby-parker-seed.s3.amazonaws.com/ff2.jpeg')
    ff.photo2.attach(io: ff2, filename: 'ff2.jpeg')
    ff3 = open('https://wearby-parker-seed.s3.amazonaws.com/ff3.jpeg')
    ff.photo3.attach(io: ff3, filename: 'ff3.jpeg')
    ff4 = open('https://wearby-parker-seed.s3.amazonaws.com/ff4.jpeg')
    ff.photo4.attach(io: ff4, filename: 'ff4.jpeg')
gg = ProductsColor.create!(product_id: 14, color_id: 4, color_name: 'Pacific Crystal')
    ff0 = open('https://wearby-parker-seed.s3.amazonaws.com/ff0.jpeg')
    ff.photo0.attach(io: ff0, filename: 'gg0.jpeg')
    ff1 = open('https://wearby-parker-seed.s3.amazonaws.com/ff1.jpeg')
    ff.photo1.attach(io: ff1, filename: 'gg1.jpeg')
    ff2 = open('https://wearby-parker-seed.s3.amazonaws.com/gg2.jpeg')
    ff.photo2.attach(io: ff2, filename: 'gg2.jpeg')
    ff3 = open('https://wearby-parker-seed.s3.amazonaws.com/ff3.jpeg')
    ff.photo3.attach(io: ff3, filename: 'gg3.jpeg')
    ff4 = open('https://wearby-parker-seed.s3.amazonaws.com/ff4.jpeg')
    ff.photo4.attach(io: ff4, filename: 'gg4.jpeg')

hh = ProductsColor.create!(product_id: 15, color_id: 12, color_name: 'Russet Red with Riesling')
    hh0 = open('https://wearby-parker-seed.s3.amazonaws.com/hh0.jpeg')
    hh.photo0.attach(io: hh0, filename: 'hh0.jpeg')
    hh1 = open('https://wearby-parker-seed.s3.amazonaws.com/hh1.jpeg')
    hh.photo1.attach(io: hh1, filename: 'hh1.jpeg')
    hh2 = open('https://wearby-parker-seed.s3.amazonaws.com/hh2.jpeg')
    hh.photo2.attach(io: hh2, filename: 'hh2.jpeg')
    hh3 = open('https://wearby-parker-seed.s3.amazonaws.com/hh3.jpeg')
    hh.photo3.attach(io: hh3, filename: 'hh3.jpeg')
    hh4 = open('https://wearby-parker-seed.s3.amazonaws.com/hh4.jpeg')
    hh.photo4.attach(io: hh4, filename: 'hh4.jpeg')
ii = ProductsColor.create!(product_id: 16, color_id: 12, color_name: 'Russet Red with Riesling')
    hh0 = open('https://wearby-parker-seed.s3.amazonaws.com/hh0.jpeg')
    hh.photo0.attach(io: hh0, filename: 'ii0.jpeg')
    hh1 = open('https://wearby-parker-seed.s3.amazonaws.com/hh1.jpeg')
    hh.photo1.attach(io: hh1, filename: 'ii1.jpeg')
    hh2 = open('https://wearby-parker-seed.s3.amazonaws.com/ii2.jpeg')
    hh.photo2.attach(io: hh2, filename: 'ii2.jpeg')
    hh3 = open('https://wearby-parker-seed.s3.amazonaws.com/hh3.jpeg')
    hh.photo3.attach(io: hh3, filename: 'ii3.jpeg')
    hh4 = open('https://wearby-parker-seed.s3.amazonaws.com/hh4.jpeg')
    hh.photo4.attach(io: hh4, filename: 'ii4.jpeg')
jj = ProductsColor.create!(product_id: 15, color_id: 2, color_name: 'Cognac Tortoise with Polished Gold')
    jj0 = open('https://wearby-parker-seed.s3.amazonaws.com/jj0.jpeg')
    jj.photo0.attach(io: jj0, filename: 'jj0.jpeg')
    jj1 = open('https://wearby-parker-seed.s3.amazonaws.com/jj1.jpeg')
    jj.photo1.attach(io: jj1, filename: 'jj1.jpeg')
    jj2 = open('https://wearby-parker-seed.s3.amazonaws.com/jj2.jpeg')
    jj.photo2.attach(io: jj2, filename: 'jj2.jpeg')
    jj3 = open('https://wearby-parker-seed.s3.amazonaws.com/jj3.jpeg')
    jj.photo3.attach(io: jj3, filename: 'jj3.jpeg')
    jj4 = open('https://wearby-parker-seed.s3.amazonaws.com/jj4.jpeg')
    jj.photo4.attach(io: jj4, filename: 'jj4.jpeg')
kk = ProductsColor.create!(product_id: 16, color_id: 2, color_name: 'Cognac Tortoise with Polished Gold')
    jj0 = open('https://wearby-parker-seed.s3.amazonaws.com/jj0.jpeg')
    jj.photo0.attach(io: jj0, filename: 'kk0.jpeg')
    jj1 = open('https://wearby-parker-seed.s3.amazonaws.com/jj1.jpeg')
    jj.photo1.attach(io: jj1, filename: 'kk1.jpeg')
    jj2 = open('https://wearby-parker-seed.s3.amazonaws.com/kk2.jpeg')
    jj.photo2.attach(io: jj2, filename: 'kk2.jpeg')
    jj3 = open('https://wearby-parker-seed.s3.amazonaws.com/jj3.jpeg')
    jj.photo3.attach(io: jj3, filename: 'kk3.jpeg')
    jj4 = open('https://wearby-parker-seed.s3.amazonaws.com/jj4.jpeg')
    jj.photo4.attach(io: jj4, filename: 'kk4.jpeg')


ll = ProductsColor.create!(product_id: 17, color_id: 13, color_name: 'Polished Gold with Savanna Tortoise')
    ll0 = open('https://wearby-parker-seed.s3.amazonaws.com/ll0.jpeg')
    ll.photo0.attach(io: ll0, filename: 'll0.jpeg')
    ll1 = open('https://wearby-parker-seed.s3.amazonaws.com/ll1.jpeg')
    ll.photo1.attach(io: ll1, filename: 'll1.jpeg')
    ll2 = open('https://wearby-parker-seed.s3.amazonaws.com/ll2.jpeg')
    ll.photo2.attach(io: ll2, filename: 'll2.jpeg')
    ll3 = open('https://wearby-parker-seed.s3.amazonaws.com/ll3.jpeg')
    ll.photo3.attach(io: ll3, filename: 'll3.jpeg')
    ll4 = open('https://wearby-parker-seed.s3.amazonaws.com/ll4.jpeg')
    ll.photo4.attach(io: ll4, filename: 'll4.jpeg')
mm = ProductsColor.create!(product_id: 18, color_id: 13, color_name: 'Polished Gold with Savanna Tortoise')
    ll0 = open('https://wearby-parker-seed.s3.amazonaws.com/ll0.jpeg')
    ll.photo0.attach(io: ll0, filename: 'mm0.jpeg')
    ll1 = open('https://wearby-parker-seed.s3.amazonaws.com/ll1.jpeg')
    ll.photo1.attach(io: ll1, filename: 'mm1.jpeg')
    ll2 = open('https://wearby-parker-seed.s3.amazonaws.com/mm2.jpeg')
    ll.photo2.attach(io: ll2, filename: 'mm2.jpeg')
    ll3 = open('https://wearby-parker-seed.s3.amazonaws.com/ll3.jpeg')
    ll.photo3.attach(io: ll3, filename: 'mm3.jpeg')
    ll4 = open('https://wearby-parker-seed.s3.amazonaws.com/ll4.jpeg')
    ll.photo4.attach(io: ll4, filename: 'mm4.jpeg')

nn = ProductsColor.create!(product_id: 19, color_id: 4, color_name: 'Crystal')
    nn0 = open('https://wearby-parker-seed.s3.amazonaws.com/nn0.jpeg')
    nn.photo0.attach(io: nn0, filename: 'nn0.jpeg')
    nn1 = open('https://wearby-parker-seed.s3.amazonaws.com/nn1.jpeg')
    nn.photo1.attach(io: nn1, filename: 'nn1.jpeg')
    nn2 = open('https://wearby-parker-seed.s3.amazonaws.com/nn2.jpeg')
    nn.photo2.attach(io: nn2, filename: 'nn2.jpeg')
    nn3 = open('https://wearby-parker-seed.s3.amazonaws.com/nn3.jpeg')
    nn.photo3.attach(io: nn3, filename: 'nn3.jpeg')
    nn4 = open('https://wearby-parker-seed.s3.amazonaws.com/nn4.jpeg')
    nn.photo4.attach(io: nn4, filename: 'nn4.jpeg')
oo = ProductsColor.create!(product_id: 20, color_id: 4, color_name: 'Crystal')
    nn0 = open('https://wearby-parker-seed.s3.amazonaws.com/nn0.jpeg')
    nn.photo0.attach(io: nn0, filename: 'oo0.jpeg')
    nn1 = open('https://wearby-parker-seed.s3.amazonaws.com/nn1.jpeg')
    nn.photo1.attach(io: nn1, filename: 'oo1.jpeg')
    nn2 = open('https://wearby-parker-seed.s3.amazonaws.com/oo2.jpeg')
    nn.photo2.attach(io: nn2, filename: 'oo2.jpeg')
    nn3 = open('https://wearby-parker-seed.s3.amazonaws.com/nn3.jpeg')
    nn.photo3.attach(io: nn3, filename: 'oo3.jpeg')
    nn4 = open('https://wearby-parker-seed.s3.amazonaws.com/nn4.jpeg')
    nn.photo4.attach(io: nn4, filename: 'oo4.jpeg')
pp = ProductsColor.create!(product_id: 19, color_id: 2, color_name: 'Petal Tortoise')
    pp0 = open('https://wearby-parker-seed.s3.amazonaws.com/pp0.jpeg')
    pp.photo0.attach(io: pp0, filename: 'pp0.jpeg')
    pp1 = open('https://wearby-parker-seed.s3.amazonaws.com/pp1.jpeg')
    pp.photo1.attach(io: pp1, filename: 'pp1.jpeg')
    pp2 = open('https://wearby-parker-seed.s3.amazonaws.com/pp2.jpeg')
    pp.photo2.attach(io: pp2, filename: 'pp2.jpeg')
    pp3 = open('https://wearby-parker-seed.s3.amazonaws.com/pp3.jpeg')
    pp.photo3.attach(io: pp3, filename: 'pp3.jpeg')
    pp4 = open('https://wearby-parker-seed.s3.amazonaws.com/pp4.jpeg')
    pp.photo4.attach(io: pp4, filename: 'pp4.jpeg')
qq = ProductsColor.create!(product_id: 20, color_id: 2, color_name: 'Petal Tortoise')
    pp0 = open('https://wearby-parker-seed.s3.amazonaws.com/pp0.jpeg')
    pp.photo0.attach(io: pp0, filename: 'qq0.jpeg')
    pp1 = open('https://wearby-parker-seed.s3.amazonaws.com/pp1.jpeg')
    pp.photo1.attach(io: pp1, filename: 'qq1.jpeg')
    pp2 = open('https://wearby-parker-seed.s3.amazonaws.com/qq2.jpeg')
    pp.photo2.attach(io: pp2, filename: 'qq2.jpeg')
    pp3 = open('https://wearby-parker-seed.s3.amazonaws.com/pp3.jpeg')
    pp.photo3.attach(io: pp3, filename: 'qq3.jpeg')
    pp4 = open('https://wearby-parker-seed.s3.amazonaws.com/pp4.jpeg')
    pp.photo4.attach(io: pp4, filename: 'qq4.jpeg')
rr = ProductsColor.create!(product_id: 19, color_id: 9, color_name: 'Tidal Blue')
    rr0 = open('https://wearby-parker-seed.s3.amazonaws.com/rr0.jpeg')
    rr.photo0.attach(io: rr0, filename: 'rr0.jpeg')
    rr1 = open('https://wearby-parker-seed.s3.amazonaws.com/rr1.jpeg')
    rr.photo1.attach(io: rr1, filename: 'rr1.jpeg')
    rr2 = open('https://wearby-parker-seed.s3.amazonaws.com/rr2.jpeg')
    rr.photo2.attach(io: rr2, filename: 'rr2.jpeg')
    rr3 = open('https://wearby-parker-seed.s3.amazonaws.com/rr3.jpeg')
    rr.photo3.attach(io: rr3, filename: 'rr3.jpeg')
    rr4 = open('https://wearby-parker-seed.s3.amazonaws.com/rr4.jpeg')
    rr.photo4.attach(io: rr4, filename: 'rr4.jpeg')
ss = ProductsColor.create!(product_id: 20, color_id: 9, color_name: 'Tidal Blue')
    rr0 = open('https://wearby-parker-seed.s3.amazonaws.com/rr0.jpeg')
    rr.photo0.attach(io: rr0, filename: 'ss0.jpeg')
    rr1 = open('https://wearby-parker-seed.s3.amazonaws.com/rr1.jpeg')
    rr.photo1.attach(io: rr1, filename: 'ss1.jpeg')
    rr2 = open('https://wearby-parker-seed.s3.amazonaws.com/ss2.jpeg')
    rr.photo2.attach(io: rr2, filename: 'ss2.jpeg')
    rr3 = open('https://wearby-parker-seed.s3.amazonaws.com/rr3.jpeg')
    rr.photo3.attach(io: rr3, filename: 'ss3.jpeg')
    rr4 = open('https://wearby-parker-seed.s3.amazonaws.com/rr4.jpeg')
    rr.photo4.attach(io: rr4, filename: 'ss4.jpeg')
tt = ProductsColor.create!(product_id: 19, color_id: 13, color_name: 'Striped Sassafras')
    tt0 = open('https://wearby-parker-seed.s3.amazonaws.com/tt3.jpeg')
    tt.photo0.attach(io: tt0, filename: 'tt0.jpeg')
    tt1 = open('https://wearby-parker-seed.s3.amazonaws.com/tt1.jpeg')
    tt.photo1.attach(io: tt1, filename: 'tt1.jpeg')
    tt2 = open('https://wearby-parker-seed.s3.amazonaws.com/tt2.jpeg')
    tt.photo2.attach(io: tt2, filename: 'tt2.jpeg')
    tt3 = open('https://wearby-parker-seed.s3.amazonaws.com/tt3.jpeg')
    tt.photo3.attach(io: tt3, filename: 'tt3.jpeg')
    tt4 = open('https://wearby-parker-seed.s3.amazonaws.com/tt4.jpeg')
    tt.photo4.attach(io: tt4, filename: 'tt4.jpeg')
uu = ProductsColor.create!(product_id: 20, color_id: 13, color_name: 'Striped Sassafras')
    tt0 = open('https://wearby-parker-seed.s3.amazonaws.com/tt3.jpeg')
    tt.photo0.attach(io: tt0, filename: 'uu0.jpeg')
    tt1 = open('https://wearby-parker-seed.s3.amazonaws.com/tt1.jpeg')
    tt.photo1.attach(io: tt1, filename: 'uu1.jpeg')
    tt2 = open('https://wearby-parker-seed.s3.amazonaws.com/uu2.jpeg')
    tt.photo2.attach(io: tt2, filename: 'uu2.jpeg')
    tt3 = open('https://wearby-parker-seed.s3.amazonaws.com/tt3.jpeg')
    tt.photo3.attach(io: tt3, filename: 'uu3.jpeg')
    tt4 = open('https://wearby-parker-seed.s3.amazonaws.com/tt4.jpeg')
    tt.photo4.attach(io: tt4, filename: 'uu4.jpeg')
vv = ProductsColor.create!(product_id: 19, color_id: 4, color_name: 'Crystal with Oak Barrel and Blue Bay')
    vv0 = open('https://wearby-parker-seed.s3.amazonaws.com/vv0.jpeg')
    vv.photo0.attach(io: vv0, filename: 'vv0.jpeg')
    vv1 = open('https://wearby-parker-seed.s3.amazonaws.com/vv1.jpeg')
    vv.photo1.attach(io: vv1, filename: 'vv1.jpeg')
    vv2 = open('https://wearby-parker-seed.s3.amazonaws.com/vv2.jpeg')
    vv.photo2.attach(io: vv2, filename: 'vv2.jpeg')
    vv3 = open('https://wearby-parker-seed.s3.amazonaws.com/vv3.jpeg')
    vv.photo3.attach(io: vv3, filename: 'vv3.jpeg')
    vv4 = open('https://wearby-parker-seed.s3.amazonaws.com/vv4.jpeg')
    vv.photo4.attach(io: vv4, filename: 'vv4.jpeg')
ww = ProductsColor.create!(product_id: 20, color_id: 4, color_name: 'Crystal with Oak Barrel and Blue Bay')
    vv0 = open('https://wearby-parker-seed.s3.amazonaws.com/vv0.jpeg')
    vv.photo0.attach(io: vv0, filename: 'ww0.jpeg')
    vv1 = open('https://wearby-parker-seed.s3.amazonaws.com/vv1.jpeg')
    vv.photo1.attach(io: vv1, filename: 'ww1.jpeg')
    vv2 = open('https://wearby-parker-seed.s3.amazonaws.com/ww2.jpeg')
    vv.photo2.attach(io: vv2, filename: 'ww2.jpeg')
    vv3 = open('https://wearby-parker-seed.s3.amazonaws.com/vv3.jpeg')
    vv.photo3.attach(io: vv3, filename: 'ww3.jpeg')
    vv4 = open('https://wearby-parker-seed.s3.amazonaws.com/vv4.jpeg')
    vv.photo4.attach(io: vv4, filename: 'ww4.jpeg')

xx = ProductsColor.create!(product_id: 21, color_id: 7, color_name: 'Poblano with Polished Silver')
    xx0 = open('https://wearby-parker-seed.s3.amazonaws.com/xx0.jpeg')
    xx.photo0.attach(io: xx0, filename: 'xx0.jpeg')
    xx1 = open('https://wearby-parker-seed.s3.amazonaws.com/xx1.jpeg')
    xx.photo1.attach(io: xx1, filename: 'xx1.jpeg')
    xx2 = open('https://wearby-parker-seed.s3.amazonaws.com/xx2.jpeg')
    xx.photo2.attach(io: xx2, filename: 'xx2.jpeg')
    xx3 = open('https://wearby-parker-seed.s3.amazonaws.com/xx3.jpeg')
    xx.photo3.attach(io: xx3, filename: 'xx3.jpeg')
    xx4 = open('https://wearby-parker-seed.s3.amazonaws.com/xx4.jpeg')
    xx.photo4.attach(io: xx4, filename: 'xx4.jpeg')
yy = ProductsColor.create!(product_id: 22, color_id: 7, color_name: 'Poblano with Polished Silver')
    xx0 = open('https://wearby-parker-seed.s3.amazonaws.com/xx0.jpeg')
    xx.photo0.attach(io: xx0, filename: 'yy0.jpeg')
    xx1 = open('https://wearby-parker-seed.s3.amazonaws.com/xx1.jpeg')
    xx.photo1.attach(io: xx1, filename: 'yy1.jpeg')
    xx2 = open('https://wearby-parker-seed.s3.amazonaws.com/yy2.jpeg')
    xx.photo2.attach(io: xx2, filename: 'yy2.jpeg')
    xx3 = open('https://wearby-parker-seed.s3.amazonaws.com/xx3.jpeg')
    xx.photo3.attach(io: xx3, filename: 'yy3.jpeg')
    xx4 = open('https://wearby-parker-seed.s3.amazonaws.com/xx4.jpeg')
    xx.photo4.attach(io: xx4, filename: 'yy4.jpeg')
zz = ProductsColor.create!(product_id: 21, color_id: 2, color_name: 'Acorn Tortoise with Riesling') 
    zz0 = open('https://wearby-parker-seed.s3.amazonaws.com/zz0.jpeg')
    zz.photo0.attach(io: zz0, filename: 'zz0.jpeg')
    zz1 = open('https://wearby-parker-seed.s3.amazonaws.com/zz1.jpeg')
    zz.photo1.attach(io: zz1, filename: 'zz1.jpeg')
    zz2 = open('https://wearby-parker-seed.s3.amazonaws.com/zz2.jpeg')
    zz.photo2.attach(io: zz2, filename: 'zz2.jpeg')
    zz3 = open('https://wearby-parker-seed.s3.amazonaws.com/zz3.jpeg')
    zz.photo3.attach(io: zz3, filename: 'zz3.jpeg')
    zz4 = open('https://wearby-parker-seed.s3.amazonaws.com/zz4.jpeg')
    zz.photo4.attach(io: zz4, filename: 'zz4.jpeg')
aaa = ProductsColor.create!(product_id: 22, color_id: 2, color_name: 'Acorn Tortoise with Riesling') 
    zz0 = open('https://wearby-parker-seed.s3.amazonaws.com/zz0.jpeg')
    zz.photo0.attach(io: zz0, filename: 'aaa0.jpeg')
    zz1 = open('https://wearby-parker-seed.s3.amazonaws.com/zz1.jpeg')
    zz.photo1.attach(io: zz1, filename: 'aaa1.jpeg')
    zz2 = open('https://wearby-parker-seed.s3.amazonaws.com/aaa2.jpeg')
    zz.photo2.attach(io: zz2, filename: 'aaa2.jpeg')
    zz3 = open('https://wearby-parker-seed.s3.amazonaws.com/zz3.jpeg')
    zz.photo3.attach(io: zz3, filename: 'aaa3.jpeg')
    zz4 = open('https://wearby-parker-seed.s3.amazonaws.com/zz4.jpeg')
    zz.photo4.attach(io: zz4, filename: 'aaa4.jpeg')

#MATERIALS
ProductsMaterial.create!(product_id: 1, material_id: 2)
ProductsMaterial.create!(product_id: 2, material_id: 2)

ProductsMaterial.create!(product_id: 3, material_id: 2)
ProductsMaterial.create!(product_id: 4, material_id: 2)

ProductsMaterial.create!(product_id: 5, material_id: 3)

ProductsMaterial.create!(product_id: 7, material_id: 2)
ProductsMaterial.create!(product_id: 8, material_id: 2)

ProductsMaterial.create!(product_id: 9, material_id: 2)
ProductsMaterial.create!(product_id: 10, material_id: 2)

ProductsMaterial.create!(product_id: 11, material_id: 3)
ProductsMaterial.create!(product_id: 12, material_id: 3)

ProductsMaterial.create!(product_id: 13, material_id: 2)
ProductsMaterial.create!(product_id: 14, material_id: 2)

ProductsMaterial.create!(product_id: 15, material_id: 3)
ProductsMaterial.create!(product_id: 16, material_id: 3)

ProductsMaterial.create!(product_id: 17, material_id: 1)
ProductsMaterial.create!(product_id: 18, material_id: 1)

ProductsMaterial.create!(product_id: 19, material_id: 2)
ProductsMaterial.create!(product_id: 20, material_id: 2)

ProductsMaterial.create!(product_id: 21, material_id: 3)
ProductsMaterial.create!(product_id: 22, material_id: 3)


#NOSE BRIDGE
ProductsNoseBridge.create!(product_id: 1, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 2, nose_bridge_id: 2)

ProductsNoseBridge.create!(product_id: 3, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 4, nose_bridge_id: 2)

ProductsNoseBridge.create!(product_id: 5, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 5, nose_bridge_id: 1)

ProductsNoseBridge.create!(product_id: 7, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 8, nose_bridge_id: 2)

ProductsNoseBridge.create!(product_id: 9, nose_bridge_id: 2)
ProductsNoseBridge.create!(product_id: 10, nose_bridge_id: 2)

ProductsNoseBridge.create!(product_id: 11, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 12, nose_bridge_id: 1)

ProductsNoseBridge.create!(product_id: 13, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 14, nose_bridge_id: 1)

ProductsNoseBridge.create!(product_id: 15, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 16, nose_bridge_id: 1)

ProductsNoseBridge.create!(product_id: 17, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 18, nose_bridge_id: 1)

ProductsNoseBridge.create!(product_id: 19, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 20, nose_bridge_id: 1)

ProductsNoseBridge.create!(product_id: 21, nose_bridge_id: 1)
ProductsNoseBridge.create!(product_id: 22, nose_bridge_id: 1)
