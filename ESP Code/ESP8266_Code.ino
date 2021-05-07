 #include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WebServer.h>
#include <EEPROM.h>
#include <ThingSpeak.h>
WiFiClient client;
//Pour envoyer les donnees à la plateform
String thingSpeakAddress= "http://api.thingspeak.com/update?";
String writeAPIKey;
String tsfield1Name;
String request_string;
HTTPClient http;
//Variables
bool wificonnected=true;
int j= 0;
int statusCode;
const char *ssid = "text";
const char *passphrase = "text";
String st;
String content;
//Function Decalration
bool testWifi(void);
void launchWeb(void);
void setupAP(void);
//Établissement du serveur local sur le port 80 chaque fois que nécessaire
ESP8266WebServer server(80);
//---------------------------------------------------------------- SETUP --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
void setup()
{
    ThingSpeak.begin(client);
    WiFi.disconnect(); //Déconnexion du WiFi précédemment connecté
    EEPROM.begin(512); //Initialisation de EEPROM
    delay(10);
    pinMode(LED_BUILTIN, OUTPUT);
//Lire SSID et pass depuis EEPROM 
    String esid;
    for (int i = 0; i < 32; ++i)
    {
        esid += char(EEPROM.read(i));
    }
    String epass = "";
    for (int i = 32; i < 96; ++i)
    {
        epass += char(EEPROM.read(i));
    }
    WiFi.begin(esid.c_str(), epass.c_str()); // Connexion au réseau wifi déjà enregistré dans EEPROM
    if (testWifi()) //ESP est connecté au Wi-Fi.
    {
        return; //Connecté avec succès. Pour sortir de setup()
    }
    else  //ESP n'est pas connecté au Wi-Fi.
    { 
        launchWeb();  // Construction et démarrage du serveur HTTP
        setupAP(); // Construction et démarrage du point d'accès AP 
    }
    while ((WiFi.status() != WL_CONNECTED))
    {
        delay(100);
        server.handleClient();
    }
    }
//---------------------------------------------------------------- LOOP ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
void loop()
{   if(wificonnected==true){
    for(int p=0; p<10;p++){
      digitalWrite(LED_BUILTIN,LOW);
      delay(1000);
      digitalWrite(LED_BUILTIN,HIGH);
      delay(1000);
    }
      wificonnected=false;
  }
    j = (ThingSpeak.readIntField(1347213,1,"SJGD1JD46FSIMF54"));
    if (j == 1) {
      digitalWrite(LED_BUILTIN,LOW);

    }
    if (j == 0) {
      digitalWrite(LED_BUILTIN,HIGH);

    }
    delay(15000);
    //Envoyer les données
    if (client.connect("api.thingspeak.com",80)) {
      request_string = thingSpeakAddress;
      request_string += "key="; 
      request_string += "X9HAUUWEA5WXIVKT";
      request_string += "&";
      request_string += "field1";
      request_string += "=";
      request_string += (random(0,100));
      http.begin(request_string);
      http.GET();
      http.end();
    }
    delay(15000);
   
}
//------------Fonctions utilisées pour l'enregistrement et la connexion des informations d'identification WiFi que vous n'avez pas besoin de modifier---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bool testWifi(void)
{
    int c = 0;
   //While permet d'attendre que l'ESP connecte au Wifi
    while (c < 20)
    {
        if (WiFi.status() == WL_CONNECTED)
        {
          //ESP est connecté.
            return true;
        }
        delay(500);
        c++;
    }
    //Délai de connexion est depasse, L'ouverture du point d'accès AP.
    return false;
}

void launchWeb()
{
    //Construction des réponses HTTP
    createWebServer();
    // Démarrer le serveur HTTP.
    server.begin();    
}

void setupAP()
{
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    int n = WiFi.scanNetworks(); //Nombre des réseaux sans fils dans les environs
  
    //Remplir varialble st par la liste des réseaux sans fils
    if (n != 0) {
      st += String(n);
        for (int i = 0; i < n; ++i)
        {
        st += ",";
        st += WiFi.SSID(i);
        }
    }
    delay(100);
    WiFi.mode(WIFI_AP);
    WiFi.softAP("SmartPlug-GEP", ""); // Donner un nom à l'AP de l'ESP
    //launchWeb();
}

void createWebServer()
{
    {
        //le serveur répond par la liste des réseaux sans fils dans les environs.
        server.on("/", []() {
            IPAddress ip = WiFi.softAPIP();
            String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
            content = ipStr + ','+ st;
            server.send(200, "text/plain", content);  
        });
        
      //le serveur traite les données reçus (SSID et mot de passe) et les écrit dans le EEPROM
        server.on("/setting", []() {
            String qsid = server.arg("ssid");
            String qpass = server.arg("pass");
            if (qsid.length() > 0 && qpass.length() > 0)
            {
                Serial.println("clearing eeprom");
                for (int i = 0; i < 96; ++i)
                {
                    EEPROM.write(i, 0);
                }
                for (int i = 0; i < qsid.length(); ++i)
                {
                    EEPROM.write(i, qsid[i]);
                }
                Serial.println("writing eeprom pass:");
                for (int i = 0; i < qpass.length(); ++i)
                {
                    EEPROM.write(32 + i, qpass[i]);
                }
                EEPROM.commit();

                content = "{\"Success\":\"saved to eeprom... reset to boot into new wifi\"}";
                statusCode = 200;
                server.send(statusCode, "application/json", content);
                delay(5000);
                ESP.reset();
            }
            else
            {
                content = "{\"Error\":\"404 not found\"}";
                statusCode = 404;
                Serial.println("Sending 404");
            }
            server.sendHeader("Access-Control-Allow-Origin", "*");
            server.send(statusCode, "application/json", content);
        });
    }
}
