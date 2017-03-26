import { Database, injectable } from 'typex-new';
import { Human } from '../models/Human';

@injectable
export class HumanService{

    constructor(private db: Database) {
        
        this.initDb();

    }

    public async addHuman(human: Human) {
        
        return this.db.insert('Human', human);

    }

    public async getHuman(query: any) {

        return this.db.find('Human', query);

    }

    private async initDb() {

        let url = 'mongodb://vagrant.dev:27017/typex';

        if(!await this.db.isConnected()){

            this.db.connect(url);

        }

    }


}