import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import { apiRoutes } from 'routes/apiRoutes';

/**
 * The app.
 *
 * @class App
 */
export class App {

    public app: express.Application;

    /**
     * Constructor.
     *
     * @class App
     * @constructor
     */
    constructor() {
        // create expressjs application
        this.app = express();

        // configure application
        this.config();

        // add routes
        this.routes();
    }

    /**
     * Configure application
     *
     * @class App
     * @method config
     */
    public config() {
        // add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));

        // mount json form parser
        this.app.use(bodyParser.json());

        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
    }

    /**
     * Create and return Router.
     *
     * @class App
     * @method routes
     * @return void
     */
    private routes() {
        this.app.use('/api/', apiRoutes);
    }
}
