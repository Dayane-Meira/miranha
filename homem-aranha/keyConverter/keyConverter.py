import time
import hashlib

''' 
Gerador de hash para utilizacao da API da Marvel
O hash gerado é uma combinação de: Timestamp + Private Key + Public Key 
'''

print('''               ..#@#########@@!..                
            :##!:!::::::!!::::::!##@!.            
         !#!:::::!!!#!!####!#####!!!!!##.         
       ##:!!!:!#!!!!!!!!##!!!!!#!##!!@###@!       
     :#::!###@!!!!!#@@@####@#@#!!!!!@@@@#!!@:     
    !#!.###@@@@@@#!!!#!!!!!!!!!!##@@@@@@@!!!@:.   
   ##::##@:  :@@@@#!!@!!!!!!@!!#@@@@#. @@@!!!@:.  
  .#:::###.     .#@@#!!!!!!#!#@@#.     .@@@!!#@.  
  !#!!##@!         :@@#!!!!@@#.        .@@@###@:. 
  !@:::#@#.          !@@!#@#.          .@@@!!#@:. 
   #::!#@@.          !@!!#@#           !@@!!!#@:  
   !#!!!#@@!        :@@###!@!         #@@!!!#@!.  
    !#!!!!@@@#.  :@@@##!!!#!@@@     !@@#!!!#@!.   
     :@!!#!!!#@@@@!!!!#!!!#!!!#@@@@@#!!####@!.    
      .#@!!!!!!!#!!!!#!!!!!@!!!!#@!!!!!##@#:.     
        .!@#!!#!!!!!!##!!!###!!!!!#!!#@@!:.       
           .!#@##!!!!#!!!!!!#!!!##@@#!:.          
              ..:!##@@@@@@@@@@##!!:..             
                       .....    ''')
print("=-=-=-=-=- HASH CONVERTER FOR MARVEL API =-=-=-=-=-=-=-=-=-\n")

# Captura das variaveis necessarias
# Gera o Timestamp
ts = int(time.time()) 
#Captura as chaves
public = str(input("Your Public key: "))
private = str(input("Your Private key: "))
#Gera o hash 
hash = hashlib.md5(str.encode(f"{ts}{private}{public}"))

print("\nCole esse texto no final da URL:")
print(f"?ts={ts}&apikey={public}&hash={hash.hexdigest()}") # Montagem dos parametros, ja prontos pra colar na url
pause = input("\nPressione qualquer tecla para sair...") 