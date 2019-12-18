
### This is a test app

### How to run
    - yarn install
    - cd ios
    - pod install
    - cd ..
    - yarn react-native run-ios or yarn react-native run-android

### In order to test shake make sure that you close the RN DEV menu ASAP and then wait a few second to get the sorting pop-up. If you don't close the RN dev menu pop-up might not appear in ios



### User requirements
1. As a user I want the application to show me beers using three different views (tabs):
    - beers that pair with pizza
    - beers that pair with steak
    - all available beers
2. As a user I want each view to contain no more than 9 items (displayed in a similar way to the UI/UX designs provided.
3. As a user I want to easily navigate around the app and:
    - Paginate through the beers using swipe gestures: up->down, down->up
    - For each beer in a view see the name, a picture and the abv
    - Transition between views/tabs using swipe gestures: le->right, right->le
4. As a user I want to select a beer and see the following information:
    - picture
    - name
    - tagline
    - abv
    - Descripon (collapsed if too long)
    - food_pairing (collapsed if too long)
5. As a user I want to sort the beers in each view/tab between:
    - abv_ascending
    - abv_descending,
    - name_ascending,
    - name_descending
6. As a user I want to change the sort mode by shaking my device.