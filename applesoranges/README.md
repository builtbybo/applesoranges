
## Apples and Oranges Task


### My Approach to Step 1:
--------------------------

'The Supermarket Experience'

1. User adds and submits each item like a to do list
2. Item gets pushed into an array
3. List of 'scanned' items are displayed on screen
4. Array is looped through and filtered for specific items 'apples' or 'oranges'
5. Number of items added is displayed on screen
6. Subtotal tally of cost is displayed at the bottom of screen upon each entry

### Extra features:

- Validation has been added so that only 'apples' and 'oranges' can be added
- Autofocus on load
- On focus, input is cleared for new entry


### My Approach to Step 2:
--------------------------
### Apple offer approach:

The customer has to have 2 apples in the 'basket' for the offer to be applied - the same way it would work in a supermarket
The function checks if there is an even number in the 'basket'
Then the number of apples is divided by 2 then multiplied by the price of apples
the new apple total then then updated by the price of apples

** Issues - the BOGOF function calculates but I'm aware there is a bit of a lag when displaying the list of items - (Which I would tweak if there was more time)

- There are also still a few tweaks to be made to the Orange offer too. 

I would also separate the deal offer functions

### Orange offer approach:

- Get the length of  oranges in the array
- If the total length is less than 3 :   orangeSubtotal = orangeTotal*priceOfOrange;
- If Orange Total % 3 === 0 OR Orange Total % 3 === 1 OR Orange Total % 3 === 2 the deal price calculation to get the correct pricing:
  Deal Price = (Price Of Orange x Orange Total) - Price Of Orange x 1;





### Extra notes:

As I developed using a supermarket approach i assumed items would be added one at a time as opposed to a whole list being scanned in at the till


## Available Scripts

In the project directory, you can run:
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

-----------------------------------





