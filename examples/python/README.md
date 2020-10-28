LiquidDonations Python Library
---
```bash
$ liquid_donations --help
Usage: liquid_donations [OPTIONS] FILENAME

Options:
  --help  Show this message and exit.
```
```bash
$ liquid_donations ./inputs/test.json

           Aaron  Nikola  Sean  Charity A  Charity B
Aaron        0.0     0.1   0.1        0.4        0.4
Nikola       0.1     0.0   0.1        0.0        0.8
Sean         0.1     0.1   0.0        0.8        0.0
Charity A    0.0     0.0   0.0        1.0        0.0
Charity B    0.0     0.0   0.0        0.0        1.0

        Charity A  Charity B
Aaron    0.500000   0.500000
Nikola   0.136364   0.863636
Sean     0.863636   0.136364
```

Small Example
```bash
$ cat ./inputs/test.json
{
  "Aaron": {
    "Charity A": 40,
    "Charity B": 40,
    "Sean": 10,
    "Nikola": 10
  },
  "Sean": {
    "Charity A": 80,
    "Charity B": 0,
    "Aaron": 10,
    "Nikola": 10
  },
  "Nikola": {
    "Charity A": 0,
    "Charity B": 80,
    "Aaron": 10,
    "Sean": 10
  }
}
```


Bigger Example
```bash
$ cat ./inputs/bigger_example.json
{
  "Aaron": {
    "Claire": 20,
    "Kat": 20,
    "Sean": 20,
    "Nikola": 20,
    "Anders": 20
  },
  "Sean": {
    "Charity A": 80,
    "Charity B": 0,
    "Aaron": 10,
    "Nikola": 10
  },
  "Nikola": {
    "Claire": 30,
    "Kat": 30,
    "Charity C": 30,
    "Charity D": 10
  },
  "Kat": {
      "Sean": 10,
      "Charity E": 90
  },
  "Claire": {
      "Nikola": 50,
      "Anders": 50
  },
  "Anders": {
      "Charity A": 20,
      "Charity B": 20,
      "Charity C": 20,
      "Charity D": 20,
      "Charity E": 20
  }
}
```
```bash
$ liquid_donations ./inputs/bigger_example.json

           Aaron  Anders  Claire  Kat  Nikola  Sean  Charity A  Charity B  Charity C  Charity D  Charity E
Aaron        0.0     0.2     0.2  0.2     0.2   0.2        0.0        0.0        0.0        0.0        0.0
Anders       0.0     0.0     0.0  0.0     0.0   0.0        0.2        0.2        0.2        0.2        0.2
Claire       0.0     0.5     0.0  0.0     0.5   0.0        0.0        0.0        0.0        0.0        0.0
Kat          0.0     0.0     0.0  0.0     0.0   0.1        0.0        0.0        0.0        0.0        0.9
Nikola       0.0     0.0     0.3  0.3     0.0   0.0        0.0        0.0        0.3        0.1        0.0
Sean         0.1     0.0     0.0  0.0     0.1   0.0        0.8        0.0        0.0        0.0        0.0
Charity A    0.0     0.0     0.0  0.0     0.0   0.0        1.0        0.0        0.0        0.0        0.0
Charity B    0.0     0.0     0.0  0.0     0.0   0.0        0.0        1.0        0.0        0.0        0.0
Charity C    0.0     0.0     0.0  0.0     0.0   0.0        0.0        0.0        1.0        0.0        0.0
Charity D    0.0     0.0     0.0  0.0     0.0   0.0        0.0        0.0        0.0        1.0        0.0
Charity E    0.0     0.0     0.0  0.0     0.0   0.0        0.0        0.0        0.0        0.0        1.0

        Charity A  Charity B  Charity C  Charity D  Charity E
Aaron    0.262606   0.073096   0.189848   0.112014   0.362437
Anders   0.200000   0.200000   0.200000   0.200000   0.200000
Claire   0.132342   0.117839   0.295141   0.176940   0.277737
Kat      0.083273   0.001088   0.005801   0.002659   0.907179
Nikola   0.064685   0.035678   0.390283   0.153880   0.355475
Sean     0.832729   0.010877   0.058013   0.026589   0.071791
```
