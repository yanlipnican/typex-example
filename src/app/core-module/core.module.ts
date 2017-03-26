import { Module, Controller } from 'typex-new';
import { HumanController } from './controllers/HumanController';

export class CoreModule extends Module{
    
    onInit() {
        
        this.controller(HumanController);

    }

}