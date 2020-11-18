# notifier

[![circleci build status](https://circleci.com/gh/alxshelepenok/notifier.svg?style=svg)](https://circleci.com/gh/alxshelepenok/notifier)
[![travisci build status](https://travis-ci.org/alxshelepenok/notifier.svg?branch=master)](https://travis-ci.org/alxshelepenok/notifier)
[![npm version](https://badge.fury.io/js/ts-notifier.svg)](https://badge.fury.io/js/ts-notifier)

Notifications library written in TypeScript with no dependencies.

## Installing

`yarn install ts-notifier`

## Usage

    import Notifier from 'ts-notifier';
    import '~ts-notifier/dist/notifier.min.css';

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
`yarn build`

Development:</br>
`yarn build-dev`

## License
The MIT license.

Copyright (c) 2016-2019 Alexander Shelepenok

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
