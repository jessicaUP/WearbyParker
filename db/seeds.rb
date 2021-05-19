require 'open-uri'


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

FrameWidth.create!(id: 1, frame_width: 'Extra narrow') #1
FrameWidth.create!(id: 2, frame_width: 'Narrow') #2
FrameWidth.create!(id: 3, frame_width: 'Medium') #3
FrameWidth.create!(id: 4, frame_width: 'Wide') #4
FrameWidth.create!(id: 5, frame_width: 'Extra wide') #5

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
    a0 = open('')
    a.photo0.attach(io: a1, filename: 'a0.jpeg')
    a1 = open('')
    a.photo1.attach(io: a2, filename: 'a1.jpeg')
    a2 = open('')
    a.photo2.attach(io: a3, filename: 'a2.jpeg')
    a3 = open('')
    a.photo3.attach(io: a4, filename: 'a3.jpeg')
    a4 = open('')
    a.photo4.attach(io: a5, filename: 'a4.jpeg')
b = ProductsColor.create!(product_id: 2, color_id: 1, color_name: 'Jet Black')
    b0 = open('')
    b.photo0.attach(io: b1, filename: 'b0.jpeg')
    b1 = open('')
    b.photo1.attach(io: b2, filename: 'b1.jpeg')
    b2 = open('')
    b.photo2.attach(io: b3, filename: 'b2.jpeg')
    b3 = open('')
    b.photo3.attach(io: b4, filename: 'b3.jpeg')
    b4 = open('')
    b.photo4.attach(io: b5, filename: 'b4.jpeg')
c = ProductsColor.create!(product_id: 1, color_id: 11, color_name: 'Striped Cypress')
    c0 = open('')
    c.photo0.attach(io: c1, filename: 'c0.jpeg')
    c1 = open('')
    c.photo1.attach(io: c2, filename: 'c1.jpeg')
    c2 = open('')
    c.photo2.attach(io: c3, filename: 'c2.jpeg')
    c3 = open('')
    c.photo3.attach(io: c4, filename: 'c3.jpeg')
    c4 = open('')
    c.photo4.attach(io: c5, filename: 'c4.jpeg')
d = ProductsColor.create!(product_id: 2, color_id: 11, color_name: 'Striped Cypress')
    d0 = open('')
    d.photo0.attach(io: d1, filename: 'd0.jpeg')
    d1 = open('')
    d.photo1.attach(io: d2, filename: 'd1.jpeg')
    d2 = open('')
    d.photo2.attach(io: d3, filename: 'd2.jpeg')
    d3 = open('')
    d.photo3.attach(io: d4, filename: 'd3.jpeg')
    d4 = open('')
    d.photo4.attach(io: d5, filename: 'd4.jpeg')

e = ProductsColor.create!(product_id: 3, color_id: 2, color_name: 'Teal Tortoise')
    e0 = open('')
    e.photo0.attach(io: e1, filename: 'e0.jpeg')
    e1 = open('')
    e.photo1.attach(io: e2, filename: 'e1.jpeg')
    e2 = open('')
    e.photo2.attach(io: e3, filename: 'e2.jpeg')
    e3 = open('')
    e.photo3.attach(io: e4, filename: 'e3.jpeg')
    e4 = open('')
    e.photo4.attach(io: e5, filename: 'e4.jpeg')
f = ProductsColor.create!(product_id: 4, color_id: 2, color_name: 'Teal Tortoise')
    f0 = open('')
    f.photo0.attach(io: f1, filename: 'f0.jpeg')
    f1 = open('')
    f.photo1.attach(io: f2, filename: 'f1.jpeg')
    f2 = open('')
    f.photo2.attach(io: f3, filename: 'f2.jpeg')
    f3 = open('')
    f.photo3.attach(io: f4, filename: 'f3.jpeg')
    f4 = open('')
    f.photo4.attach(io: f5, filename: 'f4.jpeg')
