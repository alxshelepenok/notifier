# Notifier

## Installing

NPM:</br>
`npm install typescript-notifier`

Bower:</br>
`bower install typescript-notifier`

## Live demo

ashk.io: [projects/notifier](http://ashk.io/projects/notifier/) 

## Downloads

[notifier.min.js](http://ashk.io/projects/notifier/dist/notifier.min.js) ~9 kB.
</br>
[notifier.js](http://ashk.io/projects/notifier/dist/notifier.js) ~20 kB.

## Usage

    import Notifier from 'typescript-notifier';

    const notifier = new Notifier({
        theme: 'default',
        position: 'top-right' 
    });
    
    notifier.post('Hello World', {
        type: 'error',
        delay: '6000',
        animationShowClass: 'notifier__item--animation-show',
        animationHideClass: 'notifier__item--animation-hide'
    });

## Building

Production:</br>
`npm run build`

Development:</br>
`npm run build-dev`

## License
The MIT license.

Copyright (c) 2016 Alexandr Shelepenok [ashk.io](http://ashk.io)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.