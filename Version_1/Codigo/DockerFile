FROM python:3.10-slim

WORKDIR /app/backend

COPY requirements.txt /app/backend/

RUN pip install --no-cache-dir -r /app/backend/requirements.txt

COPY backend /app/backend

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
