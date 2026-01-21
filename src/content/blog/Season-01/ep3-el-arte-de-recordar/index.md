---
title: "T1 Ep.3: El Arte de Recordar (Variables y Tipos)"
summary: "Tu código tiene amnesia hasta que le enseñas a recordar. Descubre cómo domar la memoria RAM usando Variables, Tipos de Datos y cajas de zapatos virtuales."
description: "La memoria RAM es un océano caótico. Aprende a domarlo usando Variables y Tipos de Datos para que tu programa deje de tener amnesia."
date: "Jan 21 2026"
draft: false
tags:
- Roadmap
- Fundamentos
- CSharp
- Variables
---

En el episodio anterior vimos cómo el **Compilador** traduce nuestras ideas. Pero tenemos un problema: hasta ahora, nuestros programas son efímeros. Saludan y se apagan. No "recuerdan" nada.

Imagina un videojuego que olvida tu puntuación cada vez que parpadeas, o un banco que olvida tu saldo apenas depositas dinero. Inútil, ¿verdad?

Para crear software real, necesitamos capturar información, guardarla en ese inmenso almacén llamado **Memoria RAM** y recuperarla después. Hoy aprenderemos a crear los contenedores de la realidad: las **Variables**.

## La Bodega de Utilería

Volvamos a nuestro set de filmación.
Si la RAM es el escenario, las **Variables** son las **Cajas de Utilería**.

Imagina que eres el jefe de utilería. El director te grita: *"¡Necesito guardar la pistola del protagonista para la próxima escena!"*. Tú no la tiras al suelo (se perdería en el caos). Haces dos cosas fundamentales:

1.  Buscas una **Caja** del tamaño adecuado (No guardarías una pistola en una caja de piano, ni un piano en una caja de zapatos).
2.  Le pones una **Etiqueta** con un nombre único para encontrarla luego (ej: "ArmaHeroe").

En C#, este proceso es idéntico. C# es un lenguaje de **Tipado Estático** (Strongly Typed). Esto significa que es muy estricto con el tamaño y el tipo de las cajas. Si etiquetas una caja para guardar "Zapatos" (<codeStyle>int</codeStyle>), el sistema **jamás** te dejará guardar "Sopa" (<codeStyle>string</codeStyle>) dentro. Esa seguridad evita miles de errores en el futuro.

## Anatomía de una Variable

Para crear una memoria en C#, usamos esta fórmula gramatical:

`TipoDeDato + Nombre + Valor;`

1.  **Tipo de Dato (La Caja):** ¿Qué vamos a guardar? ¿Números? ¿Texto? Esto define cuánto espacio de RAM reservamos.
2.  **Nombre (La Etiqueta):** Cómo lo llamaremos para pedirlo de vuelta.
3.  **Valor (El Objeto):** Lo que va dentro de la caja.

### Los 4 Fantásticos (Tipos Primitivos)

Aunque .NET tiene cientos de tipos, el 90% del tiempo usarás estos cuatro bloques fundamentales:

| Tipo C# | Lo que guarda | Ejemplo en la vida real | Tamaño en memoria |
| :--- | :--- | :--- | :--- |
| <codeStyle>int</codeStyle> | Números enteros (sin decimales) | Edad, Puntuación, Nivel | 32 bits |
| <codeStyle>string</codeStyle> | Texto (Cadenas de caracteres) | Nombre, Mensaje, Email | Variable (gasta más) |
| <codeStyle>bool</codeStyle> | Lógica (Verdadero o Falso) | ¿Está vivo? ¿Es Admin? | 8 bits (aprox) |
| <codeStyle>decimal</codeStyle> | Dinero (Alta precisión) | Precios, Salarios | 128 bits |

## Manos a la Obra: Escribiendo el Guion

Vamos a declarar nuestras primeras variables en el archivo <codeStyle>Program.cs</codeStyle>. Observa cómo el compilador nos protege de cometer errores lógicos.

```csharp
// Program.cs

// 1. Declaración explícita: Le decimos al Director exactamente qué caja queremos.
string nombreHeroe = "Neo"; // Caja de texto
int edad = 30;              // Caja de número entero
bool estaEnLaMatrix = true; // Caja de sí/no

// 2. El error de "La Sopa en la Caja de Zapatos":
// Si intentas esto, verás una línea roja antes de ejecutar:
// int vidas = "Tres"; 
// ¡Error! No puedes meter texto ("Tres") en una caja numérica (int).

// 3. Inferencia de Tipos (La magia de 'var'):
// A veces, el Director es listo. Si le das el objeto, él adivina la caja.
// Esto es C# moderno y limpio.
var villano = "Agente Smith"; // El compilador deduce que es string.
var nivelDePeligro = 9000;    // El compilador deduce que es int.

// 4. Usando las variables para contar la historia
Console.WriteLine("Informe de la Misión:");
// Usamos el signo $ para inyectar variables en el texto (Interpolación)
Console.WriteLine($"Sujeto: {nombreHeroe}");
Console.WriteLine($"Nivel de Peligro: {nivelDePeligro}");

// ¿Qué pasa si cambiamos el valor? La caja es la misma, el contenido cambia.
nivelDePeligro = 9999; 
Console.WriteLine($"¡Alerta! El nivel subió a: {nivelDePeligro}");

```

### ¿Por qué usar `decimal` y no `double`?

Verás por ahí el tipo <codeStyle>double</codeStyle> o <codeStyle>float</codeStyle>. Son buenos para cálculos científicos (física, geometría), pero malos para el dinero porque pierden precisión al redondear.

* **Regla de Oro:** Si cuentas dinero, usa siempre <codeStyle>decimal</codeStyle>.
* **Regla de Plata:** Si cuentas personas o cosas enteras, usa <codeStyle>int</codeStyle>.

## El Concepto de "Asignación Destructiva"

Es vital entender que una variable simple solo puede contener **una cosa a la vez**.

Si tienes la variable <codeStyle>edad</codeStyle> con el valor `30` y ejecutas `edad = 31;`, el `30` se destruye para siempre. Se sobrescribe en la memoria física. La variable no guarda la historia de sus cambios, solo el presente absoluto.

---

Ahora tenemos datos. Tenemos nombres, edades y estados. Pero nuestro guion sigue siendo una línea recta.
¿Qué pasa si queremos que el héroe tome una decisión? ¿Si queremos que el código haga una cosa *si* la salud es baja, y otra *si* está alta?

Necesitamos bifurcar la realidad. Necesitamos lógica.

**Próximo Capítulo -> T1 Ep.4: Los Caminos del Destino (Control de Flujo).**