How to add materail to angular refer https://material.angular.io/guide/getting-started
go to project location in vs code and in terminal ng add @angular/material


npm install @angular/flex-layout

create angular module for auth has login register component
ng g m name --routing
ng g s auth/authService



we display auth component on appComponent usign router-outlet
auth component has login and register component
on login component once request is sent a response with username, token expiration is recieved
auth service is used to handle login inside login we tap response and emit recived user using
subject this user is later subscribed in header to show logout and menubar

we have auth-guard to proect routing to authorized routes

current data
vendor.js             | vendor        |   4.30 MB |
styles.css, styles.js | styles        | 328.44 kB |
polyfills.js          | polyfills     | 314.81 kB |
main.js               | main          |  71.07 kB |
runtime.js            | runtime       |   6.51 kB |

                      | Initial Total |   5.00 MB

*verify data by moving profile to load lazyly generating above result and comparing 
*check if profileRoute sees in console
*add content to profileEdit and profileView 
