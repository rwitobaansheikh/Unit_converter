# Unit Converter

A simple application that enables conversion of units between metric and imperial systems.

## Features

- Convert metric units to imperial
- Convert imperial units to metric
- Quantities of measurement involved are length, volume and mass.
- Units of measurement used are meters/feet, litres/gallons, kilograms/pounds respectively. 

## Deployment

The application is deployed on AWS using the following services:

- **AWS EC2**: Hosted on a t3 micro instance
- **AWS ECR**: Docker image repository for containerized application
- **Docker**: Container runtime for application deployment

### Domain & SSL

- **Domain**: [unitconverter.rapidpassgen.online](https://unitconverter.rapidpassgen.online)
- **Domain Provider**: IONOS
- **Web Server**: Nginx reverse proxy
- **SSL Certificate**: Certbot-managed certificate for HTTPS support

The application is accessible via secure HTTPS connection at the domain listed above.