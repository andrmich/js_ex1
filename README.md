# PnK 2

## Informacje wstępne

Jeśli przeszkadza ci obecne formatowanie tekstu, pobierz PDF: https://transfer.grupazpr.pl/download?di=jLWKsX86Sm96tunzLo8xotWZ0EE6xer6eBhNbCNoIis&key=3332b8b63e8a8a7060b502f4a1fa540a

Naukę **nowoczesnego** JavaScript zaczynamy od małych kroków. Pierwsza lekcja polega głównie na:

* Zapoznaniu się z IDE Webowym.
* Zapoznaniu się z testami oraz pisaniem kodu tutaj.
* Zaponaniu się z nowym systemem definiowania zmiennych.

1. CodeSandbox to zintegrowany edytor online na potrzeby tworzenia kodu JS stricte w chmurze, 
bez potrzeby instalowania czegokolwiek na komputerze.

Aby zacząć pracę z kodem, proszę nacisnąć przycisk Fork znajdujący się w lewym górnym rogu. 
IDE automatycznie utworzy wam kopię kodu, gotową do edycji i modyfikacji.

* Po lewej stronie znajdują się podstawowe kontrolki (z czego na chwilę obecną najbardziej interesuje nas File Editor). 
* Po prawej stronie znajduje się widok: Wyników testów / Widok wbudowanej karty przeglądarki / Widok konsoli JS.
* Zapis plików odbywa się poprzez naciśnięcie buttonu Save bądź Ctrl + S.

Na starcie proszę nic nie zmieniać w plikach konfiguracyjnych oraz package.json.

PS: Czasami zdarzy się, że edytor się przytnie / nie reaguje na zmiany. 
Należy wtedy po prostu zapisać swój progress oraz odświeżyć przeglądarkę.

2. Każda lekcja w dużej mierze będzie opierać się o wytworzenie kodu, 
który przejdzie testy (na początku, tylko ja będę pisał testy).

Kod źródłowy, którym będziecie się zajmować, znajduje się w folderze src. 
Plik index.js jest plikiem startowym i on includuje wszystkie pozostałe pliki. 
Każde zadanie prosze wykonywać zgodnie z kolejnością którą opiszę w **README.md** bądź **index.js**. 
Tylko w ten sposób będę miał pewność, że testy wykonają się prawidłowo.

PS: Jeśli widzicie w kodzie jakieś dziwne konstrukcje, z którymi nigdy wcześniej się nie spotkaliście, 
a nigdzie nie wytłumaczyłem do czego służą, to proszę się zgłosić. Podejdę i wytłumaczę. 

3. Dziś zaczynamy od PODSTAWY PODSTAW czyli:

- definiowania zmiennych
- typów zmiennych 
- podstawowych instrukcji logicznych
- systemu modułów

**Zmienne oraz typy - informacje ogólne**

Samych zmiennych raczej przedstawiać wam nie muszę. Doskonale sobie zdajecie sprawę do czego są i jak powinno się ich
używać. To co nas najbardziej interesuje w tej sekcji, to jak zmieniła się inicjalizacja zmiennych względem starego kodu JS.

Kluczową zmianą jest wycofanie słowa kluczowego `var` i zastąpienie go dwoma nowymi `let` oraz `const`. 
Oczywiście, to nie jest tak że `var` całkowicie wylatuje ze składni, po prostu w nowym kodzie nie powinien być już stosowany, 
ze względu na swoje działanie i negatywny wpływ na wytworzony kod (dokładniej chodzi tu o: **var antipattern**).

Dlaczego `var` jest taki zły? 

* Zmienne deklarowane za pomocą `var` czy `function` są inicjalizowane przy wczytaniu kodu i mają przypisaną wartość `undefined`. 
* Sama implementacja `var` nie pozwala w sposób normalny ograniczać jej zasięgu działania. Jeśli w kodzie mamy kilka zmiennych
o tej samej nazwie, prawie na pewno spotkamy się z błędem nieporządanego nadpisania wartości.

Dla przykładu: 

```
for (var i = 0; i < 10; i++) {
  // cokolwiek
}
console.log(i);
```

