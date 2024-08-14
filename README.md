# @mbs-dev/react-helpers

This is a collection of utility functions designed to streamline common tasks within React projects. It provides a variety of helpers for data manipulation, text formatting, date handling, notifications, and more.

## Installation


You can install `@mbs-dev/react-helpers` via npm or yarn:

```bash
npm install @mbs-dev/react-helpers
# or
yarn add @mbs-dev/react-helpers

```
## Usage

Import Helpers:

```js
  import { formDataGenerator, other helpers... } from '@mbs-dev/react-helpers';
  ```

### Available Functions:
- 1 : formDataGenerator
- 2 : randomKeyGenerator
- 3 : referenceGenerator
- 4 : slugGenerator
- 5 : arabicSlugGenerator
- 6 : exportDataToExcel
- 7 : getFirstWord
- 8 : isEven
- 9 : encodeHtmlTags
- 10 : decodeHtmlTags
- 11 : handleScrollTop
- 12 : formatPrice
- 13 : formatDate
- 14 : TruncateText
- 15 : getTodayDate
- 16 : removeHtmlTags
- 17 : useDebounce
- 18 : useLocalStorage
- 19 : Notify



---------------------------------------
- 1 : 
  `formDataGenerator(object, formData, prefix)`:
  
    Recursively iterates through an object and appends key-value pairs to a FormData object, handling nested objects and Blobs appropriately.
    Example:

```js
  const myObject = {
  username: 'johndoe',
  profile: {
      firstName : 'John',
      lasttName : 'Doe',
    },
  };

  const formData = new FormData();
  formDataGenerator(myObject, formData, '');
  // or formDataGenerator(myObject, formData); prefix is optional with empty string as default value
```
  - If prefix is empty (meaning at the root level of the original object), the key itself is used.
  - Otherwise, it constructs a nested key name using square brackets.
  - Here's an example of how the formDataGenerator function works with a non-empty prefix:
  
```js

  const myObject = {
  name: "John Doe",
  address: {
        street: "123 Main St",
        city: "Anytown",
    }
  };

  const formData = new FormData();
  formDataGenerator(myObject, formData, "user"); // "user" is the prefix
```

  For the name property:
  - Since the prefix is "user", propKey becomes "user[name]".
  - The value ("John Doe") is a string, so it gets appended to formData with the key "user[name]".
  For the address property:
  - propKey becomes "user[address]" (due to the prefix).
    - For street: propKey becomes "user[address][street]" and the value ("123 Main St") gets appended.
    - For city: propKey becomes "user[address][city]" and the value ("Anytown") gets appended.


---------------------------------------
- 2 : 
  `randomKeyGenerator(length)`:

    Generates a random string of the specified length, containing uppercase and lowercase letters, as well as numbers.
    Example:

```js
  const randomKey = randomKeyGenerator(16); 
  console.log(randomKey); // Output: Example: "oF291n3LKJ4t7B5q" 
```


---------------------------------------
- 3 : 
  `referenceGenerator(randomLength, ...elements)`:

    Constructs a reference string by combining the current date (year, month, day, hours, minutes, seconds) with a random number ( randomNumber ) with default length (randomLength) = 2.
    You can customize the date elements included in the reference.
    Example:

```js
  const reference = referenceGenerator(undefined, "hours", "day");
  console.log(reference); // Output: Example: "1805" (This includes the current hours, day)

  const reference = referenceGenerator(3, "day", "month", "year");
  console.log(reference); // Output: Example: "24052024" (This includes the current day, month, and year)

  const referenceWithRandom = referenceGenerator(5, "day", "month", "year", "randomNumber");
  console.log(referenceWithRandom); // Output: Example: "2405202412345" (Includes date and a random number)
```


---------------------------------------
- 4 : 
  `slugGenerator(inputString)`:

    Creates a URL-friendly slug from the provided string, handling special characters, spaces, and Arabic text (if needed).
    Example:

```js
  const title = "The following text is used as an example";
  const slug = slugGenerator(title);
  console.log(slug); // Output: "the-following-text-is-used-as-an-example"
```


