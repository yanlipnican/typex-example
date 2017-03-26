import { Request, Response } from 'express';
import { Controller, Get, HBS_helper, injectable, inject } from 'typex-new';

import { HumanService } from '../services/human.service';
import { Human } from '../models/Human';

@injectable
export class HumanController extends Controller {

    @inject
    private humanService: HumanService;

    @Get('/human')
    async index(req: Request, res: Response) {
        
        res.status(200).json({msg: 'hello'});

        let human = new Human();

        human.height = 184;
        human.weight = 100;
        human.name = 'janko lipnican';

        this.humanService.addHuman(human);

    }

    @Get('/get_human')
    async get(req: Request, res: Response) {

        let humans = await this.humanService.getHuman({});

        res.status(200).json({humans});

    }

}

