---
title: "T1 Ep.6: La Caja de Herramientas" 
summary: "Dominando los Métodos en C#: Cómo encapsular lógica, evitar el código duplicado y aplicar el principio DRY."
description: "No te repitas: aprendé a empaquetar tu lógica en métodos, optimizar el uso del Stack y transformar tu código en una caja de herramientas profesional y mantenible."
date: "Feb 06 2026"
draft: false
tags:
- Roadmap
- Fundamentos
- CSharp
- CleanCode
---


Imaginate que cada vez que el chofer del 34 tiene que frenar, tuviera que bajarse del bondi, abrir el capot, tensar el cable del freno, volver a subir y apretar el pedal. Sería una locura, ¿no? Para eso existen los pedales: son interfaces que ejecutan una acción compleja de forma simple.

En programación, los **Métodos** son esos pedales. Son bloques de código con nombre que encapsulan una tarea específica. Si tenés que calcular un IVA o validar un CUIT en diez lugares distintos, no copiás y pegás el código; creás una herramienta y la metés en tu caja.

## El Chofer y sus Procedimientos
Un método es como un "procedimiento estándar" de la terminal. El chofer sabe que existe el procedimiento <codeStyle>CargarCombustible()</codeStyle>. No necesita saber cuántos litros entran por segundo o qué marca es la manguera; solo necesita "llamar" al procedimiento y esperar que termine.

**La Anatomía de una Herramienta**
Para que un método funcione, necesita tres cosas:

- **La Firma:** El nombre y qué tipo de datos devuelve (¿me devuelve el vuelto o solo lo guarda?).

- **Los Parámetros:** ¿Qué necesita para laburar? (ej: la plata para el combustible).

- **El Cuerpo:** Las instrucciones que hacen la magia.

## El Bajo Nivel: El Stack de Memoria
Acá es donde se separan los que pican código de los que entienden el sistema. Cuando llamás a un método, el **CLR** crea algo llamado **Stack Frame** (Marco de Pila).

Como explica Robert C. Martin en Clean Code, un método debería hacer una sola cosa y hacerla bien. A nivel físico, el CPU guarda la dirección donde estaba ("apunta el lugar") y salta a la dirección del método. Al terminar, usa la instrucción <codeStyle>RET</codeStyle> (Return) para volver exactamente donde se quedó. Si llamás a demasiados métodos dentro de otros sin que terminen, podés llenar la memoria y causar el famoso **StackOverflow**.

## Implementación en C# Moderno
Hoy usamos métodos más limpios, aprovechando las bondades de .NET 10 para que el código sea casi una charla de café.

1. **Métodos con Expresión de Cuerpo (Expression-bodied)**
Para tareas simples, no necesitamos llaves. Menos ruido visual, más claridad.

```csharp

// Un método que devuelve un booleano (la señal del chofer)
public bool EsHoraPico(int hora) => hora >= 17 && hora <= 19;

// Uso
if (EsHoraPico(18)) 
{
    Console.WriteLine("Paciencia, colega...");
}

```

2. **Parámetros Nombrados y Opcionales**
Ideal para cuando el método tiene muchas opciones pero no siempre las usás todas.

```csharp

public void RegistrarViaje(string linea, int internos = 1, bool esRefuerzo = false)
{
    Console.WriteLine($"Línea {linea}, Internos: {internos}, Refuerzo: {esRefuerzo}");
}

// Llamada clara y legible
RegistrarViaje("34", esRefuerzo: true);

```

### Reglas de Oro del Taller (Principio DRY)
**DRY** significa Don't Repeat Yourself (No te repitas). Si ves que escribiste el mismo <codeStyle>if</codeStyle> tres veces en distintas partes del código, cortá, pegá y armá un método.

| Característica | Buen Método | Mal Método |
| :--- | :--- | :--- |
| **Tamaño** | Corto (se ve en una pantalla). | Un papiro de 200 líneas. | 
| **Responsabilidad** | Hace una sola cosa. | Cocina, limpia y maneja el bondi. | 
| **Nombre** | Verbo claro <codeStyle>(CalcularVuelto)</codeStyle> | Nombre genérico  <codeStyle>(HacerCosas)</codeStyle>. | 


Ya tenemos nuestras herramientas organizadas. Pero hasta ahora, todos nuestros datos están sueltos. ¿Cómo hacemos para agrupar el motor, las ruedas y el volante en un solo objeto llamado "Colectivo"? En la próxima temporada, entramos en el corazón de C#: **Temporada 2 - El Despertar de los Objetos (POO).**