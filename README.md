## UserItem

A fully customizable component for displaying users.

![useritem](https://www.useritem.dev/ui.png)

[Website](https://dub.sh/useritem)
[Github](https://dub.sh/useritem-github) — feel free to give a star!

### Get Started

To use the UserItem component in your React/Next.js application, you can install it via npm or yarn:

```bash
npm install useritem
yarn add useritem
```

## React & Next.js

```bash
...
// React
import UserItem from 'useritem';

// Next.js, only on client for now
const UserItem = dynamic(() => import("useritem"), { ssr: false });

<UserItem
  title="John Doe"
  description="johndoe@mail.com"
  avatarUrl="https://example.com/avatar.jpg"
  onClick={(e) => console.log("User item clicked!", e)}
/>
```

## Props

| Prop         | Type                                  | Description                                                                                                                                                         |
|--------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `avatar`     | `boolean`                             | Determines whether the avatar should be displayed or not. Default value is `true`.                                                                                  |
| `avatarUrl`  | `string`                              | URL of the user's avatar image. Default value is a default avatar image URL.                                                                                        |
| `border`     | `boolean`                             | Determines whether a border should be displayed around the component. Default value is `true`.                                                                       |
| `color`      | `string`                              | Background color of the avatar.                                                                                                                                      |
| `description`| `string`                              | User description or email.                                                                                                                                           |
| `disabled`   | `boolean`                             | Determines whether the user item should be disabled. Default value is `false`.                                                                                      |
| `loading`    | `boolean`                             | Determines whether a loading state should be displayed. Default value is `false`.                                                                                   |
| `limit`      | `number`                              | Determines the string limit on title & description.                                                                                   |
| `onClick`    | `(event: MouseEvent) => void`         | Function to handle click events on the user item.                                                                                                                   |
| `online`     | `boolean`                             | Determines whether the user is online.                                                                                                                              |
| `onlyAvatar` | `boolean`                             | Determines whether only the avatar should be displayed without other information.                                                                                   |
| `reverse`    | `boolean`                             | Determines whether the layout should be reversed. Default value is `false`.                                                                                         |
| `squared`    | `boolean`                             | Determines whether the corners should be squared. Default value is `false`.                                                                                         |
| `status`     | `boolean`                             | Determines whether the user is a status user.                                                                                                                       |
| `shadow`     | `boolean`                             | Determines whether a shadow effect should be added. Default value is `false`.                                                                                        |
| `style`      | `React.CSSProperties` or `undefined`  | Custom CSS styles for the component.                                                                                                                                |
| `title`      | `string`                              | User's name or title. Default value is `"John Doe"`.                                                                                                                 |


## License
This component is licensed under the MIT License. Feel free to use and modify it as needed for your projects.