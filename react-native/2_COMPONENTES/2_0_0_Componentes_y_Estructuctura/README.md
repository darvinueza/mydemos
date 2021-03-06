# 2.1 Componentes y Estructuctura de Archivos

El presente documento pretende ser una guía para entender la estructura de archivos y sus componentes en ReactNative.

## COMPONENTES

**Documentación:** https://reactnative.dev/docs/components-and-apis

React Native define sus componentes en los siguientes grupos:

- **Componentes Básicos:** https://reactnative.dev/docs/components-and-apis#basic-components
- **Interfaz de usuario:** https://reactnative.dev/docs/components-and-apis#user-interface
- **Listas:** https://reactnative.dev/docs/components-and-apis#list-views
- **Componentes de iOS:** https://reactnative.dev/docs/components-and-apis#ios-components-and-apis
- **Componentes de Android:** https://reactnative.dev/docs/components-and-apis#android-components-and-apis
- **Otros:** https://reactnative.dev/docs/components-and-apis#others

## ESTRUCTURTA

**Documentación:** https://es.reactjs.org/docs/faq-structure.html

### ¿Hay una forma recomendada de estructurar los proyectos React?

React no tiene opiniones sobre cómo poner los archivos en carpetas. Dicho esto, hay algunos enfoques comunes que son populares en el ecosistema que podrías considerar.

### Agrupación por funcionalidades o rutas

Una forma común de estructurar proyectos es ubicar CSS, JS y tests juntos dentro de carpetas agrupadas por funcionalidad o ruta.

![ByFunctionality](resources/ByFunctionality.png)

### Agrupando por tipo de archivo

Otra forma popular de estructurar proyectos es agrupar archivos similares, por ejemplo:

![ByFileType](resources/ByFileType.png)

Algunas personas también prefieren ir más lejos y separar los componentes en diferentes carpetas dependiendo de su función en la aplicación. Por ejemplo, [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) es una metodología de diseño basada en este principio.
