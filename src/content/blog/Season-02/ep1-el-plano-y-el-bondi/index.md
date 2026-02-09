---
title: "T2 Ep.1: El Plano y el Bondi" 
summary: "Introducción a la POO: Diferencia entre Clases y Objetos. Cómo dejar de escribir funciones sueltas y empezar a diseñar sistemas."
description: "Aprendé a crear tus propios moldes de datos y comportamiento usando Clases y Objetos en C#." 
date: "Feb 09 2026" 
draft: false 
tags:
- Roadmap
- POO
- CSharp
- Arquitectura
---

Hasta ahora, en la Temporada 1, aprendimos a manejar el bondi: acelerar, frenar, decidir el camino y repetir el recorrido. Pero, ¿de dónde salió el bondi? No apareció de la nada. Alguien, en una oficina técnica, dibujó un plano detallado con las especificaciones del motor, la cantidad de asientos y el color de la carrocería.

En la **Programación Orientada a Objetos (POO)**, dejamos de pensar en "pasos a seguir" y empezamos a pensar en "moldes y piezas".

## El Plano vs. La Unidad
La confusión más común cuando arrancás con POO es no distinguir entre la **Clase** y el **Objeto**. Usando nuestra narrativa:

- **La Clase (El Plano):** Es el dibujo técnico del colectivo. No tiene motor real, no gasta gasoil y no lleva pasajeros. Es solo una definición de qué es un colectivo y qué puede hacer.

- **El Objeto (El Interno 34):** Es el colectivo físico que está en la calle. Es una "instancia" del plano. Ocupa un lugar en el espacio (la memoria RAM) y tiene su propio estado (cuánta nafta tiene, quién es el chofer).

## El Bajo Nivel: El Heap de Memoria
Acá es donde la cosa se pone técnica. En la temporada anterior vimos que las variables simples viven en el Stack. Pero los objetos son harina de otro costal.

Cuando usás la palabra clave <codeStyle>new</codeStyle>, el **CLR** le pide permiso al Sistema Operativo para reservar un bloque de memoria en el **Heap** (Montículo).

Como explica Anders Hejlsberg (el padre de C#), un objeto es una estructura compleja. En el Stack solo guardamos una referencia (un puntero o dirección) que dice: "Che, los datos del bondi están allá en la dirección 0xH123". Por eso, si perdés la referencia, el **Garbage Collector** vendrá a limpiar ese espacio porque pensará que ya nadie usa ese bondi.

## Implementación en C# Moderno
Vamos a definir nuestro primer molde. En C# 12/13, podemos usar **Primary Constructors** para que el código sea mucho más compacto.

```csharp

// Un método que devuelve un booleano (la señal del chofer)
// Definición de la Clase (El Plano)
public class Colectivo(string linea, int numeroInterno)
{
    // Propiedades (Estado)
    public string Linea { get; } = linea;
    public int NumeroInterno { get; } = numeroInterno;
    public double Kilometraje { get; private set; } = 0;

    // Métodos (Comportamiento)
    public void Recorrer(double km)
    {
        Kilometraje += km;
        Console.WriteLine($"El interno {NumeroInterno} sumó {km} km.");
    }
}

// --- En el programa principal ---

// Instanciación (Creamos los Objetos)
var bondiDeJuan = new Colectivo("34", 102);
var bondiDeMarta = new Colectivo("34", 15);

bondiDeJuan.Recorrer(15.5);

```

## Diferencias Clave

| Concepto | Clase | Objeto |
| :--- | :--- | :--- |
| **Ubicación** | Tiempo de compilación (Binario) | Tiempo de ejecución (RAM). | 
| **Cantidad** | Existe solo una definición | Podés crear miles de instancias. | 
| **Memoria** | No ocupa espacio de datos. | Vive en el **Heap**. | 

No abuses de las clases. Si algo se puede resolver con un simple  <codeStyle>int</codeStyle> o un <codeStyle>string</codeStyle>, no hace falta crear un objeto complejo. La **POO** es para organizar la complejidad, no para crearla.

Ya tenemos el plano y fabricamos nuestras primeras unidades. Pero, ¿qué pasa si queremos que los pasajeros no toquen el motor? ¿Cómo protegemos la integridad de nuestro bondi? En el próximo episodio, **T2 Ep.2: Los 4 Pilares (Encapsulamiento)**, vamos a ver cómo ponerle candado a lo que importa.

