FROM python:3.10

WORKDIR /app

# install requirements
COPY requirements.txt ./
RUN pip install --upgrade --no-cache-dir pip && \
  pip install --no-cache-dir -r requirements.txt

# make port available to other containers
EXPOSE 8000

# copy source code
COPY . .

# make entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# run entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]

# run app when the container launches, this can be overriden
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
