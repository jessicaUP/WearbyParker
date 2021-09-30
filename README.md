#Wearby Parker

Link: [Wearby Parker](http://wearby-parker.herokuapp.com/#/)

# SUMMARY
WearbyParker is a clone of the eyewear company, Warby Parker's ecommerce site. 
Features:
  * User Authentication
  * Shopping Cart / Tryon Cart
  * Products
  * Catigory Filter
  * Search

## TECHNOLOGIES
* BACKEND
  * Ruby on Rails
  * PostgreSQL - Database
  * AWS S3 - Image Storage
* FRONTEND
  * Javascript
  * React / Redux


## USER AUTHENTICATION
First time users can easily create an account or use the provided Demo User profile. To ensure security, all passwords are salted and hashed before added to the database. All features of the site are availble without login, however to save your cart one must have an account. When a user has a cart prior to loging in, the current cart will be prioritized over the cart stored on the user account.
Users must enter information into all inputs in order to click the login or sign-up button. User error handling provides specific messages for each input for aid.

## SHOPPING CART / TRYON CART
This duel cart feature allows users to add items ready for purchase alongside up to 5 items to try for free. To add items to the cart, users are navigated through a multi-page form for an intuitive experience. 

![BuyForm](https://user-images.githubusercontent.com/79214086/135510227-0a7e58cc-51c3-4a21-ba97-269c13d2171d.gif)

* TRYON
- By pressing the toggle on the product index, each product populates a button to allow users to add to cart.
- The switch is automatically turned off unless user navigates though the 'Home Try-on' located in the main navigation bar. A query is added to the url, prompting the tryon toggle to turn on.

![TryonToggle](https://user-images.githubusercontent.com/79214086/135513624-55a82a97-7825-4751-9670-f6cf58428f84.gif)

## PRODUCTS
Products are grouped by gender with custom imagery for Men and Women products. The dynamic layout scales images and adds or reduces columns for the optimal viewing experience. 
The selected colorway persists from the product index page and is refelcted throughout the entire show page. On the show page users can explore the products by selecting the radio button or by using the cursor arrows when hovering over the image. 

![DynamicProductIndex](https://user-images.githubusercontent.com/79214086/135515386-966c75b9-f61c-4cc2-9f0a-e9c70d3f6c02.gif)

## FILTER
From the product index page the user can drop down the dynamic Filter element. By selecting multiple options within the same catigory, the products will reflect any product with either option. When options across multiple catigories are selected, the product will reflect products with both features present. In addtion the Color catigory will only show the color option(s) selected within each product.

By creating tables in the database for all catigories, the logic on the backend is optimized.

![FIlterFeature](https://user-images.githubusercontent.com/79214086/135518820-35f615d6-bc0c-4622-aa30-76a8365cc270.gif)

## SEARCH
The Search modal is available in both the main and product nav bar. The minimal design and the on-focus text input prompts users to type in a product name. The search shows all products by colorway. Once product is clicked, gender options become available linking to appropriate show page.

![SearchFeature](https://user-images.githubusercontent.com/79214086/135520254-960c1d17-cce2-4a8b-a840-77a8289b2321.gif)

### FUTURE FEATURES
* Recommendation Quiz
> Step-by-step: Guided question that narrow down to 5 pairs.
> Try on at home: Automatically adds 5 samples to cart.
