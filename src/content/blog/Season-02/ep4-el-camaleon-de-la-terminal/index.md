---
title: "T2 Ep.4: El Camaleón de la Terminal"
summary: "Los 4 Pilares de la POO (Parte 3): Polimorfismo. Cómo una misma orden puede ejecutarse de mil formas distintas."
description: "Aprendé a usar el polimorfismo para escribir código flexible que trate a diferentes objetos bajo una misma interfaz."
date: "Mar 30 2026"
draft: false
tags:
- Roadmap
- POO
- CSharp
- CleanCode
---

Imaginate que sos el Inspector de la terminal. Tenés una planilla y tu única orden para todos los vehículos que salen es: **"¡Frenar!"**. A vos no te importa si el que viene es un colectivo diésel, un trolebús eléctrico o un escolar viejo. Vos das la orden y esperás que el vehículo se detenga.

El **Polimorfismo** (del griego "muchas formas") es exactamente eso: la capacidad de un objeto de responder a un mismo mensaje de manera diferente según su tipo.

## "Muchos Comportamientos, una Orden"
En C#, el polimorfismo nos permite tratar a un grupo de objetos diferentes (Trolebús, Escolar, Común) como si fueran todos del mismo tipo base (**Colectivo**).

Esto es oro puro para la arquitectura porque podés tener una lista de "Vehículos" y hacer que todos frenen sin tener que preguntarles uno por uno: "Che, ¿vos sos un Trolebús o un Escolar?".

## La V-Table (Virtual Table)
¿Cómo sabe el **CLR** qué método ejecutar en tiempo de ejecución? No es magia, es una tabla de punteros llamada <codeStyle>V-Table</codeStyle>.

Cuando marcás un método como <codeStyle>virtual</codeStyle>, el compilador no "ancla" la llamada a una dirección de memoria fija. En su lugar, crea una tabla donde cada objeto guarda la dirección de su versión del método. Al ejecutar, el procesador consulta la tabla del objeto real que tiene enfrente y salta a la implementación correcta. Esto se conoce como **Dynamic Binding** (Enlace Dinámico).

Vamos a ver cómo el Inspector le da órdenes a una flota mixta usando <codeStyle>List<T></codeStyle> y la palabra clave <codeStyle>override</codeStyle>.

```csharp

public class Colectivo 
{
    public virtual void Frenar() => Console.WriteLine("Frenando con aire comprimido...");
}

public class Trolebus : Colectivo 
{
    // El Trolebús frena usando motores eléctricos (freno regenerativo)
    public override void Frenar() => Console.WriteLine("Frenando con recuperación de energía eléctrica.");
}

public class Escolar : Colectivo 
{
    // El Escolar tiene frenos viejos, hace ruido
    public override void Frenar() => Console.WriteLine("Screeech! Frenando con pastillas gastadas.");
}

// --- En la Terminal ---
var flota = new List<Colectivo> { new Trolebus(), new Escolar(), new Colectivo() };

foreach (var unidad in flota)
{
    // Polimorfismo en acción: Una orden, tres resultados distintos
    unidad.Frenar(); 
}

```

## Beneficios del Polimorfismo


| Ventaja | Impacto en tu código | 
| :--- | :--- | 
| **Extensibilidad** | Podés agregar un "Bondi Volador" mañana y el Inspector ni se entera. | 
| **Desacoplamiento** | Tu lógica principal no depende de los detalles de cada vehículo. |  
| **Simplicidad** | Eliminás los <codeStyle>if/else</codeStyle> gigantes que preguntan por el tipo de objeto. | 

El polimorfismo es lo que permite que el software sea "suave" (soft). Si mañana cambia la forma de frenar de un vehículo, solo tocás esa clase, no tocás a quien da la orden. Eso es diseño de primer nivel.


Ya sabemos que podemos tratar a todos como "Colectivos". Pero, ¿y si queremos definir un vehículo tan genérico que ni siquiera debería poder existir por sí solo? ¿Qué es un "Vehículo" si no tiene ruedas ni motor definidos? En el próximo episodio, **T2 Ep.5: El Fantasma en la Máquina (Abstracción)**, vamos a conocer las clases que solo viven en los planos.