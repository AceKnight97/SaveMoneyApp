// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   "rules": {
//     "react-native/no-inline-styles": 0,
//     "no-console": "warn",
//   },
//   "env": {
//     "commonjs": true,
//     "es6": true,
//     "node": true
//   },
//   "extends": "eslint:recommended",
//   "parserOptions": {
//     "ecmaVersion": 2018
//   },
// };
{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "react/jsx-props-no-spreading": "off",
    "global-require": 0 ,
    "react/prop-types": 0,
    "no-console": "off",
    "react/button-has-type": 0,
    "react/no-access-state-in-setstate": 0,
    "react/destructuring-assignment": 0,
    "react/sort-comp": 0,
    "no-eval": 1,
    "no-const-assign": "warn",
    "react/no-did-mount-set-state": 0,
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": [
      "warn",
      {
        "ignoreRestSiblings": true
      }
    ],
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "max-len": [
      "warn",
      {
        "code": 120
      }
    ],
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-implicit-globals": "off",
    "no-mixed-operators": "off",
    "no-shadow": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to"
        ]
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "react/prefer-stateless-function": "off",
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/webpack.*.js"
        ]
      }
    ]
  },
  "extends": "airbnb"
}
