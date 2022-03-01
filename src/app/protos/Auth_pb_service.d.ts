// package: 
// file: src/app/protos/Auth.proto

import * as src_app_protos_Auth_pb from "../../../src/app/protos/Auth_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthProtoServiceAuthUser = {
  readonly methodName: string;
  readonly service: typeof AuthProtoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_Auth_pb.AuthUserRequest;
  readonly responseType: typeof src_app_protos_Auth_pb.AuthUserModel;
};

export class AuthProtoService {
  static readonly serviceName: string;
  static readonly AuthUser: AuthProtoServiceAuthUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthProtoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authUser(
    requestMessage: src_app_protos_Auth_pb.AuthUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_Auth_pb.AuthUserModel|null) => void
  ): UnaryResponse;
  authUser(
    requestMessage: src_app_protos_Auth_pb.AuthUserRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_Auth_pb.AuthUserModel|null) => void
  ): UnaryResponse;
}

