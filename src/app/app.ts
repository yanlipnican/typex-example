import { Server } from 'typex-new';

// Modules

import { CoreModule } from './core-module/core.module';

export class App extends Server{

    onInit() {


        this.module(CoreModule);

    }

    onStart() {

        console.log(`Listening on port "${this.getPort()}"`);

    }

}