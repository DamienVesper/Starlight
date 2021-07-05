import { extend, override } from 'flarum/common/extend';

declare const app: any;

app.initializers.add('our-extension', (app: any) => {
    // Your Extension Code Here
    console.log("EXTENSION NAME is working!");
});