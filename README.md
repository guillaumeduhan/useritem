# useritem

<div style="border:1px solid #dc2626;background:#fee2e2;padding:12px;border-radius:6px;">
  <strong>Deprecated</strong><br />
  This package is deprecated. You can now use <strong>UserItem</strong> as a component on <a href="https://useritem.dev">useritem.dev</a>.
</div>

## Get Started

To use the UserItem component in your React/Next.js application, you can install it via npm or yarn:

```bash
npm i useritem@latest
yarn add useritem@latest
```

## React & Next.js

```bash
import UserItem from 'useritem';

<UserItem
  name="John Doe"
  description="johndoe@mail.com"
  avatarUrl="https://example.com/avatar.jpg"
  onClick={(e) => console.log("User item clicked!", e)}
/>
```

## Props

| Prop               | Type                                  | Description                                                                                           | Default                  |
|--------------------|---------------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------|
| `avatar`           | `boolean`                             | Determines whether the avatar should be displayed or not.                                              | `true`                   |
| `avatarUrl`        | `string`                              | URL of the user's avatar image. Default value is a default avatar image URL.                           |                          |
| `avatarBackgroundColor` | `string`                         | Background color of the avatar.                                                                        | `'#ccc'`                 |
| `border`           | `boolean`                             | Determines whether a border should be displayed around the component.                                  | `true`                   |
| `description`      | `string`                              | User description or email.                                                                             | `"johndoe@mail.com"`      |
| `disabled`         | `boolean`                             | Determines whether the user item should be disabled.                                                    | `false`                  |
| `onClick`          | `(event: MouseEvent) => void`         | Function to handle click events on the user item.                                                      |                          |
| `width`            | `number`                              | Width of the component.                                                                                | `200px`                  |
| `online`           | `boolean`                             | Determines whether the user is online.                                                                 | `false`                  |
| `reverse`          | `boolean`                             | Determines whether the layout should be reversed.                                                      | `false`                  |
| `squared`          | `boolean`                             | Determines whether the corners should be squared.                                                      | `false`                  |
| `status`           | `boolean`                             | Determines whether the user is a status user.                                                          | `false`                  |
| `shadow`           | `boolean`                             | Determines whether a shadow effect should be added.                                                    | `false`                  |
| `style`            | `React.CSSProperties` or `undefined`  | Custom CSS styles for the component.                                                                   |                          |
| `name`             | `string`                              | User's name or title. Default value is `"John Doe"`.                                                   | `"John Doe"`             |
| `verified`         | `boolean`                             | Indicates whether the user is verified.                                                                | `false`                  |
| `verifiedColor`    | `string`                              | Background color for the verified status badge.                                                        | `'#4caf50'`              |

## License

This component is licensed under the MIT License. Feel free to use and modify it as needed for your projects.


Star on Github 👉 [Github](https://dub.sh/useritem-github)