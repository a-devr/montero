import java.util.Scanner;

public class Montero {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        System.out.println("========================================");
        System.out.println("              MONTERO");
        System.out.println("       RESTAURANT - CEVICHERIA");
        System.out.println("========================================");
        System.out.println();
        System.out.println("             CARTA VIRTUAL");
        System.out.println();
        System.out.println("1. Ceviche clásico");
        System.out.println("2. Ceviche mixto");
        System.out.println("3. Chicharrón de pescado");
        System.out.println("4. Arroz con mariscos");
        System.out.println("5. Parihuela");
        System.out.println();
        System.out.println("0. Salir");
        System.out.println();

        System.out.print("Seleccione una opción: ");
        int opcion = teclado.nextInt();

        System.out.println();

        System.out.println("Has seleccionado la opción: " + opcion);

        teclado.close();
    }
}