import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";


@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>Nicolas is here</h1>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    //{path: '/', component: MessagesComponent},
    //{path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {}
