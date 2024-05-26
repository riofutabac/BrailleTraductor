
# Traductor Braille

Este proyecto es un traductor de Braille que permite convertir texto a Braille y viceversa. Además, incluye funcionalidades para escanear texto Braille desde una imagen y exportar las traducciones a PDF.

## Funcionalidades

- Traducción de texto a Braille.
- Traducción de Braille a texto.
- Exportación de traducciones a PDF.
- Carga y escaneo de archivos de imagen con texto Braille.

## Tecnologías Utilizadas

- React
- Python
- FastAPI

## Instalación y Uso

### Clonar el Repositorio

```
git clone https://github.com/tu-usuario/braille-translator.git
cd braille-translator
```

### Ejecutar la Aplicación Frontend con Docker

1. Accede a la carpeta de la Aplicación:
   ```
   cd frontend
   cd my-app
   ```

2. Construye la imagen de Docker:
   ```
   docker build -t tu-usuario/my-app .
   ```

3. Ejecuta la imagen de Docker:
   ```
   docker run -d -p 3000:3000 tu-usuario/my-app
   ```

### Ejecutar la Aplicación Backend

1. Crea un entorno virtual de Python:
   ```
   python3 -m venv env
   source env/bin/activate
   ```

2. Instala las dependencias:
   ```
   pip install -r requirements.txt
   ```

3. Inicia el servidor FastAPI:
   ```
   uvicorn app.main:app --reload
   ```

El servidor FastAPI estará disponible en `http://localhost:8000`.

## Estructura del Proyecto

### Frontend

La aplicación frontend está construida con React y se encuentra en la carpeta `frontend/my-app`. Los principales componentes son:

- `Traductor.js`: Contiene la lógica principal para la traducción de texto y la exportación a PDF.
- `Option.js`: Componente que muestra las opciones de traducción de texto o carga de archivo.
- `NavBar.js`: Barra de navegación con el logotipo y el botón de modo oscuro.
- `Footer.js`: Pie de página con información de derechos de autor.

### Backend

El backend está construido con FastAPI y se encuentra en la carpeta `backend`. Los principales archivos son:

- `main.py`: Punto de entrada principal de la aplicación FastAPI.
- `routes.py`: Define las rutas de la API para la traducción de texto y la generación de PDF.
- `services/translator.py`: Contiene las funciones para la traducción de texto a Braille y viceversa.
- `services/pdf_generator.py`: Contiene las funciones para generar imágenes a partir de texto Braille y convertirlas a PDF.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama con un nombre descriptivo para tu característica o corrección de errores.
3. Realiza tus cambios y realiza commits descriptivos.
4. Envía una solicitud de extracción (pull request) al repositorio principal.