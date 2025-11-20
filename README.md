    # Tradux

    Tradux es una aplicación web de traducción breve diseñada para conversiones rápidas de texto usando un servicio de IA en la nube. Está pensada para frases y párrafos cortos y ofrece una interfaz sencilla para comprobar significados y traducciones.

    ## Cómo funciona

    - Traducciones generadas por un servicio de IA en la nube.
    - Pensado para usos rápidos (frases, párrafos cortos).
    - Interfaz ligera construida con React y Vite.

    ### Criterios y limitaciones de uso

    - **Requisito de conexión:** Tradux necesita conexión a Internet para funcionar; sin conexión no se pueden realizar traducciones.
    - **Límite diario:** Existe un límite de **6** traducciones por día para el uso general del servicio.
    - **Nota sobre calidad:** Las traducciones son generadas por IA; suelen ser útiles, pero siempre conviene revisarlas antes de usarlas en contextos críticos.

    ## Instalación (clonar y ejecutar)

    Para desarrollar o ejecutar Tradux localmente sigue estos pasos:

    1. Clona el repositorio:

    ```bash
    git clone https://github.com/christiancmd/TraduxProject.git
    cd TraduxProject
    ```

    2. Instala dependencias:

    ```bash
    npm install
    ```

    3. Obtén tu propia API key de un proveedor de servicios de IA (por ejemplo GoogleGenAI u otro similar). Tradux no incluye una API key por defecto; debes usar la tuya.

    4. Crea un archivo de entorno con tu clave. Por ejemplo, en la raíz del proyecto crea un archivo `.env` o `.env.local` con:

    ```env
    VITE_API_KEY=tu_api_key_aqui
    ```

    5. Ejecuta la app en modo desarrollo:

    ```bash
    npm run dev
    ```

    6. Abre `http://localhost:5173` (u otra URL que indique Vite) para ver la aplicación.

    ## Tecnologías usadas

    - React
    - TypeScript
    - Vite
    - Tailwind CSS (estilos utilitarios)
    - Node.js y npm
    - ESLint (configuración base)

    ## Notas para contribuir

    - Si vas a contribuir, revisa las reglas de lint y formatea con Prettier / ESLint antes de hacer commits.
    - Si vas a probar traducciones masivas, recuerda el límite diario de 6 traducciones.

    ## Seguridad y privacidad

    - La aplicación envía texto al servicio de IA que provee las traducciones; revisa la política de privacidad del proveedor que uses.


    ***
