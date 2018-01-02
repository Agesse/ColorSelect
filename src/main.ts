import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AgesseModule } from "./app/agesse.module";

platformBrowserDynamic().bootstrapModule(AgesseModule)
  .catch(err => console.log(err));
