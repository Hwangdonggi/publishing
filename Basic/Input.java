package Basic;

import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
//        int i = 1;
//        Scanner b = new Scanner(System.in); //prompt 역할
//        System.out.print("숫자 입력:");
//        int d  = b.nextInt(); //유저에게 정수를 입력받는 함수
//        System.out.printf("당신이 입력한 숫자 %d입니다.",d);

        //유저에게 두 정수를 입력 받고, 합,차,곱을 출력하는 프로그램
        Scanner a = new Scanner(System.in);
        System.out.print("숫자 입력1:");
        int c = a.nextInt();
        Scanner f = new Scanner(System.in);
        System.out.print("숫자 입력2:");
        int e = f.nextInt();

        System.out.printf("두수의 합은 %d\n",c+e);
        System.out.printf("두수의 차은 %d\n",c-e);
        System.out.printf("두수의 곱은 %d\n",c*e);




//        붕어빵 b = new 붕어빵();
//        잉어빵 c = new 잉어빵();
//        쌀국수 d = new 쌀국수();
//        붕어빵 e = new 슈크림맛붕버빵(); //정수 -> 실수
    }

}
