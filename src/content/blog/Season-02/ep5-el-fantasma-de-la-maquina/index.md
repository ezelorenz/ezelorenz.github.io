---
title: "T2 Ep.5: El Fantasma en la Máquina"
summary: "Los 4 Pilares de la POO (Parte 4): Abstracción. Clases abstractas y la esencia de lo que no se puede tocar."
description: "Descubrí cómo definir moldes incompletos que sirven como base sagrada para otros objetos sin poder ser instanciados."
date: "May 04 2026"
draft: false
tags:
- Roadmap
- POO
- CSharp
- Arquitectura
---

En la oficina técnica de la terminal tienen un plano que se llama "Vehículo de Transporte". Este plano tiene cosas básicas: tiene que tener un sistema de frenado y una capacidad de pasajeros. Pero si vos vas a la fábrica y decís "armame un Vehículo de Transporte", el operario te va a mirar raro. "¿Qué querés? ¿Un bondi, un taxi, un subte?".

Ese plano es una **Abstracción**. Existe para dar orden, pero no puede materializarse por sí solo. En C#, esto lo logramos con las **Clases Abstractas**.

## "La Idea sin la Materia"

La abstracción es el proceso de ocultar los detalles de implementación y mostrar solo la funcionalidad. Una clase marcada como abstract es un contrato que dice: "Cualquiera que quiera ser un Vehículo, tiene que saber frenar, pero yo no le voy a decir cómo; que cada uno se arregle".

Diferencia clave con la Herencia común:

- **Clase Común:** Se puede instanciar (<codeStyle>new Colectivo()</codeStyle>).

- **Clase Abstracta:** NO se puede instanciar (<codeStyle>new Vehiculo()</codeStyle> da error de compilación). Solo sirve para ser heredada.

## Métodos Abstractos vs Virtuales

¿Por qué no usar simplemente un método virtual?
Como explica Robert C. Martin en Agile Principles, la abstracción pura nos obliga a cumplir el contrato.

- **Virtual**: Tiene una implementación por defecto. El hijo puede usarla o cambiarla.

- **Abstract**: NO tiene cuerpo. El hijo está **obligado** a escribir su propia implementación. Si no lo hace, el código no compila. El CPU ni siquiera sabe qué hacer con un método abstracto hasta que una clase concreta le da instrucciones reales.

Usamos la palabra clave abstract para definir nuestro "fantasma" de vehículo.

```csharp

// El Plano Fantasma (No se puede crear un 'new VehiculoBase')
public abstract class VehiculoBase(string patente)
{
    public string Patente { get; } = patente;

    // Método concreto: Todos los vehículos cargan combustible igual
    public void RegistrarIngreso() => Console.WriteLine($"Vehículo {Patente} ingresó a terminal.");

    // Método abstracto: Obligo a los hijos a definir CÓMO frenan
    public abstract void Frenar();
}

public class BondiUrbano(string patente) : VehiculoBase(patente)
{
    // El compilador me obliga a poner 'override' y darle un cuerpo
    public override void Frenar() => Console.WriteLine("Frenando con aire y chirrido.");
}

```

## Tabla de Identidad: ¿Qué herramienta usar?

| Característica | Clase Normal | Clase Abstracta |
| :--- | :--- | :--- |
| **Instanciable** | Sí (<codeStyle>new</codeStyle>) | No (Error de compilación) | 
| **Métodos con cuerpo** | Sí, todos. | Sí, puede tener algunos. | 
| **Métodos sin cuerpo** | No. | Sí (Marcados como <codeStyle>abstract</codeStyle>). | 
| **Propósito** | Un objeto real. | Un concepto o base común. | 

La abstracción es tu mejor amiga para evitar que otros programadores "hagan lío". Al hacer una clase abstracta, estás diciendo: "Che, esta idea está incompleta, no la uses sola porque le faltan piezas".


Ya dominamos los 4 pilares. Sos un arquitecto hecho y derecho. Pero hay un problema: en C#, una clase solo puede tener un padre (Herencia simple). ¿Qué pasa si nuestro bondi también tiene que comportarse como un "Medio de Cobro Electrónico" y como un "Dispositivo GPS"? Ahí es donde entran las **Interfaces**. En el próximo episodio, **T2 Ep.6: El Contrato Multitarea**, vamos a ver cómo firmar acuerdos sin heredar genes.