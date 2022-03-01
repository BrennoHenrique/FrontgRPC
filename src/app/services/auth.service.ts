import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUserModel, AuthUserRequest } from '../protos/Auth_pb';
import { AuthProtoServiceClient } from '../protos/Auth_pb_service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly gRpcAuthClient: AuthProtoServiceClient;

    constructor() {
        this.gRpcAuthClient = new AuthProtoServiceClient(environment.gRPCUrl);
    }

    authUser(request: AuthUserRequest) {
        return from(
            new Promise((resolve: (value?: AuthUserModel.AsObject) => void, reject) => {
                this.gRpcAuthClient.authUser(request, (error, response: AuthUserModel | null) => {
                    if (!!error) {
                        reject(error);
                    } else {
                        resolve(response?.toObject());
                    }
                });
            })
        );
    }

}