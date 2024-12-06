#!/bin/bash

if [ -z "$DEPLOY_ENV" ]; then
  echo "Error: Please set the 'DEPLOY_ENV' environment variable."
  exit 1
fi


if [ -z "$OP_SERVICE_ACCOUNT_TOKEN" ]; then
  echo "Error: Please set the 'OP_SERVICE_ACCOUNT_TOKEN' environment variable."
  exit 1
fi

shopt -s expand_aliases

set -x

alias op="docker run --rm -e OP_SERVICE_ACCOUNT_TOKEN 1password/op:2 op"

export OP_SERVICE_ACCOUNT_TOKEN=$OP_SERVICE_ACCOUNT_TOKEN

# Define environment variables
export DNS_NAME_APP=${DNS_NAME_APP}
export DNS_NAME_SERVER=${DNS_NAME_SERVER}

# Build and start the Docker containers
docker compose down
docker compose build
docker compose up -d