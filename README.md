## State exercise #1

# The following exercises will give you more practice with creating classes and managing state.

- Create two function components: Input and Ouput
    - The Input component should show a label (that says "type here") and a text input element
    -  The Output component should show an empty div

- Import these into your App component

- Change the App component to a class

- In App's constructor, add a state property with a single key: textValue

    - Give textValue a value of "this is the text value in state"

- Pass the textValue state property as a prop to the Input and also to the Output

    - In your Input component, use the prop as the value of the text input element

    - In your Output component, display the prop in the div

- Give App a helper function "_updateText" that receives a string as an argument and calls setState() to update the textValue in App's state

- Pass "_updateText" as a second prop to the Input component

- Use the prop as the onChange of the text input element

- Make sure that as you type into the Input also appears in the Output

- Bonus feature #1: create a ClearInput component that contains a button. When the button is clicked, the text in the Input and the Output should be empty 

- Bonus feature #2: create an UpperCaseOputput component. Pass the textValue state property to it. It should display the same text, but in uppercase.

- Bonus feature #3: create a CaesarCipherOutput component. 