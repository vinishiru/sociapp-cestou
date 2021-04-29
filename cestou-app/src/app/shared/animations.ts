import { animate, animateChild, group, query, style, transition, trigger, useAnimation } from "@angular/animations";
import { bounce, fadeInLeft, fadeInRight, fadeInUp, fadeOutLeft, fadeOutRight, fadeOutUp } from "ng-animate";

export const defaultRouteAnimation = [
    trigger('routeAnimation', [
        transition('void => *', useAnimation(fadeInRight, {
            params: { timing: 0.2, a: "15%" }
        })),
        transition('* => void', useAnimation(fadeOutLeft, {
            params: { timing: 0.2, a: "15%" }
        }))
    ])
];

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> AboutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);