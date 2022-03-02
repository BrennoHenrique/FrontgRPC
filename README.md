# FrontgRPC

## Extensions

zxh404.vscode-proto3

## Packages

É necessário instalar o pacote de Protocol Buffers
Link: https://github.com/protocolbuffers/protobuf/releases
Assets -> protoc-3.19.4-win64.zip

Extraia os arquivos e adicione o executável (bin -> protoc.exe) as variáveis de ambiente da sua máquina.

![image](https://user-images.githubusercontent.com/57415712/156374294-3e0dd496-ab09-4d33-b2e5-3ac4c369671d.png)

Instale os seguintes pacotes no seu projeto:
@improbable-eng/grpc-web
google-protobuf
ts-protoc-gen

-D @types/google-protobuf

## Scripts

Adicione o script no arquivo package.json:
"compile": "protoc --plugin={DIR raiz}/node_modules/.bin/protoc-gen-ts.cmd --js_out=import_style=commonjs,binary:{DIR raiz} --ts_out=service=grpc-web:{DIR raiz} src/app/protos/{Arquivo proto que deseja gerar o client service}"
