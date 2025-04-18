Este archivo README proporciona instrucciones sobre cómo instalar y ejecutar la API (backend) y la aplicación frontend de este proyecto de DESARROLLO FULL STACK CON REACT Y NODE.JS

## Tabla de Contenidos

- [Requisitos previos]

DataBase -> DBeaver

- [Instalación y Ejecución de la API (Backend)]

Todo lo necesario para ejecutar la Api se encuentra en README.md en su carpeta correspondiente

Además de esto necesitaremos este .env corregido

```DB_NAME=api705

DB_USER=avnadmin

DB_PASSWORD=

DB_HOST=mysql-3c98620b-virtual-shoppingd-db.h.aivencloud.com

DB_PORT=28838

DB_SSL=true



JWT_SECRET=gfbj4u5gdfvd87v8d7vdfvdfvhb8tuvidfvb_isdvh834bv

PORT=3030

```

### Conexión a la Base de Datos con DBeaver

Esta sección explica cómo conectar la base de datos de la API utilizando la aplicación DBeaver.

1.  **Descarga e Instala DBeaver:**

Si aún no tienes DBeaver instalado, puedes descargarlo desde el sitio web oficial: [https://dbeaver.io/download/](https://dbeaver.io/download/) Sigue las instrucciones de instalación para tu sistema operativo.

2.  **Abre DBeaver:**

Una vez instalado, abre la aplicación DBeaver.

3.  **Crea una Nueva Conexión:**

En la ventana principal de DBeaver, haz clic en el icono "Nueva Conexión" (generalmente un enchufe con un signo más) o ve a `Archivo` -> `Nueva` -> `Conexión de Base de Datos`.

4.  **Selecciona el Tipo de Base de Datos:**

En la ventana "Nueva Conexión de Base de Datos", busca y selecciona el tipo de base de datos que estás utilizando (en este caso, parece ser **MySQL**). Haz clic en "Siguiente".

5.  **Introduce los Detalles de Conexión:**

En la ventana de configuración de la conexión, introduce los siguientes detalles utilizando la información de tus variables de entorno:

-   **Host:** `mysql-3c98620b-virtual-shoppingd-db.h.aivencloud.com` (valor de `DB_HOST`)

-   **Puerto:** `28838` (valor de `DB_PORT`)

-   **Nombre de usuario:** `avnadmin` (valor de `DB_USER`)

-   **Contraseña:**  (valor de `DB_PASSWORD`)

-   **Base de datos/Esquema:** `api705` (valor de `DB_NAME`)

6.  **Configuración SSL (Opcional pero Recomendado):**

Dado que `DB_SSL=true`, es importante configurar la conexión para usar SSL para una comunicación segura. Los pasos exactos pueden variar ligeramente según la versión de DBeaver, pero generalmente se encuentran en una pestaña como "SSL" o "Seguridad":

-   Busca la pestaña de configuración SSL en la ventana de conexión.

-   Activa la opción para usar SSL (puede llamarse "Usar SSL", "Habilitar SSL", etc.).

7.  **Prueba la Conexión:**

Antes de guardar la conexión, haz clic en el botón "Probar Conexión". Si todos los detalles son correctos y el servidor de la base de datos es accesible, deberías ver un mensaje de "Conexión exitosa".

8.  **Guarda la Conexión:**

Si la prueba de conexión es exitosa, haz clic en "Finalizar" o "Aceptar" para guardar la conexión en DBeaver. Puedes darle un nombre descriptivo a la conexión (por ejemplo, "API Database").

Ahora deberías poder explorar la base de datos `api705` en DBeaver utilizando la conexión que configuraste.

**Importante:**

- Asegúrate de que tu firewall permita la conexión saliente al host y puerto especificados.

- Si tienes problemas con la conexión SSL, revisa la documentación de Aiven para los requisitos específicos de conexión MySQL con SSL.

### Ejecuta la aplicación

npm run start

### ---------------------------------------------------------------------------------------------------------------

## ⚛️ Instalación y Ejecución del Frontend

Sigue estos pasos para configurar y ejecutar la aplicación frontend:

### 1. **Instalación de Dependencias del Frontend**

1.  Asegúrate de estar en el directorio raíz del frontend en tu terminal.

2.  Ejecuta el siguiente comando para instalar todas las dependencias necesarias listadas en el archivo `package.json`:

```bash

npm install

# o

yarn install

```

Este comando instalará `react`, `react-dom`, `react-router-dom`, `axios`, `react-bootstrap` y `bootstrap`.

### 3. **Configuración de la URL de la API**

1.  crea el .env en el frontend con lo siguiente

```

VITE_MAIN_PATH=http://localhost:3030

VITE_JWT_SECRET=gfbj4u5gdfvd87v8d7vdfvdfvhb8tuvidfvb_isdvh834bv

```

### 4. **Ejecución del Frontend**

1.  Asegúrate de estar en el directorio raíz del frontend en tu terminal.

2.  Ejecuta el siguiente comando para iniciar la aplicación frontend en modo de desarrollo:

```bash

npm run dev

```

3.  La aplicación frontend debería abrirse automáticamente en tu navegador web
