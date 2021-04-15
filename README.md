# SmartPlugExpoProject
# **STM32F4-Discovery**
[![NPM Version](https://img.shields.io/npm/v/homebridge-tplink-smarthome.svg)](https://www.npmjs.com/package/homebridge-tplink-smarthome)
[![verified-by-homebridge](https://badgen.net/badge/homebridge/verified/purple)](https://github.com/homebridge/homebridge/wiki/Verified-Plugins)

## **Propos de STMicroelectronics**
<img src="https://actufinance.fr/wp-content/uploads/2020/09/stmicroelectronics.jpg" align="right" alt="Eve Screenshot - Custom Characteristics" width=250>

- ST est un leader mondial sur le marché des semi-conducteurs.
- des solutions de traitement embarquées.
- la gestion de la consommation aux économies d'énergie.
- la confidentialité et la sécurité des données.
- ST est au cœur des applications professionnelles et de divertissements.

## **La carte STM32F407VG**
<img src="https://www.robotistan.com/stm32f4-discovery-eng-32681-58-B.jpg" align="right" alt="Eve Screenshot - Custom Characteristics" width=250>

### **Pourquoi STM32F4 ?**

- 32-bit ARM Cortex® -M4         
- FPU core et DSP
- 1-Mbyte memoire flash
- 192-Kbyte RAM
- Programmateur integré ST-LINK
- Alimentation USB 3 V et 5 V
- LIS302DL or LIS3DSH ST MEMS 3-axis accelerometer
- MP45DT02 ST MEMS audio sensor
- CS43L22 audio DAC
- Four user LEDs, LD3 (orange), LD4 (green), LD5 (red) and LD6 (blue)
- Deux boutons (user et reset)
- USB OTG
- 168MHZ fréquence
- 114-pins
## **Les Outils de développement**
![System Design Architecture](https://1.bp.blogspot.com/-hviwM-d2MZU/XahLzB2BRfI/AAAAAAAAHtw/NtEP9vk_6X0fOIO8PqGU_cju4H3nB8p6gCLcBGAsYHQ/s640/keil_5_title.png)
# **ESP8266**
<img src="https://www.sk.rs/2017/05/sklp05a.velika.jpg" align="right" alt="Eve Screenshot - Custom Characteristics" width=250>

- L’ESP8266 est un micro-contrôleur programmable conçu par Espressif, constructeur chinois.
- Le micro-contrôleur proprement dit est ridiculement petit (5mm x 5mm)
- Il supporte le WIFI (802.11 b/g/n)


1. Il n’y a pas de flash pour stocker le programme. En revanche, il est possible de l’interfacer avec une mémoire flash externe.

2. L’ESP8266 accepte 1V maximum sur sa broche analogique. Il y a 1,5 UART car il y en a un complet (broches RX et TX), et un à moitié complet (broche TX uniquement)

Comme vous avez pu le voir sur la photo précédente, ce format de micro-contrôleur est assez peu évident à manier tel quel. C’est pour ça qu’il est le plus souvent vendu sous forme de module prêt à l’emploi, contenant à minima : l’ESP8266, une mémoire flash externe, un pont diviseur de tension pour autoriser une mesure maximale à 3,3V.et quelques broches accessibles.

- Le module Node MCU 1.1 que nous allons utiliser est basé sur la version ESP12E du microcontrôleur ESP8266
de l’entreprise Amica
- Ce module permet permet d’ajouter 4Mb de mémoire flash au microcobtrôleur ESP8266, il n’y a pas cependant de prise pour une alimentation externe il faut alimenter avec les Pin Grd et 3.3V


