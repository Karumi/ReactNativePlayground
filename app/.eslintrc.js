module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all"],
    "plugins": [
        "react",
        "react-native"
    ],
    "env": {
        "react-native/react-native": true
    },
    "settings": {
        "react": {
          "version": "16.3.1"
        }
    },
    "rules": {
        "react/jsx-uses-vars": 2,
    }
};