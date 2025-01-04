# Base Image: Python 3.11 for development
FROM python:3.11-bullseye

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory once at the beginning
WORKDIR  /usr/src/app

# Install system dependencies
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    libpq-dev build-essential \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy and install requirements.txt (with caching)
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy application files
COPY . .

# Expose port 8000
EXPOSE 8000

# Make entrypoint executable
RUN chmod +x /entrypoint.sh
# Set the entrypoint script to be executed
ENTRYPOINT ["/entrypoint.sh"]