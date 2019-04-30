import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
    // void => * - :enter
    transition(':enter', [
        style({
            width: '*',
            height: '*'
        }),
        group([
            animate(3000, style({
                width: '200px',
                height: '200px'
            })),
            // animate(6000, style({
            //     backgroundColor: 'blue'
            // })),
            animate(6000, keyframes([
                style({backgroundColor: 'blue'}),
                style({backgroundColor: 'yellow'}),
                style({backgroundColor: 'pink'}),
                style({backgroundColor: 'green'}),
                style({backgroundColor: 'red'}),
                style({backgroundColor: 'black'}),
                style({backgroundColor: 'blue'}),
                style({backgroundColor: 'yellow'}),
                style({backgroundColor: 'pink'}),
                style({backgroundColor: 'green'}),
                style({backgroundColor: 'red'}),
                style({backgroundColor: 'black'})
            ])),
        ]),
        animate(1000)
    ]),
    // * => void - :leave
    transition(':leave', animate(500, style({
        opacity: 0
    })))
]);

export const changeWidthTrigger = trigger('changeWidth', [
    transition('*=> *', [
        animate(1000, style({
            height: '10px'
        })),
        animate(1000, style({
            height: '*'
        }))
    ])
]);
