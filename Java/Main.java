class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");

        Car car = new Car("ES-7890", new Account("Andres Préndiz", "561-201275-0002X"));
        car.passenger = 4;
        car.printDataCar();

        Car car2 = new Car("RI-1109", new Account("Mary Prendiz", "561-110999-0002M"));
        car2.passenger = 3;
        car2.printDataCar();
    }
}