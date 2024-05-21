# Traductor Braille

Este proyecto es un traductor de Braille que permite convertir texto a Braille y viceversa. Además, incluye funcionalidades para escanear texto Braille desde una imagen y exportar las traducciones a PDF.

## Funcionalidades

- Traducción de texto a Braille.
- Traducción de Braille a texto.
- Escaneo de texto Braille desde una imagen y su traducción.
- Exportación de traducciones a PDF.

## Tecnologías Utilizadas

- React
- Python

## Instalación y Uso

### Instalación de Docker

Para ejecutar la aplicación en un contenedor Docker, primero asegúrate de tener Docker instalado en tu sistema. Puedes encontrar instrucciones de instalación para tu sistema operativo en [Docker Documentation](https://docs.docker.com/get-docker/).

### Clonar el Repositorio

```
git clone https://github.com/tu-usuario/braille-translator.git
cd braille-translator
```

### Ejecutar la Aplicación Frontend con Docker
Accede a la carpeta de la Aplicación:
```
cd frontend
cd my-app
```
Construye la imagen de Docker:
```
docker build -t tu-usuario/my-app .
```
Ejecuta la imagen de Docker:
```
docker run -d -p 3000:3000 tu-usuario/my-app
```
