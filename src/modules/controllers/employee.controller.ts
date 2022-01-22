import {
  controller,
  httpGet,
  requestBody,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import {Employee_Interface} from "../symbols";
import {IEmployeeInterface} from "../interfaces";

@controller('/employee')
export class EmployeeController {

  constructor(@inject(Employee_Interface) private _eventService: IEmployeeInterface) { }

  @httpGet('/create')
  public postEvent(@requestBody() body: any) {
    return this._eventService.getEmloyee(body).toPromise().catch(reason => console.log(reason));
  }

}
