import { trigger, transition, style, animate, state } from '@angular/animations'

export let animationObj = [
  trigger('animatecomponent', [
    transition('void => FadeFromRight', [
      style({
        marginRight: -30,
        opacity: 0
      }),
      animate(300)
    ]),
    transition('void => FadeFromLeft', [
      style({
        marginLeft: -30,
        opacity: 0
      }),
      animate(300)
    ])
  ])
]