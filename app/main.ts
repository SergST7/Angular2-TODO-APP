/**
 * Created by SergST on 08.03.2017.
 */

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
