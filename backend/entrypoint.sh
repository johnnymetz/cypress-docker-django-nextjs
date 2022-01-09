#!/bin/sh

# setup the database
python manage.py migrate

# run the docker CMD command
exec "$@"
