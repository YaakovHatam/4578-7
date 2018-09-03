## HW
You should make the files inside `hw` folder!
- **PLEASE: Keep your code human READABLE**
- **Remeber:** all properies should be `private`
- Each class should have a constructor
- Write `get` and `set` functions if you want to change/read data.
- You can write your own functions if you want, they must be `private`.
- Each class/interface should have it's own file (You don't must, but this is a best practice).
### What to do
1. Please create a new interface called `IElectronicPart` with the following signatures:
    * `getSpecs()`
Every class that implement this interface should write a `getSpecs()` function that return: Class name, manufacturer, model &amp; price. take a look at the Results expected. 

2. Please create a new class called `ElectronicPart` with the following properties:
    * `$manufacturer`;
    * `$price`;
    * `$model`;

3. Please create a new class called `Screen` that extends `ElectronicPart` and implements `IElectronicPart` with the following properties:
    * `$size`;
    * `$panel`;

4. Please create a new class called `Mouse` that extends `ElectronicPart` and implements `IElectronicPart` with the following properties:
    * `$isWired`;

5. Please create a new class called `Keyboard` that extends `ElectronicPart` and implements `IElectronicPart` with the following properties:
    * `$isWired`;

6. Please create a new class called `Computer` that extends `ElectronicPart` and implements `IElectronicPart` with the following properties:
    * `$motherboard`;
    * `$processor`;
    * `$hardDrive`;
    * `$ram`;
    * `$graphicCard`;

7. Please create a new class called `purchase` with the following properties:
    * `$screen`;
    * `$mouse`;
    * `$keyboard`;
    * `$computer`;
    * `getFullPurchaseDetails()`;

### Use the tester!
You can find the main tester as the file `tester.php`, inside `hw` folder.

### Results expected
```
Screen manufacturer: Samsung, model: S24F350FH, Price: 723
Mouse manufacturer: Microsoft, model: Mobile Mouse 1850, Price: 129
Keyboard manufacturer: Microsoft, model: , Price: 325
Computer manufacturer: GIGABYTE, model: , Price: 3059

Screen manufacturer: Samsung, model: C27F591FD, Price: 2074
Mouse manufacturer: LogiTech, model: M185, Price: 128
Keyboard manufacturer: Microsoft, model: , Price: 325
Computer manufacturer: Intel, model: , Price: 1580

Screen manufacturer: Philips, model: 273V5LHAB, Price: 1517
Mouse manufacturer: LogiTech, model: MX Master, Price: 799
Keyboard manufacturer: Corsair, model: , Price: 799
Computer manufacturer: GIGABYTE, model: , Price: 3059

Screen manufacturer: Samsung, model: S22F350FH, Price: 620
Mouse manufacturer: Microsoft, model: Mobile Mouse 1850, Price: 129
Keyboard manufacturer: Logitech, model: , Price: 285
Computer manufacturer: AMD, model: , Price: 2418
```
