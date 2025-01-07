# Expo Linking.addEventListener Inconsistent Deep Link Handling

This repository demonstrates a bug and its solution related to Expo's `Linking` API. The issue revolves around the `Linking.addEventListener` method not reliably firing when the app is already open and a subsequent deep link is tapped.

## Bug Description

The `Linking.addEventListener` method in Expo's `Linking` API, intended for handling deep links, shows inconsistencies. When the app is launched initially, it functions as expected. However, when the app is already open and a user taps on a deep link, the event listener does not always fire. This leads to the app failing to process the deep link correctly.

## Solution

A robust solution involves proactively checking for initial URLs whenever the app's state changes. By combining `useEffect` with a listener that checks `Linking.getInitialURL`, you can ensure that deep links are handled consistently, regardless of whether the app was already open or not.