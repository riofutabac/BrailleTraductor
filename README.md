# Traductor Braille

Este proyecto es un traductor de Braille que permite convertir texto a Braille y viceversa. Además, incluye funcionalidades para escanear texto Braille desde una imagen y exportar las traducciones a PDF.

## Funcionalidades

- Traducción de texto a Braille.
- Traducción de Braille a texto.
- Exportación de traducciones a PDF.

## Tecnologías Utilizadas

- React
- Python

## Instalación y Uso

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
