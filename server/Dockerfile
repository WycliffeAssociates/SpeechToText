### Init
FROM python:3.11-slim AS builder

WORKDIR /server
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY *.py .


EXPOSE 80

ENV PYTHONUNBUFFERED=1

# Run when the container launches
CMD ["python", "stt-server.py"]