---------------------------------------
- 5 : 
  `arabicSlugGenerator(inputString)`: 
  
    This function is similar to slugGenerator but might be specifically tailored for handling Arabic characters.
    Example:

```js
  const arabicTitle = "يتم استعمال النص التالي كمثال";
  const arabicSlug = arabicSlugGenerator(arabicTitle);
  console.log(arabicSlug); // Output : "يتم-استعمال-النص-التالي-كمثال" 
```


---------------------------------------
- 6 : 
  `exportDataToExcel(data, fileName)`:

    This function takes data in the form of a 2D array and exports it as an Excel file with the specified file name. The generated file will have a .xlsx extension and contain the data on a single sheet named "Sheet1".
    Example:

```js
  const App: React.FC = () => {
    const exportData = async () => {
      const response = await apiRequest({
        route: 'data-to-export',
        method: 'GET',
      });
      if (response.status === 200) {
        await exportDataToExcel(response.data, 'UserData' )
      }
    }
    return (
        <main>
            <button onClick={exportData}>Export Data</button>
        </main>
    );
    };

    export default App;

```


---------------------------------------
- 7 : 
  `getFirstWord(inputString)`:

    Extracts the first word from a string, handling cases where there's only one word or multiple words.
    Example:

```js
  const sentence = "Hello World, how are you?";
  const firstWord = getFirstWord(sentence);
  console.log(firstWord); // Output: "Hello"
```


---------------------------------------
- 8 : 
  `isEven(number)`:

    Determines whether a number is even.
    Example:

```js
  const number = 10;
  const isNumberEven = isEven(number);
  console.log(isNumberEven); // Output: true
```


---------------------------------------
- 9 : 
  `encodeHtmlTags(html)`:

    Encodes HTML tags (less than '<' and greater than '>') to prevent unintended rendering within text content.
    Some times the Server will block the request that includes HTML tags (e.g. when use a Text Editor) , so this function can help top fix that.
    Example:

```js
  const encodedHtml = encodeHtmlTags("<div>Hello</div>");
  console.log(encodedHtml); // Output: "&lt;div&gt;Hello&lt;/div&gt;"
```


---------------------------------------
- 10 : 
  `decodeHtmlTags(html)`:

    Decodes previously encoded HTML tags back to their original form.
    Example:

```js
  const decodedHtml = decodeHtmlTags("&lt;div&gt;Hello&lt;/div&gt;");
  console.log(decodedHtml); // Output: "<div>Hello</div>"
```


---------------------------------------
- 11 : 
  `handleScrollTop()`: 
  
    This function scrolls the document to the top.
    Example:

```js
  // This can be called from an onClick event handler of a button
  import { handleScrollTop } from '@mbs-dev/react-helpers'
  const App: React.FC = () => {
    return (
        <main>
            <button onClick={handleScrollTop}>Back To Top</button>
        </main>
    );
    };

    export default App;
```


---------------------------------------
- 12 : 
  `formatPrice(price)`: 
  
    This function formats a price string to include commas and a specific number of decimal places.
    Example:

```js
  const productPrice = "1234.5678";
  const formattedPrice = formatPrice(productPrice);
  console.log(formattedPrice); // Output: "1 234.57"
```



---------------------------------------
- 13 : 
  `formatDate(dateInput, template, asInputValue)`: 
  
  This function formats a date string based on a provided template or returns the date in a format suitable for input fields.
  Example:

```js
  import { DateFormatTemplate } from '@mbs-dev/react-helpers'
  const myDate = "2024-05-01";
  const customTemplate: DateFormatTemplate = ({ day, month, year }) => `${month}/${day}/${year}`;

  // Option 1: Using default template (YYYY-MM-DD)
  const formattedDate = formatDate(myDate);

  // Option 2: Using custom template
  // const customTemplate = (date) => `${date.day}/${date.month}/${date.year}`;
  const formattedDateWithCustomTemplate = formatDate(myDate, customTemplate);

  // Option 3: Formatting for input value
  const formattedDateForInput = formatDate(myDate, undefined, true);
```


