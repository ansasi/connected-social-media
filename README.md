# Connected Social Media

This project is a social media app similar to Pinterest.

![Connected Demo](https://user-images.githubusercontent.com/60159818/201227892-696aa222-c3dc-4026-9df0-432d5494ac90.JPG)

You can use this project as inspiration for yours. Here are the tools I used.

## Sanity

Sanity is used for backend storage.

### Installation in backend

Install Sanity in the backend folder and initialize it.

`
npm install -g @sanity/cli
sanity init
`

For more info: <https://www.sanity.io/docs/create-a-sanity-project>

## React

Create the new folder connectivity_frontend as a react app.

`
npx create-react-app connectivity_frontend
`

## Tailwind

Install Talwindcss.

`
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
`

Then add it to index.css.

`
@tailwind base;
@tailwind components;
@tailwind utilities;
`

For more info: <https://tailwindcss.com/docs/guides/create-react-app>

## Other libraries

These libraries are also required.

`
npm install @sanity/client @sanity/image-url react-google-login react-icons react-loader-spinner react-router-dom react-masonry-css uui
`

## Google platform

All the authentication is done with Google. So it is necessary to use Google console.

<https://console.cloud.google.com>

### Notes

Normally it takes a while to delete, create or comment a pin, so changes are not seen instantly.

### Future upgrades

- Add the option to "unsave" pins.
- Add the option to delete comments.