g = ProductsColor.create!(product_id: 3, color_id: 2, color_name: 'Butterscotch Tortoise')
    g0 = open('')
    g.photo0.attach(io: g1, filename: 'g0.jpeg')
    g1 = open('')
    g.photo1.attach(io: g2, filename: 'g1.jpeg')
    g2 = open('')
    g.photo2.attach(io: g3, filename: 'g2.jpeg')
    g3 = open('')
    g.photo3.attach(io: g4, filename: 'g3.jpeg')
    g4 = open('')
    g.photo4.attach(io: g5, filename: 'g4.jpeg')
gg = ProductsColor.create!(product_id: 4, color_id: 2, color_name: 'Butterscotch Tortoise')
    gg0 = open('')
    gg.photo0.attach(io: gg1, filename: 'gg0.jpeg')
    gg1 = open('')
    gg.photo1.attach(io: gg2, filename: 'gg1.jpeg')
    gg2 = open('')
    gg.photo2.attach(io: gg3, filename: 'gg2.jpeg')
    gg3 = open('')
    gg.photo3.attach(io: gg4, filename: 'gg3.jpeg')
    gg4 = open('')
    gg.photo4.attach(io: gg5, filename: 'gg4.jpeg')
h = ProductsColor.create!(product_id: 3, color_id: 9, color_name: 'Shoreline Fade')
    h0 = open('')
    h.photo0.attach(io: h1, filename: 'h0.jpeg')
    h1 = open('')
    h.photo1.attach(io: h2, filename: 'h1.jpeg')
    h2 = open('')
    h.photo2.attach(io: h3, filename: 'h2.jpeg')
    h3 = open('')
    h.photo3.attach(io: h4, filename: 'h3.jpeg')
    h4 = open('')
    h.photo4.attach(io: h5, filename: 'h4.jpeg')
i = ProductsColor.create!(product_id: 4, color_id: 9, color_name: 'Shoreline Fade')
    i0 = open('')
    i.photo0.attach(io: i1, filename: 'i0.jpeg')
    i1 = open('')
    i.photo1.attach(io: i2, filename: 'i1.jpeg')
    i2 = open('')
    i.photo2.attach(io: i3, filename: 'i2.jpeg')
    i3 = open('')
    i.photo3.attach(io: i4, filename: 'i3.jpeg')
    i4 = open('')
    i.photo4.attach(io: i5, filename: 'i4.jpeg')
j = ProductsColor.create!(product_id: 3, color_id: 1, color_name: 'Jet Black')
    j0 = open('')
    j.photo0.attach(io: j1, filename: 'j0.jpeg')
    j1 = open('')
    j.photo1.attach(io: j2, filename: 'j1.jpeg')
    j2 = open('')
    j.photo2.attach(io: j3, filename: 'j2.jpeg')
    j3 = open('')
    j.photo3.attach(io: j4, filename: 'j3.jpeg')
    j4 = open('')
    j.photo4.attach(io: j5, filename: 'j4.jpeg')
k = ProductsColor.create!(product_id: 4, color_id: 1, color_name: 'Jet Black')
    k0 = open('')
    k.photo0.attach(io: k1, filename: 'k0.jpeg')
    k1 = open('')
    k.photo1.attach(io: k2, filename: 'k1.jpeg')
    k2 = open('')
    k.photo2.attach(io: k3, filename: 'k2.jpeg')
    k3 = open('')
    k.photo3.attach(io: k4, filename: 'k3.jpeg')
    k4 = open('')
    k.photo4.attach(io: k5, filename: 'k4.jpeg')

l = ProductsColor.create!(product_id: 5, color_id: 2, color_name: 'Truffle Tortoise with Polished Gold')
m = ProductsColor.create!(product_id: 5, color_id: 9, color_name: 'Blue Agave with Polished Gold')

n = ProductsColor.create!(product_id: 7, color_id: 2, color_name: 'Sesame Tortoise')
o = ProductsColor.create!(product_id: 8, color_id: 2, color_name: 'Sesame Tortoise')
p = ProductsColor.create!(product_id: 7, color_id: 9, color_name: 'Blue Thistle')
q = ProductsColor.create!(product_id: 8, color_id: 9, color_name: 'Blue Thistle')
r = ProductsColor.create!(product_id: 7, color_id: 12, color_name: 'Oxblood')
s = ProductsColor.create!(product_id: 8, color_id: 12, color_name: 'Oxblood')

