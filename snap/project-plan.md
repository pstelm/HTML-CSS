## Szkielet HTML

1. Górny pasek umieszczony w tagu <header>

- Elementy nawigacji w tagu <nav>
- Wewnątrz nawigacji logo w postaci linku do strony głównej oraz elementy nawigacji opakowane w listę <ul>
- Link do logowania i przycisk rejestracji w osobnym <div>

2. Główna treść strony w tagu <main>

- "Make remote work" w tagu <h1>
- Paragraf z tekstem
- Przycisk "learn more"
- kontener <div> zawierający loga klientów

3. Obraz w prawej części strony w tagu <aside>

## CSS

1. Layout strony za pomocą Grid Template Areas:

- header - górny pasek zawierający nawigację i logowanie/rejestrację,
- main - tekst w lewej części strony,
- aside - obrazek z prawej strony
- 3 puste kolumny o szerokości 1fr
- 1 pusty rząd o wysokości = wysokości headera

2. Rozmieszczenie elementów wewnątrz headera przy pomocy Flexboxa (nawigacja do lewej, panel logowania do prawej)
3. W tagu <main> elementy rozmieszczone wertykalnie przy pomocy flexboxa

- szerokość = 4fr
- <h1> i <button> w kolorze hsl(0, 0%, 8%)
- <div> z klientami rozmieszczonymi przy pomocy Flex + position: absolute

4. Tag <aside> o szerokości = 4fr
5. Kolory i font według wytycznych w style-guide.md
