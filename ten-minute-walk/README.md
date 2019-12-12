Take a ten minute walk
Create a function that will return true if the walk will take you exactly ten minutes and will return you to your starting point.

Requirements
You are meeting a friend in New York City, where all roads are laid out in a perfect grid. You arrived ten minutes too early to the appointment, so you decided to take the opportunity to go for a short walk.
The city provides its tourists with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk. eg. ['n', 's', 'w', 'e']

You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Acceptance Criteria
app.tenminuteswalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) # => true ### back at starting point, 10 minute walk

app.tenminuteswalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) # => false ### not back at starting point, 10 minute walk

app.tenminuteswalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) # => false ### not back at starting point, 10 minute walk

app.tenminuteswalk(['w', 's']) # => false ### not back at starting point, less than ten minutes

app.tenminuteswalk(['w', 'w', 'e', 'e']) # => false, ### not back at starting point, less than ten minutes

app.tenminuteswalk(['w', 'e', 's', 'n']) # => false  ### back at starting point, less than ten minutes

app.tenminuteswalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n', 's', 's']) # => false ### not back at starting point, more than ten minutes