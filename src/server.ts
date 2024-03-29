import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import TestDataRoute from '@routes/testData.route';
import PetsRoute from '@routes/pets.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new TestDataRoute(), new PetsRoute()]);

app.listen();
