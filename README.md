
# DevTest para FullStack Developer en Conversión

## 1. Dar la vuelta a una cadena de texto

```
const reverseString = (str) => {
  const arr = str.split('')
  let result = ''
  for (let i = arr.length-1; i >= 0; i--) {
    result += arr[i];
  }
  return result
}
```

En el archivo reverseString.js en la raíz del proyecto se encuentra el código completo con algunos test de prueba.

## 2. Programación orientada a objetos

[![Screen Shot][screenshot1]](https://github.com/acvalencia/conversion)


## 3.  Encontrar los numeros de telefono en un directorio

Con el comando grep podemos buscar todos los números de teléfono en los archivos de un directorio.

```bash
grep -rEo '\+[0-9]{2}[0-9]{10}\b' .
```

Los parámetros `-rEo` opcionales del comando `grep` sirven para:

- `-r` búsqueda recursiva adentro de un directorio.
- `-E` permite utilizar expresiones regulares.
- `-o` indica solo coincidencia de un directorio.

El patrón regular en el comando `grep` busca coincidencia de un numero de teléfono con el formato: `+573205695174`.

## 4. Complejidad en las operaciones con la notación big(O)

Linked List:
 - get(): O(n)
 - add(): O(1)
 - contains(): O(n)
 - next(): O(1)
 - delete(): O(n)

Queue
 - get(): O(n)
 - add(): O(1)
 - contains(): O(n)
 - next(): O(1)
 - delete(): O(1)

Tree / Árbol
 - get(): O(log n)
 - add(): O(log n)
 - contains(): O(log n)
 - next(): O(n) o O(log n)
 - delete(): O(log n)

Hash Map
 - get(): O(1)
 - add(): O(1)
 - contains(): O(1)
 - next(): O(1)
 - delete(): O(1)

Por los resultados del análisis de las diferentes estructuras de datos, podemos concluir que la estructura Hash-Map tiene una mejor eficiencia que una Linded-List. Por otra parte, dependerá de las necesidades especificas para cada situación.

## 5. Ejecutar app MVC

1. Clonar el repositorio de: https://github.com/acvalencia/conversion.git

2. Instalar las dependencias

```bash
yarn install
```

ó

```bash
npm install
```

3. Ejecutar mongo db como aplicación docker

```bash
docker run -d -p 27017:27017 mongo
```

4. Ejecutar servidor con:

```bash
yarn start
```

ó

```bash
npm start
```

[![Screen Shot][screenshot2]](https://github.com/acvalencia/conversion)

[screenshot1]: images/Cartas.png
[screenshot2]: images/Captura.PNG
