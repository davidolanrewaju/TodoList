# FRONTEND MENTOR - TODO APP SOLUTION

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Table of contents

- [📖 Overview](#overview)
  - [🧠 The challenge](#the-challenge)
  - [📸 Screenshot](#screenshot)
  - [🔗 Links](#links)
- [♻ My process](#my-process)
  - [🛠 Built with](#built-with)
  - [🧐 What I learned](#what-i-learned)
  - [⏩ Continued development](#continued-development)
  - [📚 Useful resources](#useful-resources)
- [👤 Author](#author)
- [🙏 Acknowledgments](#acknowledgments)


# 📖 Overview <a name="overview"></a>

## 🧠 The challenge <a name="the-challenge"></a>

Users should be able to:

- View the optimal layout for the app depending on the device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
<!-- - **Bonus**: Drag and drop to reorder items on the list -->

## 📸 Screenshot <a name="screenshot"></a>
![todolist-app-36no onrender com_ (1)](https://github.com/davidolanrewaju/TodoList/assets/63909901/93a33b42-c035-48ad-91ca-37a3305a5ff6)

![todolist-app-36no onrender com_ (2)](https://github.com/davidolanrewaju/TodoList/assets/63909901/ec2c493c-6891-4d34-8293-dccde00f8b98)

![todolist-app-36no onrender com_ (3)](https://github.com/davidolanrewaju/TodoList/assets/63909901/986cf4e1-cca8-40f6-bedb-8cef72f2350a)

![todolist-app-36no onrender com_](https://github.com/davidolanrewaju/TodoList/assets/63909901/b47be6c2-eaeb-4ecf-8b6f-79072a117cd5)

## 🔗 Links <a name="links"></a>

- Solution URL: [Github Repo](https://github.com/davidolanrewaju/TodoList)
- Live Site URL: [Todo App Live](https://todolist-app-36no.onrender.com/)

# ♻ My process <a name="my-process"></a>

## 🛠 Built with <a name="built-with"></a>

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Javascript
- Typescript
- React
- Tailwind CSS
- Express & Node JS

## 🧐 What I learned <a name="what-i-learned"></a>
While developing this project, I gained a profound comprehension of prop drilling. Additionally, I improved my understanding of utilizing the useState(), useEffect(), and useMemo() hooks. I also became acquainted with employing ternary operators as conditionals within JSX elements. Moreover, I acquired knowledge about constructing databases for online app hosting, hosting web services, and establishing connections between the database and hosted web services.
Below are some blocks of code I am proud of:

This code 👇🏾 was written to implement a background image and color change while switching themes
```jsx
<div className={`absolute ${darkMode ? "dark-bg-color" : "light-bg-color"}`}>
        {darkMode ? <DarkBackground/> : <LightBackground />}
        <div className="content-container h-screen relative w-auto mx-4 md:mx-8 lg:mx-24 xl:mx-60 -mt-36 md:-mt-48 lg:-mt-32 xl:-mt-48">
</div>
```

This one 👇🏾 gave me a better understanding of how css position works
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
While this 👇🏾 made me understand useEffect() and exposed me to javascript's window object
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

## ⏩ Continued development <a name="continued-development"></a>

Armed with the limited expertise acquired from undertaking this project, my plan is to develop skills and engage in the following:
- Exploring the implementation of React's useContext() hook to reduce or even eliminate the need for prop drilling.
- Delving into the realm of CSS animations.
- Familiarizing myself with a non-relational database like MongoDB.
- Diving into the utilization of GraphQL.

## 📚 Useful resources <a name="useful-resources"></a>

- [Tailwind cheatsheet](https://tailwindcomponents.com/cheatsheet/) - This helped me in implementing tailwind commands easily(considering this was my first project using tailwind).
- [Dave Gray explaining prop drilling](https://www.youtube.com/watch?v=XyIXMQ9SZmI) - This was an amazing video that helped me finally understand prop drilling due to its step-by-step approach. I'd recommend it to anyone still learning this concept.
- [ExpressJS Middleware](https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/) - This was an amazing article from WebDev Simplified, a YouTuber. He goes into explaining how to set up an express server and express middleware.


# 👤 Author <a name="author"></a>

- Website - [David Olanrewaju](https://github.com/davidolanrewaju)
- Frontend Mentor - [@dave-prog](https://www.frontendmentor.io/profile/dave-prog)
- Twitter - [@ola_dayve](https://www.twitter.com/ola_dayve)
- LinkedIn - [David Olanrewaju](https://www.linkedin.com/in/olanrewaju-david/)

# 🙏 Acknowledgments <a name="acknowledgements"></a>

Special shout out to the internet, for the inexhaustible solutions and resources. And also to the various YouTubers who put in the effort to explain in detail complex concepts in web development.
