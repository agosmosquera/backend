import {fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (savedPassword ,password) => bcrypt.compareSync(savedPassword, password);

export default __dirname;