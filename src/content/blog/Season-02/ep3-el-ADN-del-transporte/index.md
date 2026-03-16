---
title: "T2 Ep.3: El ADN del Transporte"
summary: "Los 4 Pilares de la POO (Parte 2): Herencia. Cómo reutilizar lógica y crear jerarquías inteligentes sin repetir código."
description: "Aprendé a usar la herencia en C# para que tus clases derivadas adopten el comportamiento y el estado de una base común."
date: "Feb 13 2026"
draft: false
tags:
- Roadmap
- POO
- CSharp
- CleanCode
---

En la terminal tenemos colectivos comunes, pero también hay trolebuses (con antenas) y escolares (naranjas y con asientos fijos). Si te ponés a mirar, todos tienen volante, motor, ruedas y un chofer. Sería una pérdida de tiempo diseñar un plano de cero para cada uno cuando el 80% es lo mismo.

La **Herencia** nos permite definir una clase "Padre" (o Base) con lo genérico y luego crear clases "Hijas" (o Derivadas) que heredan ese ADN, pero le agregan su toque especial.

## El Concepto: "Es un..."

La regla de oro de la herencia es la relación **"Es un"**.

- Un Trolebús es un Colectivo.

- Un Escolar es un Colectivo.

Si la frase tiene sentido, podés usar herencia. Si no (ej: "Un Motor es un Colectivo"), entonces no va por ahí; eso es composición, y lo veremos más adelante.

## La Pila de Constructores
Cuando creás un objeto de una clase hija, el **CLR** hace un laburo doble. Primero tiene que "armar" la parte del padre y después la del hijo.

Como explica Bill Wagner en Effective C#, cuando hacés un new <codeStyle>Trolebus()</codeStyle>, se llama primero al constructor de la clase base (<codeStyle>base</codeStyle>) para asegurar que los cimientos estén firmes antes de ponerle las antenas eléctricas arriba. En memoria, el objeto hijo contiene físicamente todos los campos del padre.

## Implementación:
En C# usamos los dos puntos <codeStyle>:</codeStyle> para heredar. Vamos a ver cómo el Trolebús se aprovecha de lo que ya escribimos.

```csharp

// La Clase Base (El Padre)
public class Colectivo(string linea)
{
    public string Linea { get; } = linea;
    public virtual void Arrancar() => Console.WriteLine("Motor térmico arrancado.");
}

// La Clase Hija (El Trolebús)
public class Trolebus(string linea) : Colectivo(linea)
{
    public bool AntenasConectadas { get; private set; }

    public void ConectarAntenas() => AntenasConectadas = true;

    // Redefinimos el comportamiento (Polimorfismo básico)
    public override void Arrancar() 
    {
        if (AntenasConectadas) 
            Console.WriteLine("Motor eléctrico en marcha sin ruido.");
        else 
            Console.WriteLine("Error: Conectá las antenas al cableado.");
    }
}

```

## Modificadores para la "Familia"
Para que la herencia funcione bien, tenemos que conocer a estos tres jinetes:

| Palabra Clave | Función? | 
| :--- | :--- | 
| **virtual** | El padre da permiso para que el hijo cambie este método. | 
| **override** | El hijo dice: "Gracias, pero yo esto lo hago a mi manera". |  
| **protected** | Como un secreto familiar: el mundo no lo ve, pero mis hijos sí. | 

La herencia es una herramienta poderosa pero peligrosa. Si la usás mal, terminás con una jerarquía tan profunda que nadie entiende dónde empieza un bug. Aplicá la máxima: "Heredar es para especializar, no solo para ahorrar líneas".

Ya tenemos una familia de vehículos compartiendo ADN. Pero, ¿qué pasa si el inspector de la terminal quiere pedirle a cualquier vehículo que "Frene", sin importarle si es un bondi o un trole? En el próximo episodio, **T2 Ep.4: El Camaleón (Polimorfismo)**, vamos a ver cómo una misma orden puede ejecutarse de mil formas distintas.