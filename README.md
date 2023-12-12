
# 🏪 UBUY - Online Marketplace

UBUY is a React CRUD application. UBUY is an online marketplace/e-commerce website that can help you sell all of your unnecessary appliances and things in general. UBUY's goal is to offer its users/visitors the best possible market experience. Users can get around quickly due to the user friendly design of our website. Our application is fully responsive, so you can use it from any device, any time! So what are you waiting for? Register and sell your unnecessary stuff today!

# 🚀 Features In Development
### Account Balance
- Registered users will be able to activate gift cards/codes with different amounts of balance. Activating a code will add the balance to their account and purchases they want to make will require the listed amount of money.
- Administrators will be able to create new gift cards/codes through the admin panel. They can set the amount of uses a gift card has and the balance it will add to the user's account

### User Settings/Enhanced User Profile
- Registered users will be able to view/edit their settings in a more in depth way than the current profile editing.
- Registered users will be able to change their password.
- Registered users will be able to add different addresses.
- Registered users will be able to view all of their orders.
- Administrators will be able to edit user profiles.

### Wishlist
- Registered users will be able to add their favorite products to their wishlist for easier access to them.
- Registered users will be able to access their wishlist through their settings/profile.

### Product Rating
- Registered users will be able to rate the product when leaving a review.

### Chat With Us/Support Chat (Replacing "Contact Us")
- Registered users will be able to send us messages to get the help they need for our services.

# ⚙️ Technical Description
### UBUY was built using with:
- [**ReactJS**](https://react.dev/) - Front-End
- [**Express.js REST API**](https://expressjs.com/) - Back-End
- [**React Hot Toast**](https://react-hot-toast.com/) - Notifications
- [**Material UI**](https://mui.com/) - React Ready Components
- **Pure CSS**

# ☁ Hosting Information

You can check out the project at: [https://ubuy-react.netlify.app/](https://ubuy-react.netlify.app/)

You can check out the Back-End REST API at: [https://github.com/kristiyanpts/UBUY-REST-API](https://github.com/kristiyanpts/UBUY-REST-API)

**IMPORTANT**

Back-End REST API is hosted on Render with a free plan that has some limitations. If you get a blank error when you enter the website or courses aren't loading, please wait for up to 2 minutes and refresh. The reason for that is due to the host being free and if not used recently it spins down.

![Imgur](https://imgur.com/aPArXlm.png)

# 🗄️ Structure

### 1. Public Part - No Authentication Needed
- Home: User is greeted with the base information they need to know about UBUY and is prompted to register (if not signed in), create a listing (if signed in), browse our listings or take a look at the 5 recently added listings by scrolling down.
- Contact: Information about our whereabouts is displayed, as well as a contact form for the user to get in touch with us.
- Market: Displayes all of the listings, as well as a filter menu on the left of the screen.
- Listing Details: User can view all of the information about the currently selected product (listed by, listed on, quantity, category, description, people from whom its bought and its price of course) and its reviews. 
- Profiles: User can view other people's profile page and their listed products.
- Sign In and Sign Up: No explanation needed here :D

### 2. Private Part - Authentication Needed
- Listing Creation: Authenticated users who are registered as sellers can add a new listing. However, authenticated users who are registered as buyers can not add a new listing!
- Listing Details: Authenticated users who are not the creator (seller) of the listing can add the product listed to their cart and add reviews about the product. Authenticated user who is the creator (seller) of the listing can edit the listing and delete the listing.
- Editing A Listing: By clicking the edit button the creator (seller) is redirected to the editing page where they can update everything about their listing.
- Profile: Authenticated user can edit their profile information by navigation to their profile and clicking the edit button.
- Admin Panel: Authenticated users who are admins can access the admin panel.

### 3. Admin Panel - Authentication + Admin Permission Needed
- Dashboard: Admin can view the main information about the current status of the website.
- Listings: Admin can view all of the existing listing and can delete them.
- Users: Admin can view all of the existing users and can delete their profiles.

### 4. Aditional Feature
- Editing and Deleting your listings
- Adding and Deleting product reviews (can't review your own listing of course)
- Buying products decreases their quantity (can't buy more than the available amount)
- Editing and Deleting your profile (deleting your profile delets your product listings and reviews also)
- Admins can Delete listing and users

# 📜 Available Scripts / Setting up

### 1. Starting the application locally
***OPTIONAL** - If you want to start the application fully locally

#### Step 1: Download or clone this repistory
- Step 1.1 (*Optional): Download or clone the following repositoty containing the REST API - [https://github.com/kristiyanpts/UBUY-REST-API](https://github.com/kristiyanpts/UBUY-REST-API)
- Step 1.2 (*Optional): To run the app locally you also need to download [MongoDB](https://www.mongodb.com/try/download/community)

#### Step 2: Open the downloaded repistory in VS Code
- Step 2.1 (*Optional): Open the REST API in a different VS Code window and go through its documentation about setting it up.
- Step 2.2 (*Optional): Head to ubuy/src/core/constants/api.constants.js and uncomment the second line (Locahost URL)

#### Step 3: Open an integrated terminal in the ubuy/ folder:

#### Step 4: Run the following commands
```
npm i
npm run dev
```

#### Step 5: Wait for the application to start and head to [http://localhost:5173/](http://localhost:5173/)

### 2. Building the application

#### Step 1: Open an integrated terminal in the ubuy/ folder:

#### Step 2: Run the following commands
```
npm run build
```

#### Step 3: After the application is build it will be located in the dist/ folder

### 3. Giving yourself admin permissions (only if ran locally)

#### Step 1: Open MongoDB Compass and change your role to "admin".

#### Step 2: Copy your id from MongoDB Compass and add it to /core/constants/admin.constants.js

#### Step 3: Relog from your account and you should have admin permission!

# 🖼️ Screenshots

## Home Page
![Imgur](https://imgur.com/0a9J5tj.png)
![Imgur](https://imgur.com/iDjbCtJ.png)

## Contact Page
![Imgur](https://imgur.com/y32BuGk.png)
![Imgur](https://imgur.com/fEJjig4.png)

## Market Page
![Imgur](https://imgur.com/6F1UT8H.png)

## Add Listing Page
![Imgur](https://imgur.com/BclJy0K.png)

## Edit Listing Page
![Imgur](https://imgur.com/Aqawmrt.png)

## Listing Details Page
![Imgur](https://imgur.com/hwRFucx.png)
![Imgur](https://imgur.com/VzhpcJY.png)

## Cart Page
![Imgur](https://imgur.com/TgIIVLe.png)
![Imgur](https://imgur.com/CP5qcgm.png)

## Profile Page
![Imgur](https://imgur.com/LL5a1TP.png)
![Imgur](https://imgur.com/qiYMGxS.png)

## Edit Profile Page
![Imgur](https://imgur.com/ZnNQa4Z.png)

## Admin Panel Page
![Imgur](https://imgur.com/SCEkDFu.png)
![Imgur](https://imgur.com/wOWeiAa.png)
![Imgur](https://imgur.com/gYDgRHJ.png)
