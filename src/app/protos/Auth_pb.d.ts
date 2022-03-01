// package: 
// file: src/app/protos/Auth.proto

import * as jspb from "google-protobuf";

export class AuthUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUserRequest): AuthUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUserRequest;
  static deserializeBinaryFromReader(message: AuthUserRequest, reader: jspb.BinaryReader): AuthUserRequest;
}

export namespace AuthUserRequest {
  export type AsObject = {
    email: string,
  }
}

export class AuthUserModel extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUserModel.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUserModel): AuthUserModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthUserModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUserModel;
  static deserializeBinaryFromReader(message: AuthUserModel, reader: jspb.BinaryReader): AuthUserModel;
}

export namespace AuthUserModel {
  export type AsObject = {
    email: string,
    token: string,
  }
}

