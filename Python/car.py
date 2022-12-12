class Car:
    id = int
    license = str 
    driver = str 
    passenger = str

    def __init__(self, license, driver):
        self.license    = license
        self.driver     = driver