FROM python:3.10

WORKDIR /app

# install requirements
COPY requirements.txt ./
# hadolint ignore=DL3013
RUN pip install --upgrade --no-cache-dir pip && \
  pip install --no-cache-dir -r requirements.txt

# copy source code
COPY . .

# make entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# run entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]

# run app when the container launches, this can be overriden
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