t = ProductsColor.create!(product_id: 9, color_id: 2, color_name: 'Teal Tortoise')
u = ProductsColor.create!(product_id: 10, color_id: 2, color_name: 'Teal Tortoise')
v = ProductsColor.create!(product_id: 9, color_id: 1, color_name: 'Jet Black')
w = ProductsColor.create!(product_id: 10, color_id: 1, color_name: 'Jet Black')
x = ProductsColor.create!(product_id: 9, color_id: 4, color_name: 'Nutmeg Crystal')
y = ProductsColor.create!(product_id: 10, color_id: 4, color_name: 'Nutmeg Crystal')

z = ProductsColor.create!(product_id: 11, color_id: 1, color_name: 'Jet Black with Polished Gold')
aa = ProductsColor.create!(product_id: 12, color_id: 1, color_name: 'Jet Black with Polished Gold')
bb = ProductsColor.create!(product_id: 11, color_id: 4, color_name: 'Nutmeg Crystal with Riesling')
cc = ProductsColor.create!(product_id: 12, color_id: 4, color_name: 'Nutmeg Crystal with Riesling')

dd = ProductsColor.create!(product_id: 13, color_id: 1, color_name: 'Black Oak Tortoise')
ee = ProductsColor.create!(product_id: 14, color_id: 1, color_name: 'Black Oak Tortoise')
ff = ProductsColor.create!(product_id: 13, color_id: 4, color_name: 'Pacific Crystal')
gg = ProductsColor.create!(product_id: 14, color_id: 4, color_name: 'Pacific Crystal')

hh = ProductsColor.create!(product_id: 15, color_id: 12, color_name: 'Russet Red with Riesling')
ii = ProductsColor.create!(product_id: 16, color_id: 12, color_name: 'Russet Red with Riesling')
jj = ProductsColor.create!(product_id: 15, color_id: 2, color_name: 'Cognac Tortoise with Polished Gold')
kk = ProductsColor.create!(product_id: 16, color_id: 2, color_name: 'Cognac Tortoise with Polished Gold')

ll = ProductsColor.create!(product_id: 17, color_id: 2, color_name: 'Polished Gold with Savanna Tortoise')
mm = ProductsColor.create!(product_id: 18, color_id: 2, color_name: 'Polished Gold with Savanna Tortoise')

nn = ProductsColor.create!(product_id: 19, color_id: 4, color_name: 'Crystal')
oo = ProductsColor.create!(product_id: 20, color_id: 4, color_name: 'Crystal')
pp = ProductsColor.create!(product_id: 19, color_id: 2, color_name: 'Petal Tortoise')
qq = ProductsColor.create!(product_id: 20, color_id: 2, color_name: 'Petal Tortoise')
rr = ProductsColor.create!(product_id: 19, color_id: 9, color_name: 'Tidal Blue')
ss = ProductsColor.create!(product_id: 20, color_id: 9, color_name: 'Tidal Blue')
tt = ProductsColor.create!(product_id: 19, color_id: 3, color_name: 'Striped Sassafras')
uu = ProductsColor.create!(product_id: 20, color_id: 3, color_name: 'Striped Sassafras')
vv = ProductsColor.create!(product_id: 19, color_id: 4, color_name: 'Crystal with Oak Barrel and Blue Bay')
ww = ProductsColor.create!(product_id: 20, color_id: 4, color_name: 'Crystal with Oak Barrel and Blue Bay')

xx = ProductsColor.create!(product_id: 21, color_id: 7, color_name: 'Poblano with Polished Silver')
yy = ProductsColor.create!(product_id: 22, color_id: 7, color_name: 'Poblano with Polished Silver')
zz = ProductsColor.create!(product_id: 21, color_id: 2, color_name: 'Acorn Tortoise with Riesling') 
aaa = ProductsColor.create!(product_id: 22, color_id: 2, color_name: 'Acorn Tortoise with Riesling') 

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
