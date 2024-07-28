#!/bin/sh

docker build --platform linux/amd64 -t conti-tour .
docker tag conti-tour:latest trevodorax/conti-tour:latest
docker push trevodorax/conti-tour:latest
