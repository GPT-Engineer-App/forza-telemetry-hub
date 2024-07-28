# forza-telemetry-hub

Design and build a mobile app (iOS and Android) that retrieves and displays telemetry data from Forza Horizon 4 in real-time. The app should be able to connect to the Forza Horizon 4 game on a user's Xbox or PC, and display a variety of telemetry data, including:

* Current speed
* RPM
* Gear
* Braking percentage
* Acceleration (X, Y, and Z axes)
* Steering angle
* Throttle position
* Brake position
* Suspension travel
* Tire temperature
* Tire wear

The app should have the following features:

* A dashboard view that displays a selection of telemetry data in real-time, with customizable layouts and data points
* A graph view that displays historical data for each telemetry point over time (e.g. a line chart showing speed over the last minute)
* A settings menu that allows users to customize the app's appearance, including:
	+ Theme selection (light, dark, etc.)
	+ Units of measurement (mph/kph, F/C, etc.)
	+ Data refresh rate (e.g. 1Hz, 10Hz, etc.)
* A connect/disconnect button that allows users to establish or terminate a connection to the Forza Horizon 4 game
* A data logging feature that allows users to save telemetry data to a CSV file or other format for later analysis

The app should be able to connect to Forza Horizon 4 via [ specify the connection method, e.g. 'Xbox Live API', 'Forza Horizon 4's built-in UDP protocol', etc. ].

Please build the app using a suitable framework (e.g. React Native, Flutter, etc.) and programming language (e.g. JavaScript, Kotlin, etc.). Ensure that the app is stable, efficient, and performs well on a variety of devices.

Provide the app's source code, along with a detailed guide on how to setup and use the app, including any necessary configuration or authentication steps.

Assume that the user has the necessary hardware and software setup to connect their device to the Forza Horizon 4 game, and that they have granted the necessary permissions for the app to access the telemetry data.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/forza-telemetry-hub.git
cd forza-telemetry-hub
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
