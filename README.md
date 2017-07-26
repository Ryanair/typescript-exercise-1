# typescript-exercise-1
Workshop Typescript exercise on data types and functions.

The main purpose of this exercise if to get familiar with Typescsript's
data types and function declarations.


## Exercise 1


Given a language that uses only 4 letters:

```
{ A, T, G, C}
```

and a grammar of the following 2 rules:

```
A can only pair with T, and vice versa
G can only pair with C, and vice versa
```

so it is:

```
A -> T
T -> A
G -> C
C -> G
```

Create a function that takes any sequence of those 4 letters and replies
with a sequence of the complementary letters i.e the letters they pair with.

### Example

Let sequence be 'ATGCATCAGACT'.

Then solution is:

```
TACGTAGTCTGA
```

## Guide

Try and be more **strict** when declaring a variable i.e

```ts
const myVar = 'anything';   // Bad!
const myVar: string = 'anything';  // Good!
```

and also when declaring a function i.e

```ts
const add = (x, y) => x + y; // Bad!
const add: number = (x: number, y: number): number => x + y; // Good!
```

## Extra Help

If you need to convert an enum to string then you can do it that way:

```ts
enum Base { A, T, G, C}
const name: string = Base[Base.A];
```
