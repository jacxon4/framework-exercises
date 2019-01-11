import * as model from "../../rest-api/model";
import * as vm from "./viewModel";
import { loginRequest } from "../../rest-api/api/login";

export const mapLoginVmToModel = (login: vm.Login): model.Login => ({
  ...login
});
