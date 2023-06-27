# madara-kit

Madara Kit is a simple app to interact with Starknet Appchains.

It's built using [Dioxus](https://dioxuslabs.com/), a framework written in Rust, inspired by React.

We can use this [dioxus-tailwindcss template project](https://github.com/LyonSyonII/dioxus-tailwindcss) as a starting point, taking the CI workflows and some of the code.

## Run

```bash
cargo run
```

## Style

Start the TailwindCSS watcher to generate the output CSS file:

```bash
npx tailwindcss -i ./input.css -o ./public/tailwind.css --watch
```

## Publish

### Desktop

```bash
cargo bundle --release
```

Once you've ran cargo-bundle --release, your app should be accessible in: `target/release/bundle/<platform>/`.

### Web

```bash
trunk build --release
```
