
<h1 align="center">
  <strong>Hooksmith 🪝</strong>
</h1>

### An executable node.js package that generates custom react hooks to your destination project folder.

## Generate
To generate a hook, run the following command:

<h3 align="center"><code>npx hooksmith hookName destination-folder<code></h3>

## Features

- Useful efficient react hooks
- Generate hook file in your desired destination folder
- Expanding hook library
- Use with `npx`
- Just use the hooks you need in your project
- Opensource and maintained by the community

## Usage
To use a hook in your React/Next.js project, simply follow these steps:

1. Generate your hook with the hooksmith package using npx:
```bash
npx hooksmith useDebounce src/hooks
```
2. Import the hook into your component:
```javascript
import useDebounce from '@/hooks/useDebounce';
```

And that's it! You can now use the `useDebounce` hook in your component.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:
1. Fork the repository

2. Create a new branch for your changes, some branch names include:
 - `git checkout -b feat/your-feature/hook-name`
 - `git checkout -b fix/bug-fix-name`
 - `git checkout -b docs/your-documentation-update`
 - `git checkout -b refactor/your-code-refactor`

3. To add a new hook, create a new file in the `src/hooks` directory and name it according to the hook name in **camelCase**.
4: Add your changes and commit them with a descriptive commit message with issue number if applicable.

5. Push your changes to your forked repository.

6. Create a pull request to the main repository.

## License

 Hooksmith is licensed under the [Apache License 2.0](LICENSE).

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/IrfanKhan66/hooksmith/issues). We will try our best to resolve your issue.