---------------------------------------
- 14 : 
  `TruncateText({ text, maxLength })`: 
  
    This function truncates a string to a specified maximum length and adds an ellipsis (...) if the text is longer.
    Example:

```js
  const longText = "This is a very long text that needs to be truncated.";
  const truncatedText = TruncateText({ text: longText, maxLength: 20 });
  console.log(truncatedText); // Output: "This is a very lon..."
```

---------------------------------------
- 15 : 
  `getTodayDate(dateElements)`:
  
  This function retrieves today's date and formats it based on the specified elements (day, month, year).
  Example:

```js
  const todaysDate = getTodayDate();
  console.log(todaysDate); // Output: "01-05-2024" (assuming all elements are included)

  const todaysDateShort = getTodayDate(["day", "month"]);
  console.log(todaysDateShort); // Output: "01-05" (includes only day and month)
```


---------------------------------------
- 16 : 
  `removeHtmlTags(input)`: 
  
    This function removes all HTML tags from a string.
    Example:

```js
  const htmlString = "This is a text with <b>bold</b> and <i>italic</i>.";
  const plainText = removeHtmlTags(htmlString);
  console.log(plainText); // Output: "This is a text with bold and italic." (HTML tags are removed)
```


---------------------------------------
- 17 : 
  `useDebounce(value, delay)`: 
  
    The useDebounce hook allows you to debounce any fast-changing value. This hook is ideal for performance optimization in scenarios like search inputs where you want to delay the execution until the user has stopped typing.
    Example:

```js
  const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    // API call or an action to be executed after the specified delay
    console.log('Debounced Value:', debouncedValue);
  }, [debouncedValue]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type to search..."
    />
  );
  };

```



---------------------------------------
- 18 : 
  `useLocalStorage(key, initialValue)`: 
  
    This custom hook simplifies using the browser's localStorage to store and retrieve state. It provides a way to persist state across page reloads.
    Example:

```js
  const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh' }}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
  };

  export default ThemeToggle;

```


---------------------------------------
- 19 : 
  `Notify Functions`:

  These functions utilize the react-toastify library (assumed to be installed separately) to display notification messages. They provide various message types for success, error, information, warning, and custom error notifications in English and French.


```js

  postNotify(entity, delay):
  Displays a success notification for adding a new entity. 
  e.g. 'Product ajouté avec succès' , 'User ajouté avec succès'
  
  updateNotify(entity, delay):
  Displays a success notification for updating an entity.
  e.g. 'Product modifié avec succès' , 'User modifié avec succès'
  
  deleteNotify(entity, delay):
  Displays a success notification for deleting an entity.
  e.g. 'Product supprimé avec succès' , 'User supprimé avec succès'
  
  successNotify(text, delay):
  Displays a general success notification with custom text.
  
  errorNotify(text, delay):
  Displays an error notification with custom text.
  
  infoNotify(text, delay):
  Displays an informational notification with custom text.
  
  warningNotify(text, delay):
  Displays a warning notification with custom text.
  
  enCustomeErrorNotify(delay):
  Displays a custom error notification in English ("Something wrong, try again").
  
  frCustomeErrorNotify(delay):
  Displays a custom error notification in French ("Une erreur est survenue, réessayez").

```
  Remember: 
  - You can import the 'notify' from @mbs-dev/react-helpers instead of import each notify function separately.
  - You must import and use ToastContainer from '@mbs-dev/react-helpers' to display the toast when use the Notify functions.
  - delay is optional with default value 1500ms


```js
  import { Outlet } from 'react-router-dom'
  import { LayoutProvider } from '../_metronic/layout/core'
  import { ToastContainer , notify} from '@mbs-dev/react-helpers'
  import "react-toastify/dist/ReactToastify.css";

  const App = () => {
    notify.successNotify('Access the successNotify from notify');
    notify.infoNotify('Access the infoNotify from notify', 2000);
    notify.frCustomeErrorNotify();

    return (
          <LayoutProvider>
            <ToastContainer />
            <Outlet />
          </LayoutProvider>
    )
  }

  export { App }