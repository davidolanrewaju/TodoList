# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- 📖[Overview](#overview)
  - 🧠[The challenge](#the-challenge)
  - 📸[Screenshot](#screenshot)
  - 🔗[Links](#links)
- ♻[My process](#my-process)
  - 🛠[Built with](#built-with)
  - 🧐[What I learned](#what-i-learned)
  - ⏩[Continued development](#continued-development)
  - 📚[Useful resources](#useful-resources)
- 👤[Author](#author)
- 🙏[Acknowledgments](#acknowledgments)


## 📖 Overview

### 🧠 The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
<!-- - **Bonus**: Drag and drop to reorder items on the list -->

<!-- ### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.** -->

### Links

- Solution URL: [Github Repo](https://github.com/davidolanrewaju/TodoList)
- Live Site URL: [Todo App Live](https://todolist-app-36no.onrender.com/)

## ♻ My process

### 🛠 Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Javscript
- React
- Tailwind CSS
- Express & Node JS

### What I learned


```jsx
<div className={`absolute ${darkMode ? "dark-bg-color" : "light-bg-color"}`}>
        {darkMode ? <DarkBackground/> : <LightBackground />}
        <div className="content-container h-screen relative w-auto mx-4 md:mx-8 lg:mx-24 xl:mx-60 -mt-36 md:-mt-48 lg:-mt-32 xl:-mt-48">
</div>
```

```css
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.5);
  z-index: 1;
}

.modal-form {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

```js
const [imageSrc, setImageSrc] = useState('images/bg-desktop-light.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSrc('images/bg-mobile-light.jpg');
      } else {
        setImageSrc('images/bg-desktop-light.jpg');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## 👤 Author

- Website - [David Olanrewaju](https://github.com/davidolanrewaju)
- Frontend Mentor - [@dave-prog](https://www.frontendmentor.io/profile/dave-prog)
- Twitter - [@ola_dayve](https://www.twitter.com/ola_dayve)
- LinkedIn - [David Olanrewaju](https://www.linkedin.com/in/olanrewaju-david/)

<!-- ## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->
