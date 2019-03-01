# bamazon
Bamazon is like Amazon but without the images. However, while Amazon is a superior front end application, Bamazon is a far superior back end application. Bamazon is a command line node/SQL app that prompts you through the steps to purchase an item from a list.

##Before You Begin

1. Bamazon will search a SQL database for a list of items, price and quantity among a few other things. It will decrement the total quantity count as items are purchased and it will add the total cost of the order for the customer.

##Bamazon in action:

After you have installed the required packages you may enter:

node bamazonCustomer.js

It will look like this...

![prompt1](https://user-images.githubusercontent.com/46286683/53615154-4501d700-3ba2-11e9-8055-b9166eccb879.PNG)

As you can see the application prompted you with a question. 

Next... Answer: 'n'

![answerno](https://user-images.githubusercontent.com/46286683/53615160-47fcc780-3ba2-11e9-88a4-ced10508c992.PNG)

How polite right? 

---------------------------------------------------------------------------------------------------------

Let's actually go shopping though...
Answer: 'y'

![answeryes](https://user-images.githubusercontent.com/46286683/53615162-4a5f2180-3ba2-11e9-8ca4-f66b4514aadc.PNG)

See something you like? Enter the id of the product.

![identer](https://user-images.githubusercontent.com/46286683/53615306-ef79fa00-3ba2-11e9-9c45-82afc7386e16.PNG)

You will then be prompted to enter the amount of that product you would like to purchase.

---------------------------------------------------------------------------------------------------------

Who wouldn't want a dirtbike!?

![oneqtytotal](https://user-images.githubusercontent.com/46286683/53615323-fc96e900-3ba2-11e9-93af-68666af851d6.PNG)

It will add the total cost of the item/s for you.

---------------------------------------------------------------------------------------------------------

It's smart enough to do math!

Next it will add the total cost if multiple are bought.

Side by Side? Aaaaaahhh, I'll take 3.......

![multiqtytotal](https://user-images.githubusercontent.com/46286683/53615327-fe60ac80-3ba2-11e9-9f76-d4a4e6f60ac6.PNG)

**Notice- earlier we bought id: 8 and a qty: 1. It shows here that the total qty is 1. The showroom floor had 2 of them to start the day.

---------------------------------------------------------------------------------------------------------

Lastly, it knows if you are trying to purchase items and the stock quantity is less than what you are attempting to buy.

2 is always better than 1... I think...

![notenoughinstock](https://user-images.githubusercontent.com/46286683/53615310-f30d8100-3ba2-11e9-8484-dadbb09fa2bf.PNG)

I decided to make the app so it would just reload the items to choose from. This way the customer can adjust their qty or buy something else without having to start all over. It does have a message in there saying "Sorry Not Enough In Stock"

---------------------------------------------------------------------------------------------------------

- Repository: https://github.com/dfarnick/bamazon