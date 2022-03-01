// package: 
// file: src/app/protos/Auth.proto

var src_app_protos_Auth_pb = require("../../../src/app/protos/Auth_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthProtoService = (function () {
  function AuthProtoService() {}
  AuthProtoService.serviceName = "AuthProtoService";
  return AuthProtoService;
}());

AuthProtoService.AuthUser = {
  methodName: "AuthUser",
  service: AuthProtoService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_Auth_pb.AuthUserRequest,
  responseType: src_app_protos_Auth_pb.AuthUserModel
};

exports.AuthProtoService = AuthProtoService;

function AuthProtoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthProtoServiceClient.prototype.authUser = function authUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthProtoService.AuthUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AuthProtoServiceClient = AuthProtoServiceClient;

