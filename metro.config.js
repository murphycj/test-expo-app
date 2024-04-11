// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig, mergeConfig } = require('expo/metro-config');
// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');";
// const { createSentryMetroSerializer } = require('@sentry/react-native/dist/js/tools/sentryMetroSerializer');
const { getSentryExpoConfig } = require('@sentry/react-native/metro');


/** @type {import('expo/metro-config').MetroConfig} */
const config = getSentryExpoConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro.
    isCSSEnabled: true,
    // serializer: {
    //   customSerializer: createSentryMetroSerializer(),
    // },
});

config.resolver.sourceExts.push("mjs");

module.exports = config;
