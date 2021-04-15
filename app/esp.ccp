#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WebServer.h>
#include <EEPROM.h>
#include <ThingSpeak.h>
WiFiClient client;

String thingSpeakAddress= "http://api.thingspeak.com/update?";
String writeAPIKey;
String tsfield1Name;
String request_string;

HTTPClient http;
//Variables
int i = 0;
int  j;
int statusCode;
const char *ssid = "text";
const char *passphrase = "text";
String st;
String content;

//Function Decalration
bool testWifi(void);
void launchWeb(void);
void setupAP(void);

//Establishing Local server at port 80 whenever required
ESP8266WebServer server(80);

void setup()
{   j = 0;
    ThingSpeak.begin(client);

    Serial.begin(115200); //Initialising if(DEBUG)Serial Monitor
    Serial.println();
    Serial.println("Disconnecting previously connected WiFi");
    WiFi.disconnect();
    EEPROM.begin(512); //Initialasing EEPROM
    delay(10);
    pinMode(LED_BUILTIN, OUTPUT);
    pinMode(2, OUTPUT);
    Serial.println();
    Serial.println();
    Serial.println("Startup");

    //---------------------------------------- Read EEPROM for SSID and pass
    Serial.println("Reading EEPROM ssid");

    String esid;
    for (int i = 0; i < 32; ++i)
    {
        esid += char(EEPROM.read(i));
    }
    Serial.println();
    Serial.print("SSID: ");
    Serial.println(esid);
    Serial.println("Reading EEPROM pass");

    String epass = "";
    for (int i = 32; i < 96; ++i)
    {
        epass += char(EEPROM.read(i));
    }
    Serial.print("PASS: ");
    Serial.println(epass);

    WiFi.begin(esid.c_str(), epass.c_str());
    if (testWifi())
    {
        Serial.println("Succesfully Connected!!!");
        return;
    }
    else
    {
        Serial.println("Turning the HotSpot On");
        launchWeb();
        setupAP(); // Setup HotSpot
    }

    Serial.println();
    Serial.println("Waiting.");

    while ((WiFi.status() != WL_CONNECTED))
    {
        Serial.print(".");
        delay(100);
        server.handleClient();
    }
    }
void loop()
{
    j = (ThingSpeak.readIntField(1347213,1,"SJGD1JD46FSIMF54"));
    if (j == 0) {
      digitalWrite(2,HIGH);

    }
    if (j == 1) {
      digitalWrite(2,LOW);

    }
    delay(15000);
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
      Serial.println("Donnees envoyer");

    }
    delay(15000);
   
}

//-------- Fuctions used for WiFi credentials saving and connecting to it which you do not need to change
bool testWifi(void)
{
    int c = 0;
    Serial.println("Waiting for Wifi to connect");
    while (c < 20)
    {
        if (WiFi.status() == WL_CONNECTED)
        {
            return true;
        }
        delay(500);
        Serial.print("*");
        c++;
    }
    Serial.println("");
    Serial.println("Connect timed out, opening AP");
    return false;
}

void launchWeb()
{
    Serial.println("");
    if (WiFi.status() == WL_CONNECTED)
        Serial.println("WiFi connected");
    Serial.print("Local IP: ");
    Serial.println(WiFi.localIP());
    Serial.print("SoftAP IP: ");
    Serial.println(WiFi.softAPIP());
    createWebServer();
    // Start the server
    server.begin();
    Serial.println("Server started");
}

void setupAP(void)
{
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    int n = WiFi.scanNetworks();
    Serial.println("scan done");
    if (n == 0)
        Serial.println("no networks found");
    else
    {
        Serial.print(n);
        Serial.println(" networks found");
        for (int i = 0; i < n; ++i)
        {
            // Print SSID and RSSI for each network found
            Serial.print(i + 1);
            Serial.print(": ");
            Serial.print(WiFi.SSID(i));
            Serial.print(" (");
            Serial.print(WiFi.RSSI(i));
            Serial.print(")");
            Serial.println((WiFi.encryptionType(i) == ENC_TYPE_NONE) ? " " : "*");
            delay(10);
        }
    }
    Serial.println("");
    st += String(n);
    for (int i = 0; i < n; ++i)
    {
        // Print SSID and RSSI for each network found
        st += ",";
        st += WiFi.SSID(i);
    }
    delay(100);
    WiFi.softAP("how2electronics", "");
    Serial.println("softap");
    launchWeb();
    Serial.println("over");
}

void createWebServer()
{
    {
        /////////////////////////////////////////////////////////////
        server.on("/", []() {
            IPAddress ip = WiFi.softAPIP();
            String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
            content = ipStr + ','+ st;
            server.send(200, "text/plain", content);  
        });

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
                Serial.println(qsid);
                Serial.println("");
                Serial.println(qpass);
                Serial.println("");

                Serial.println("writing eeprom ssid:");
                for (int i = 0; i < qsid.length(); ++i)
                {
                    EEPROM.write(i, qsid[i]);
                    Serial.print("Wrote: ");
                    Serial.println(qsid[i]);
                }
                Serial.println("writing eeprom pass:");
                for (int i = 0; i < qpass.length(); ++i)
                {
                    EEPROM.write(32 + i, qpass[i]);
                    Serial.print("Wrote: ");
                    Serial.println(qpass[i]);
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