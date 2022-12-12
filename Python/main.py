from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo")

    car = Car("ES-7890", Account("Andres Prendiz", "ANDA876"))
    print(vars(car))
    print(vars(car.driver))
    