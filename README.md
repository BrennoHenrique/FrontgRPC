# FrontgRPC

## Extensions

zxh404.vscode-proto3

## Packages

É necessário instalar o pacote de Protocol Buffers
Link: https://github.com/protocolbuffers/protobuf/releases

Extraia os arquivos e adicione o executável as variáveis de ambiente da sua máquina.

Instale os seguintes pacotes no seu projeto:
@improbable-eng/grpc-web
google-protobuf
ts-protoc-gen

-D @types/google-protobuf

## Scripts

Adicione o script no arquivo package.json:
"compile": "protoc --plugin={DIR raiz}/node_modules/.bin/protoc-gen-ts.cmd --js_out=import_style=commonjs,binary:{DIR raiz} --ts_out=service=grpc-web:{DIR raiz} src/app/protos/{Arquivo proto que deseja gerar o client service}"
