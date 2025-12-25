# **Sistema de gestion de Stock Offline-First**
## **Descripcion general**
Este proyecto consiste en el desarrollo de un **sistema de gestion de stock** que funcione **principalmente en modo offline**, utilizando tecnologias web estandar (HTML, CSS y JavaScript Vanilla).
El objetivo es **poner a prueba conociemientos avanzados de Javascript**, arquitectura frontend, persistencia local y maneja de estado sin frameworks.

----------

## **Objetivos del proyecto**
- Crear una aplicacion usable **sin conexion a internet**
- Persistir datos localmente
- Gestionar productos y stock
- Aplicar logica de negocio real
- Mantener una arquitectura limpia y escalable
- Demostrar dominio profundo de JavaScript Vanilla

------------

## **Alcance del sistema**
El sistema permitira:
- Registrar productos
- Modificar stock
- Detectar faltantes
- Visualizar movimientos
- Trabajar sin conexion
- Mantener los datos al recargar la pagina

--------------

## **Tecnologias utilizadas**
- HTML5
- CSS3
- JavaScript Vanilla (ES6+)
- IndexedDB (Persistencia local)
- LocalStorage (Configuracion)
- Service Worker (Opcional / PWA)

-----------------

## **Requerimientos Funcionales**

**RF-01 Gestion de productos**
El sistema debe permitir:
- Crear productos
- Editar productos
- Eliminar productos
- Visualizar listado de productos
Cada producto debe contener:
- ID unico
- Nombre
- Categoria
- Stock actual
- Stock minimo
- Unidad de medida
- Fecha de creacion

------------

**RF-02 Control de Stock**
El sistema debe permitir
- Aumentar stock
- Disminuir stock
- Registrar movimientos de stock
Cada movimiento debe guardar:
- Producto asociado
- Tipo (Entrada/salida)
- Cantidad
- Fecha
- Motivo

----------

**RF-03 Alertas por bajo stock**
El sistema debe:
- Detectar cuando el stock <=stock minimo
- Mostrar alerta visual
- Marcar productos criticos

------------

**RF-04 Persistencia Offline**
El sistema debe:
- Guardar todos los datos localmente
- Mantener la informacion al recargar la pagina
- Funcionar sin conexion a internet

------------

**RF-05 Historia de movimientos**
El sistema debe:
- Mostrar historial de entradas y salidas
- Permitir filtrar por producto
- Permitir filtrar por fecha

-------------

**RF-06 Configuracion del sistema**
El sistema debe permitir:
- Definir unidades de medida
- Activar/desactivar alertas
- Limpiar base de datos local

--------------

## **Requerimientos no funcionales**
**RNF-01 Performance**
- Las operaciones deben ejecutarse de forma inmediata
- El sistema debe manejar al menos 1.0000 productos sin degradacion visible

---------------

**RNF-02 Usabilidad**
- Interfaz clara y simple
- Feedback visual en cada accion
- Mensajes de error comprensibles

----------------

**RNF-03 Mantenibilidad**
- Codigo modular
- Separacion clara entre logica y UI
- Funciones pequeñas y reutilizables

-----------------

**RNF-04 Compatibilidad**
- Compatible con navegatores modernos
- Compatible con escritorio y dispositivos mobiles

-----------------

## **Arquitectura del sistema**

/stock-offline
│
├── index.html
├── style.css
├── main.js
│
├── core/
│   ├── db.js            // IndexedDB
│   ├── stock.js         // Lógica de stock
│   ├── products.js      // CRUD productos
│   └── movements.js     // Historial
│
├── ui/
│   ├── render.js
│   ├── forms.js
│   └── alerts.js
│
└── utils/
    ├── validators.js
    ├── formatters.js
    └── constants.js

---------------------

## **Casos de usos principales**

**CU-01 Agregar producto**
1. Usuario completa formulario
2. Sistema valida datos
3. Producto se guarde en IndexedDB
4. Se actualiza la vista

------------------------

**CU-02 Registrar salida de stock**
1. Usuario selecciona producto
2. Ingresa cantidad
3. Sistema valida stock disponible
4. Se guarda movimiento
5. Se actualiza stock

------------------------

**CU-03 Alerta de bajo stock**
1. Stock <= minimo
2. Sistema marca producto
3. Se muestra alerta visual

------------------------

## **Evoluciones futuras**
- Sincronizacion con servidor
- Usuarios y roles
- Exportacion CSV / PDF
- Escaneo de codigos de barra
- Multi-sucursal