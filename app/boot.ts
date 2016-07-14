///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { provide } from "@angular/core";

import { AppComponent } from "./app.component";

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