Zwróci nam wartość **10**. (możecie sobie odpalić zakładkę Console i wkleić ten kod dla własnego sprawdzenia) 

Nie wygląda to za fajnie, prawda? Właśnie dlatego w ES6 doszło do małej rewolucji.

Stosując `const` i `let` - tworzymy zmienną o zasięgu **blokowym**, to znaczy
że alokacja pamięci następuje dopiero po wejściu w dany blok kodu. 
Dzięki temu silnik przeglądarki nie alokuje globalnych przypisań i nie zapycha sobie pamięci śmieciami. 

No dobra, a jaka jest w takim razie różnica pomiędzy tymi słowami kluczowymi? Po co mam stosować `const` jak mogę wszędzie
dawać `let`? 

`const` stosujemy w dwóch przypadkach:

* Jeśli wiemy, że dana zmienna się nigdy nie zmieni. (Wartości typu const nie możemy już zaktualizować)
* Jeśli chcemy funkcję zmapować na zmienną. 

**Moduły - informacje ogólne**

W starym JavaScript importowanie / ładowanie zewnętrznych modułów było czynnością dość karkołomną. 

* Musieliśmy importować w pliku HTML pojedyncze pliki .js w odpowiedniej kolejności. 
A następnie funkcje / obiekty przypisywać bezpośrednio do globalnego obiektu window (np. jQuery nadal tak robi). Oczywiście
to działało, jednak bardzo łatwo można było sobie zaśmiecić `global namespace`, co wykrzaczało dane elementy strony. 
Spróbujcie sobie zaimportować jQuery 3 a pod nim jQuery 1 oraz użyć jakiejś funkcji z 3'ki. Gwarantuje wam, że tylko googlowanie
problemu i pewnien post ze StackOverflow wyjaśni wam, żeby zmienić kolejność wczytywania plików bądź dogrania jQuery-migrate. 
Praktycznie ZAWSZE te błędy kończą się komunikatami **X is not defined.**. 

* Należało tworzyć gigantyczne pliki .js z całą logiką biznesową w środku. Nie ma nic lepszego niż definiowanie funkcji 
prywatnych:

```
(function () { 
  console.log('HA, TU MNIE NIE NADPISZESZ!')
})
```

Tylko po to, żeby nie nadpisać przypadkiem jakiejś zmiennej bądź własności. 

Co wprowadza nam ES6? **UPROSZCZONY SYSTEM MODUŁÓW** ! 

Na start może kilka słów kluczowych:

`export [nazwa]` - exportuje poza plik zmienną, funkcję, klasę. Wykonując import musimy jednak wskazać jej dokładną nazwę.
`export default [nazwa]` - exportuje poza plik zmienną, funkcję, klasę. Importując plik, importujemy od razu element default. 
`require([nazwa_pliku])` - dosłownie 'wczytuje' zawarość całego pliku w dane miejsce, ewentualnie przypisuje wartość do zmiennej.
Należy używać z rozwagą. 

`import nazwa_exportu from './nazwa_pliku'` - importujemy domyślną funkcję, klasę, zmienną z wybranego pliku (to ta poprzedzona słowem export default!)
`import {nazwa_exportu} from './nazwa-pliku'` - importujemy konkretną funkcję, klasę, zmienną z wybranego pliku. 
`import * as [moja-nazwa] from './nazwa-pliku'` - importujemy wszystkie wyexportowane funkcje, klasy, zmienne z wybranego pliku
oraz przypisujemy im namespace. 

Dla przykładu:

Mamy plik suma.js w którym mamy wyexportowaną funkcję `plus` oraz `minus` 

Teraz używając importu ogólnego w pliku index.js możemy użyć tych funkcji w sposób następujący: 

```
import * as myModule from './suma'

myModule.plus(1,2)
myModule.minus(3,2)

plus(1,2) // zwróci nam błąd!
```

Okej, to by było na tyle jeśli chodzi o teorię :). Czym dalej będziemy w materiale, tym mniejsza ilość teorii was czeka. 
Niestety, musicie wytrzymać te kilka dni.