---
title: "T2 Ep.2: El Candado de la Cabina" 
summary: "Los 4 Pilares de la POO (Parte 1): Encapsulamiento. Cómo proteger el estado de tus objetos y exponer solo lo necesario"
description: "Aprendé a usar modificadores de acceso y propiedades para que nadie rompa la lógica interna de tu código."
date: "Feb 11 2026"
draft: false
tags:
- Roadmap
- POO
- CSharp
- CleanCode
---

Imaginate que un pasajero sube al 34 y, como le gusta la mecánica, decide que el colectivo debería ir en tercera en vez de cuarta. Si el motor estuviera expuesto, el tipo mete mano y funde todo. Por eso existe la cabina y el capot: para **encapsular** la complejidad y proteger lo que es crítico.

En la programación, el **Encapsulamiento** es ese blindaje. No queremos que otros programadores (o nosotros mismos un lunes a la mañana sin café) cambien valores internos de un objeto que podrían dejarlo en un estado inconsistente.

## Ocultar para Simplificar
El encapsulamiento cumple dos funciones vitales:

1. **Protección:** Nadie puede poner el kilometraje en -500 o la velocidad en 4000 km/h.

2. **Abstracción:** El usuario del objeto solo ve un botón de "Arrancar". No necesita saber cómo funciona la inyección electrónica de combustible.

## El Bajo Nivel: Modificadores de Acceso
En .NET, el compilador usa metadatos para restringir quién puede "ver" cada dirección de memoria. Como explica Robert C. Martin, ocultar la implementación es la base de un sistema mantenible.

<codeStyle>private</codeStyle>: Solo el "chofer" (la propia clase) tiene acceso. Es el estándar por defecto para los campos.

<codeStyle>public</codeStyle>: Es la puerta abierta. Cualquiera puede usarlo.

<codeStyle>protected</codeStyle>: Solo para la familia (herencia), lo veremos en el próximo episodio.

<codeStyle>internal</codeStyle>: Solo para los que están en la misma terminal (el mismo proyecto/assembly).

## Implementación en C# Moderno: Propiedades
Ya no usamos métodos <codeStyle>GetVelocidad()</codeStyle> o <codeStyle>SetVelocidad()</codeStyle> como en Java. En C# usamos Propiedades, que son azúcar sintáctica sobre los métodos pero mucho más elegantes.


```csharp

public class Colectivo
{
    // Campo privado (El dato real, oculto)
    private double _nivelCombustible; 

    // Propiedad (El portero del dato)
    public double NivelCombustible 
    {
        get => _nivelCombustible;
        private set // Solo la clase puede cargar gasoil
        {
            if (value < 0) _nivelCombustible = 0;
            else if (value > 100) _nivelCombustible = 100;
            else _nivelCombustible = value;
        }
    }

    public void CargarNafta(double litros)
    {
        // El método se encarga de la lógica, la propiedad valida
        NivelCombustible += litros;
    }
}

```

## Reglas de Oro del Blindaje

| Regla | ¿Por qué? | 
| :--- | :--- | 
| **Campos siempre privados** | Evitás que toquen la "memoria" directamente. | 
| **Propiedades para exponer** | Te permite validar datos antes de guardarlos. |  
| **Menos es más** | Si no es estrictamente necesario que sea público, hacelo privado. | 

El encapsulamiento no es para "esconder secretos", es para que el que use tu clase no tenga que preocuparse por cómo funciona por dentro. Si le das mil perillas para tocar, lo más probable es que rompa algo.

Ya tenemos el bondi blindado y seguro. Pero, ¿qué pasa si queremos crear un "Trolebús"? Es casi igual a un colectivo, pero con cables de electricidad. ¿Tenemos que escribir todo el código de nuevo? En el próximo episodio, **T2 Ep.3: Los 4 Pilares (Herencia)**, vamos a ver cómo los hijos heredan la facha de los padres.