import { setDefaultTimeout, setWorldConstructor } from 'cucumber';
import * as cap from 'chai-as-promised'
import * as chaiExpect from 'chai'

function World(this: any, {attach, parameters} : any) {
    setDefaultTimeout(60 * 10000);
    chaiExpect.use(cap)
    this.expect = chaiExpect.expect;
    this.attach = attach;
    this.parameters = parameters;
  }
  
setWorldConstructor(World);